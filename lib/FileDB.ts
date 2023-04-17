import { SchemaValidator, SchemaType, CollectionInterface } from "./Schema.ts";

function isFileExistsSync(path: string): boolean {
  try {
    const stats = Deno.statSync(path);
    return stats.isFile;
  } catch (e) {
    return false;
  }
}

function writeJsonToFile<T>(data: T, path: string): boolean | string {
  try {
    const fileExists = isFileExistsSync(path);
    if (fileExists) {
      return true;
    }
    const encoder = new TextEncoder();
    Deno.writeFileSync(path, encoder.encode(JSON.stringify(data)));
    return false;
  } catch (e) {
    return e.message;
  }
}

async function readJsonFile(path: string): Promise<any> {
  const jsonString = await Deno.readTextFile(path);
  const data = JSON.parse(jsonString);
  return data;
}

function matchQuery(item: any, query: Record<string, unknown>): boolean {
  for (const key in query) {
    if (typeof query[key] === "object" && query[key] !== null) {
      // Recursively match nested properties
      if (!matchQuery(item[key], query[key] as Record<string, unknown>)) {
        return false;
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
) {
  if (!queryObj) {
    return data;
  }
  const filteredData = data.collection.find((item: any) => {
    // Check if item matches queryObj
    return matchQuery(item, queryObj);
  });
  return filteredData;
}

type FileDB<T extends CollectionInterface<any>> = {
  schema: SchemaType<T>;
  data: T;
  path: string;
  getData(): T;
  getSchema(): SchemaType<T>;
  getPath(): string;
  find<T>(
    queryObject?: Record<string, unknown>
  ): Promise<T | { collection: T[] } | undefined>;
};

export function createFileDB<T extends CollectionInterface<any>>(
  schema: SchemaType<T>,
  data: T,
  path: string
): FileDB<T> {
  try {
    SchemaValidator(data, schema);
    writeJsonToFile(data, path);
    return {
      schema,
      data,
      path,
      async find<T>(queryObj?: Record<string, unknown>) {
        const data = await readJsonFile(this.getPath());
        return $find<T>(data, queryObj);
      },
      getData() {
        return this.data;
      },
      getSchema() {
        return this.schema;
      },
      getPath() {
        return this.path;
      },
    };
  } catch (error) {
    console.error("ERROR ", error);
    throw error;
  }
}

async function run() {
  interface Person {
    firstName: string;
    lastName: string;
  }
  interface People extends CollectionInterface<Person> {
    collection: {
      firstName: string;
      lastName: string;
    }[];
  }
  const schema: SchemaType<People> = {
    type: "object",
    properties: {
      collection: {
        type: "array",
        items: {
          type: "object",
          properties: {
            firstName: { type: "string" },
            lastName: { type: "string" },
          },
          required: ["firstName", "lastName"],
        },
      },
    },
    required: ["collection"],
  };
  const person: People = {
    collection: [
      { firstName: "John", lastName: "Doe" },
      { firstName: "Mary", lastName: "Smith" },
    ],
  };
  const db = createFileDB(schema, person, "./Person.json");
  const data = await db.find<Person>({ lastName: "Smith" });
  console.log("data: ", data);
}
run();
