/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MobileNetworkManagementClient } from "@azure/arm-mobilenetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets information about the specified packet core control plane version.
 *
 * @summary Gets information about the specified packet core control plane version.
 * x-ms-original-file: specification/mobilenetwork/resource-manager/Microsoft.MobileNetwork/preview/2022-04-01-preview/examples/PacketCoreControlPlaneVersionGet.json
 */
async function getPacketCoreControlPlaneVersion() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const versionName = "PMN-4-11-1";
  const credential = new DefaultAzureCredential();
  const client = new MobileNetworkManagementClient(credential, subscriptionId);
  const result = await client.packetCoreControlPlaneVersions.get(versionName);
  console.log(result);
}

getPacketCoreControlPlaneVersion().catch(console.error);