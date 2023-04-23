import type {
  FindResult,
  FindOneResult,
  Query,
  IndexableQuery,
  Document,
  InsertResult,
} from "./FileDB.ts";

function isQuery(item: Query): item is Query {
  return typeof item === "object" && item !== null;
}

function matchQuery<T extends IndexableQuery>(item: T, query: Query): boolean {
  for (const key in query) {
    if (typeof query[key] === "object" && query[key] !== null) {
      // Recursively match nested properties
      const nestedItem = item[key] as T;
      if (isQuery(nestedItem)) {
        if (!matchQuery(nestedItem, query[key] as Query)) {
          return false;
        }
      } else {
        throw new Error(`Expected ${key} to be an object.`);
      }
    } else {
      // Access nested properties using dot notation
      const keys = key.split(".");
      let value = item;
      for (const k of keys) {
        value = value[k];
        if (value === undefined) {
          return false;
        }
      }
      if (value !== query[key]) {
        return false;
      }
    }
  }
  return true;
}

export function $find<T>(
  data: { collection: T[] },
  queryObj?: Record<string, unknown>
): FindResult<T> {
  if (!queryObj) {
    return data.collection;
  }
  const filteredData = data.collection.filter((item: T) => {
    // Check if item matches queryObj
    return matchQuery(item, queryObj);
  });
  return filteredData;
}

export function $findOne<T>(
  data: { collection: T[] },
  queryObj?: Record<string, unknown>
): FindOneResult<T> {
  if (!queryObj) {
    return data.collection;
  }
  const element = data.collection.find((item: T) => {
    // Check if item matches queryObj
    return matchQuery(item, queryObj);
  });
  return element;
}

export function $insert<T>(
  data: { collection: T[] },
  document: Document<T>
): InsertResult<T> {
  // Validate input data
  if (!Array.isArray(data.collection)) {
    return {
      success: false,
      errorMessage: "Invalid input data: collection is not an array",
      collection: { collection: data.collection },
    };
  }
  if (typeof document !== "object" || document === null) {
    return {
      success: false,
      errorMessage: "Invalid input data: document is not an object",
      collection: { collection: data.collection },
    };
  }

  // Insert document(s) into collection
  let newCollection: T[];
  if (Array.isArray(document)) {
    newCollection = [...data.collection, ...document];
  } else {
    newCollection = [...data.collection, document];
  }
  return {
    success: true,
    collection: { collection: newCollection },
  };
}

export function $update<T>(
  data: { collection: T[] },
  queryObj: Record<string, unknown>,
  updateObj: Record<string, unknown>
): { collection: T[] } {
  const index = data.collection.findIndex((item: T) => {
    // Check if item matches queryObj
    return matchQuery(item, queryObj);
  });
  if (index === -1) {
    throw new Error(`Object not found in collection`);
  }
  // Update the object at the found index
  const updatedItem = { ...data.collection[index] };
  for (const key in updateObj) {
    // Access nested properties using dot notation
    const keys = key.split(".");
    let value: IndexableQuery = updatedItem;
    for (let i = 0; i < keys.length - 1; i++) {
      value = value[keys[i]];
      if (value === undefined) {
        throw new Error(`Property not found: ${key}`);
      }
    }
    value[keys[keys.length - 1]] = updateObj[key];
  }
  data.collection[index] = updatedItem;
  return { collection: data.collection };
}

export function $delete<T extends IndexableQuery>(
  data: { collection: T[] },
  filter: Query
): { collection: T[] } {
  try {
    const filteredData = data.collection.filter(
      (item) => !matchQuery(item, filter)
    );
    return { collection: filteredData };
  } catch (err) {
    console.error(err);
    return { collection: data.collection };
  }
}
