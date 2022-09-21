/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { DynatraceObservability } from "@azure/arm-dynatrace";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets list of App Services with Dynatrace PaaS OneAgent enabled
 *
 * @summary Gets list of App Services with Dynatrace PaaS OneAgent enabled
 * x-ms-original-file: specification/dynatrace/resource-manager/Dynatrace.Observability/stable/2021-09-01/examples/Monitors_ListAppServices_MaximumSet_Gen.json
 */
async function monitorsListAppServicesMaximumSetGen() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const monitorName = "myMonitor";
  const credential = new DefaultAzureCredential();
  const client = new DynatraceObservability(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.monitors.listAppServices(
    resourceGroupName,
    monitorName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

monitorsListAppServicesMaximumSetGen().catch(console.error);

/**
 * This sample demonstrates how to Gets list of App Services with Dynatrace PaaS OneAgent enabled
 *
 * @summary Gets list of App Services with Dynatrace PaaS OneAgent enabled
 * x-ms-original-file: specification/dynatrace/resource-manager/Dynatrace.Observability/stable/2021-09-01/examples/Monitors_ListAppServices_MinimumSet_Gen.json
 */
async function monitorsListAppServicesMinimumSetGen() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const monitorName = "myMonitor";
  const credential = new DefaultAzureCredential();
  const client = new DynatraceObservability(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.monitors.listAppServices(
    resourceGroupName,
    monitorName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

monitorsListAppServicesMinimumSetGen().catch(console.error);