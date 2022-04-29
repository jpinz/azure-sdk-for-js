/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import {
  AccountsImpl,
  DefaultAccountsImpl,
  OperationsImpl,
  PrivateEndpointConnectionsImpl,
  PrivateLinkResourcesImpl
} from "./operations";
import {
  Accounts,
  DefaultAccounts,
  Operations,
  PrivateEndpointConnections,
  PrivateLinkResources
} from "./operationsInterfaces";
import { PurviewManagementClientOptionalParams } from "./models";

export class PurviewManagementClient extends coreClient.ServiceClient {
  $host: string;
  subscriptionId: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the PurviewManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The subscription identifier
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: PurviewManagementClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: PurviewManagementClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-purview/1.0.2`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    if (!options.credentialScopes) {
      options.credentialScopes = ["https://management.azure.com/.default"];
    }
    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri:
        options.endpoint ?? options.baseUri ?? "https://management.azure.com"
    };
    super(optionsWithDefaults);

    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] = options.pipeline.getOrderedPolicies();
      const bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName
      );
      if (!bearerTokenAuthenticationPolicyFound) {
        this.pipeline.removePolicy({
          name: coreRestPipeline.bearerTokenAuthenticationPolicyName
        });
        this.pipeline.addPolicy(
          coreRestPipeline.bearerTokenAuthenticationPolicy({
            scopes: `${optionsWithDefaults.baseUri}/.default`,
            challengeCallbacks: {
              authorizeRequestOnChallenge:
                coreClient.authorizeRequestOnClaimChallenge
            }
          })
        );
      }
    }
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2021-07-01";
    this.accounts = new AccountsImpl(this);
    this.defaultAccounts = new DefaultAccountsImpl(this);
    this.operations = new OperationsImpl(this);
    this.privateEndpointConnections = new PrivateEndpointConnectionsImpl(this);
    this.privateLinkResources = new PrivateLinkResourcesImpl(this);
  }

  accounts: Accounts;
  defaultAccounts: DefaultAccounts;
  operations: Operations;
  privateEndpointConnections: PrivateEndpointConnections;
  privateLinkResources: PrivateLinkResources;
}
