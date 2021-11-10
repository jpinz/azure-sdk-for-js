/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const SchemaGroups: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SchemaGroups",
    modelProperties: {
      schemaGroups: {
        serializedName: "schemaGroups",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ErrorModel: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorDetail"
        }
      }
    }
  }
};

export const ErrorDetail: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorDetail",
    modelProperties: {
      code: {
        serializedName: "code",
        required: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        required: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorDetail"
            }
          }
        }
      }
    }
  }
};

export const SchemaVersions: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SchemaVersions",
    modelProperties: {
      schemaVersions: {
        serializedName: "schemaVersions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      }
    }
  }
};

export const SchemaId: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SchemaId",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SchemaGetByIdHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SchemaGetByIdHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      contentType: {
        serializedName: "content-type",
        type: {
          name: "String"
        }
      },
      schemaId: {
        serializedName: "schema-id",
        type: {
          name: "String"
        }
      },
      schemaIdLocation: {
        serializedName: "schema-id-location",
        type: {
          name: "String"
        }
      },
      schemaGroupName: {
        serializedName: "schema-group-name",
        type: {
          name: "String"
        }
      },
      schemaName: {
        serializedName: "schema-name",
        type: {
          name: "String"
        }
      },
      schemaVersion: {
        serializedName: "schema-version",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SchemaQueryIdByContentHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SchemaQueryIdByContentHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      schemaId: {
        serializedName: "schema-id",
        type: {
          name: "String"
        }
      },
      schemaIdLocation: {
        serializedName: "schema-id-location",
        type: {
          name: "String"
        }
      },
      schemaGroupName: {
        serializedName: "schema-group-name",
        type: {
          name: "String"
        }
      },
      schemaName: {
        serializedName: "schema-name",
        type: {
          name: "String"
        }
      },
      schemaVersion: {
        serializedName: "schema-version",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SchemaRegisterHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SchemaRegisterHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      schemaId: {
        serializedName: "schema-id",
        type: {
          name: "String"
        }
      },
      schemaIdLocation: {
        serializedName: "schema-id-location",
        type: {
          name: "String"
        }
      },
      schemaGroupName: {
        serializedName: "schema-group-name",
        type: {
          name: "String"
        }
      },
      schemaName: {
        serializedName: "schema-name",
        type: {
          name: "String"
        }
      },
      schemaVersion: {
        serializedName: "schema-version",
        type: {
          name: "Number"
        }
      }
    }
  }
};
