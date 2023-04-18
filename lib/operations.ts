import type {
  FindResult,
  FindOneResult,
  Query,
  IndexableQuery,
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
