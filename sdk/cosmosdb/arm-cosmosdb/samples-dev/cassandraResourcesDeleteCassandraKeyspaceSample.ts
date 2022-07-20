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
 * This sample demonstrates how to Deletes an existing Azure Cosmos DB Cassandra keyspace.
 *
 * @summary Deletes an existing Azure Cosmos DB Cassandra keyspace.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-05-15/examples/CosmosDBCassandraKeyspaceDelete.json
 */
async function cosmosDbCassandraKeyspaceDelete() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const keyspaceName = "keyspaceName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.cassandraResources.beginDeleteCassandraKeyspaceAndWait(
    resourceGroupName,
    accountName,
    keyspaceName
  );
  console.log(result);
}

cosmosDbCassandraKeyspaceDelete().catch(console.error);
