/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  MongoDBCollectionCreateUpdateParameters,
  CosmosDBManagementClient
} from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Create or update an Azure Cosmos DB MongoDB Collection
 *
 * @summary Create or update an Azure Cosmos DB MongoDB Collection
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-05-15/examples/CosmosDBMongoDBCollectionCreateUpdate.json
 */
async function cosmosDbMongoDbcollectionCreateUpdate() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const collectionName = "collectionName";
  const createUpdateMongoDBCollectionParameters: MongoDBCollectionCreateUpdateParameters = {
    location: "West US",
    options: {},
    resource: {
      id: "collectionName",
      indexes: [
        {
          key: { keys: ["_ts"] },
          options: { expireAfterSeconds: 100, unique: true }
        },
        { key: { keys: ["_id"] } }
      ],
      shardKey: { testKey: "Hash" }
    },
    tags: {}
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.mongoDBResources.beginCreateUpdateMongoDBCollectionAndWait(
    resourceGroupName,
    accountName,
    databaseName,
    collectionName,
    createUpdateMongoDBCollectionParameters
  );
  console.log(result);
}

cosmosDbMongoDbcollectionCreateUpdate().catch(console.error);
