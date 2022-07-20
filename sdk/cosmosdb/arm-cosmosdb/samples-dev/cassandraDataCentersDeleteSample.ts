/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { CosmosDBManagementClient } from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Delete a managed Cassandra data center.
 *
 * @summary Delete a managed Cassandra data center.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-05-15/examples/CosmosDBManagedCassandraDataCenterDelete.json
 */
async function cosmosDbManagedCassandraDataCenterDelete() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "cassandra-prod-rg";
  const clusterName = "cassandra-prod";
  const dataCenterName = "dc1";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.cassandraDataCenters.beginDeleteAndWait(
    resourceGroupName,
    clusterName,
    dataCenterName
  );
  console.log(result);
}

cosmosDbManagedCassandraDataCenterDelete().catch(console.error);
