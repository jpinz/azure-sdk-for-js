/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Lists eligible SKUs for Kusto resource provider.
 *
 * @summary Lists eligible SKUs for Kusto resource provider.
 * x-ms-original-file: specification/azure-kusto/resource-manager/Microsoft.Kusto/stable/2021-08-27/examples/KustoClustersListSkus.json
 */
const { KustoManagementClient } = require("@azure/arm-kusto");
const { DefaultAzureCredential } = require("@azure/identity");

async function kustoClustersListSkus() {
  const subscriptionId = "12345678-1234-1234-1234-123456789098";
  const credential = new DefaultAzureCredential();
  const client = new KustoManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.clusters.listSkus()) {
    resArray.push(item);
  }
  console.log(resArray);
}

kustoClustersListSkus().catch(console.error);
