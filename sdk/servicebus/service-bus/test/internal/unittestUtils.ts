// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ConnectionContext } from "../../src/connectionContext";
import { AwaitableSender, Receiver as RheaReceiver, ReceiverEvents } from "rhea-promise";
import { DefaultDataTransformer, AccessToken } from "@azure/core-amqp";
import { ConcurrentExpiringMap } from "../../src/util/concurrentExpiringMap";
import { EventEmitter } from "events";
import { getUniqueName } from "../../src/util/utils";

/**
 * Creates a fake ConnectionContext for tests that can create semi-realistic
 * senders (less realistic, could use some work) and receivers (decent!).
 *
 * Please feel free to expand this - every little bit helps the unit tests!
 *
 * @param options Makes it simple for you to modify the rhea
 * receiver (via onCreateReceiverCalled) or get notified when a sender
 * is created (via onCreateAwaitableSenderCalled).
 *
 */
export function createConnectionContextForTests(options?: {
  onCreateAwaitableSenderCalled?: () => void;
  onCreateReceiverCalled?: (receiver: RheaReceiver) => void;
}): ConnectionContext & { initWasCalled: boolean } {
  let initWasCalled = false;

  const fakeConnectionContext = {
    async readyToOpenLink(): Promise<void> {},
    batchingReceivers: {},
    streamingReceivers: {},
    senders: {},
    messageSessions: {},
    managementClients: {},
    config: { endpoint: "my.service.bus" },
    connectionId: "connection-id",
    requestResponseLockedMessages: new ConcurrentExpiringMap<string>(),
    connection: {
      id: "connection-id",

      isOpen(): boolean {
        return true;
      },
      createAwaitableSender: async (): Promise<AwaitableSender> => {
        if (options?.onCreateAwaitableSenderCalled) {
          options.onCreateAwaitableSenderCalled();
        }

        const testAwaitableSender = ({
          setMaxListeners: () => testAwaitableSender
        } as any) as AwaitableSender;

        return testAwaitableSender;
      },
      createReceiver: async (): Promise<RheaReceiver> => {
        const receiver = createRheaReceiverForTests();

        if (options?.onCreateReceiverCalled) {
          options.onCreateReceiverCalled(receiver);
        }

        (receiver as any).connection = { id: "connection-id" };
        return receiver;
      }
    },
    dataTransformer: new DefaultDataTransformer(),
    tokenCredential: {
      getToken() {
        return {} as AccessToken;
      }
    },
    cbsSession: {
      cbsLock: "cbs-lock",
      async init() {
        initWasCalled = true;
      },
      async negotiateClaim(): Promise<void> {}
    },
    initWasCalled
  };

  return (fakeConnectionContext as any) as ReturnType<typeof createConnectionContextForTests>;
}

/**
 * Creates a fake rhea receiver that tries to obey some simple rules to make it useful when
 * you'd need a "real" one in your test. Notably:
 *
 * - It respects addCredit() and tracks that value properly.
 * - It handles draining (via the .drain = true/addCredit(1) combo of operations).
 * - It respects .close(), so the state of the receiver should be accurate for isOpen().
 */
export function createRheaReceiverForTests() {
  const receiver = new EventEmitter() as RheaReceiver;

  (receiver as any).name = getUniqueName("entity");

  (receiver as any).connection = {
    id: "connection-id"
  };

  (receiver as any).addCredit = (credit: number) => {
    if ((receiver as any).credit == null || isNaN((receiver as any).credit)) {
      (receiver as any).credit = 0;
    }

    (receiver as any).credit += credit;

    if (credit === 1 && receiver.drain) {
      (receiver as any).credit = 0;
      receiver.emit(ReceiverEvents.receiverDrained, undefined);
    }
  };

  let isOpen = true;

  (receiver as any).close = async (): Promise<void> => {
    isOpen = false;
  };

  (receiver as any).isOpen = () => isOpen;
  return receiver;
}

export function getPromiseResolverForTest(): {
  promise: Promise<void>;
  resolve: () => void;
  reject: (err: Error) => void;
} {
  let resolver: () => void;
  let rejecter: (err: Error) => void;

  const promise = new Promise<void>((resolve, reject) => {
    resolver = resolve;
    rejecter = reject;
  });

  return {
    promise,
    resolve: resolver!,
    reject: rejecter!
  };
}

export function defer<T>(): {
  promise: Promise<T>;
  resolve: (t: T) => void;
  reject: (err: Error) => void;
} {
  let actualResolve: (t: T) => void;
  let actualReject: (err: Error) => void;

  const promise = new Promise<T>((resolve, reject) => {
    actualResolve = resolve;
    actualReject = reject;
  });

  return {
    promise,
    resolve: actualResolve!,
    reject: actualReject!
  };
}
