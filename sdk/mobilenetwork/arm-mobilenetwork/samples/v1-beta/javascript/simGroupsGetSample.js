/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { MobileNetworkManagementClient } = require("@azure/arm-mobilenetwork");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets information about the specified SIM group.
 *
 * @summary Gets information about the specified SIM group.
 * x-ms-original-file: specification/mobilenetwork/resource-manager/Microsoft.MobileNetwork/preview/2022-04-01-preview/examples/SimGroupGet.json
 */
async function getSimGroup() {
  const subscriptionId = "subid";
  const resourceGroupName = "testResourceGroupName";
  const simGroupName = "testSimGroupName";
  const credential = new DefaultAzureCredential();
  const client = new MobileNetworkManagementClient(credential, subscriptionId);
  const result = await client.simGroups.get(resourceGroupName, simGroupName);
  console.log(result);
}

getSimGroup().catch(console.error);