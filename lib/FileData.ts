interface Fields {
  // deno-lint-ignore no-explicit-any
  [key: string]: any;
}

/**
 * Dynamically generate object from file data.
 */

export function FileData<T extends Fields>(properties: T): T {
  const data = {} as T;
  for (const propertyName in properties) {
    Object.defineProperty(data, propertyName, {
      get() {
        return properties[propertyName];
      },
      set(value) {
        properties[propertyName] = value;
      },
      enumerable: true,
      configurable: true,
    });
  }

  return data;
}
