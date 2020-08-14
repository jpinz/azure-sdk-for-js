// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import chai from "chai";
import { ServiceBusMessageBatchImpl } from "../../src/serviceBusMessageBatch";
import { ConnectionContext } from "../../src/connectionContext";
import { ServiceBusMessage } from "../../src";
import { isServiceBusMessageBatch, SenderImpl } from "../../src/sender";
import { DefaultDataTransformer } from "@azure/core-amqp";

const assert = chai.assert;

describe("Sender helper unit tests", () => {
  it("isServiceBusMessageBatch", () => {
    assert.isTrue(
      isServiceBusMessageBatch(new ServiceBusMessageBatchImpl({} as ConnectionContext, 100))
    );

    assert.isFalse(isServiceBusMessageBatch(undefined));
    assert.isFalse(isServiceBusMessageBatch((4 as any) as ServiceBusMessage));
    assert.isFalse(isServiceBusMessageBatch(({} as any) as ServiceBusMessage));
  });
});

describe("sender unit tests", () => {
  const fakeContext = createConnectionContextForTests();
  const sender = new SenderImpl(fakeContext, "fakeEntityPath");
  sender["_sender"].createBatch = async () => {
    return new ServiceBusMessageBatchImpl(fakeContext, 100);
  };

  ["hello", {}, 123, null, undefined, ["hello"]].forEach((invalidValue) => {
    it(`don't allow Sender.sendMessages(${invalidValue})`, async () => {
      let expectedErrorMsg =
        "Provided value for 'messages' must be of type ServiceBusMessage, ServiceBusMessageBatch or an array of type ServiceBusMessage.";
      if (invalidValue === null || invalidValue === undefined) {
        expectedErrorMsg = `Missing parameter "messages"`;
      }
      try {
        await sender.sendMessages(
          // @ts-expect-error
          invalidValue
        );
      } catch (err) {
        assert.equal(err.name, "TypeError");
        assert.equal(err.message, expectedErrorMsg);
      }
    });
  });

  ["hello", {}, null, undefined].forEach((invalidValue) => {
    it(`don't allow tryAdd(${invalidValue})`, async () => {
      const batch = await sender.createBatch();
      let expectedErrorMsg = "Provided value for 'message' must be of type ServiceBusMessage.";
      if (invalidValue === null || invalidValue === undefined) {
        expectedErrorMsg = `Missing parameter "message"`;
      }
      try {
        batch.tryAdd(
          // @ts-expect-error
          invalidValue
        );
      } catch (err) {
        assert.equal(err.name, "TypeError");
        assert.equal(err.message, expectedErrorMsg);
      }
    });
  });

  ["hello", {}, null, undefined, ["hello"]].forEach((invalidValue) => {
    it(`don't allow Sender.scheduleMessages(${invalidValue})`, async () => {
      let expectedErrorMsg =
        "Provided value for 'messages' must be of type ServiceBusMessage or an array of type ServiceBusMessage.";
      if (invalidValue === null || invalidValue === undefined) {
        expectedErrorMsg = `Missing parameter "messages"`;
      }

      try {
        await sender.scheduleMessages(
          new Date(),
          // @ts-expect-error
          invalidValue
        );
      } catch (err) {
        assert.equal(err.name, "TypeError");
        assert.equal(err.message, expectedErrorMsg);
      }
    });
  });
});

function createConnectionContextForTests(): ConnectionContext & { initWasCalled: boolean } {
  let initWasCalled = false;

  const fakeConnectionContext = {
    config: { endpoint: "my.service.bus" },
    connectionId: "connection-id",
    dataTransformer: new DefaultDataTransformer(),
    cbsSession: {
      cbsLock: "cbs-lock",
      async init() {
        initWasCalled = true;
      }
    },
    senders: {},
    managementClients: {},
    initWasCalled
  };

  return (fakeConnectionContext as any) as ReturnType<typeof createConnectionContextForTests>;
}
