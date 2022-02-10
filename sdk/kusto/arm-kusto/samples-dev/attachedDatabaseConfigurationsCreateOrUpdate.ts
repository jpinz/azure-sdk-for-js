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
 * This sample demonstrates how to Creates or updates an attached database configuration.
 *
 * @summary Creates or updates an attached database configuration.
 * x-ms-original-file: specification/azure-kusto/resource-manager/Microsoft.Kusto/stable/2021-08-27/examples/KustoAttachedDatabaseConfigurationsCreateOrUpdate.json
 */
import {
  AttachedDatabaseConfiguration,
  KustoManagementClient
} from "@azure/arm-kusto";
import { DefaultAzureCredential } from "@azure/identity";

async function attachedDatabaseConfigurationsCreateOrUpdate() {
  const subscriptionId = "12345678-1234-1234-1234-123456789098";
  const resourceGroupName = "kustorptest";
  const clusterName = "kustoclusterrptest4";
  const attachedDatabaseConfigurationName = "attachedDatabaseConfigurations1";
  const parameters: AttachedDatabaseConfiguration = {
    clusterResourceId:
      "/subscriptions/12345678-1234-1234-1234-123456789098/resourceGroups/kustorptest/providers/Microsoft.Kusto/Clusters/KustoClusterLeader",
    databaseName: "kustodatabase",
    defaultPrincipalsModificationKind: "Union",
    location: "westus",
    tableLevelSharingProperties: {
      externalTablesToExclude: ["ExternalTable2"],
      externalTablesToInclude: ["ExternalTable1"],
      materializedViewsToExclude: ["MaterializedViewTable2"],
      materializedViewsToInclude: ["MaterializedViewTable1"],
      tablesToExclude: ["Table2"],
      tablesToInclude: ["Table1"]
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new KustoManagementClient(credential, subscriptionId);
  const result = await client.attachedDatabaseConfigurations.beginCreateOrUpdateAndWait(
    resourceGroupName,
    clusterName,
    attachedDatabaseConfigurationName,
    parameters
  );
  console.log(result);
}

attachedDatabaseConfigurationsCreateOrUpdate().catch(console.error);
