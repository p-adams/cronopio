import { SchemaValidator, SchemaType, CollectionInterface } from "./Schema.ts";
import { FileData } from "./FileData.ts";
function writeJsonToFile<T>(data: T, path: string) {
  try {
    const encoder = new TextEncoder();
    Deno.writeFileSync(path, encoder.encode(JSON.stringify(data)));
    return 0;
  } catch (e) {
    return e.message;
  }
}

async function readJsonFile(path: string): Promise<any> {
  const jsonString = await Deno.readTextFile(path);
  const data = JSON.parse(jsonString);
  return data;
}

type FileDB<T extends CollectionInterface<any>> = {
  schema: SchemaType<T>;
  data: T;
  path: string;
  getData(): T;
  getSchema(): SchemaType<T>;
  getPath(): string;
  find(queryObject?: Record<string, unknown>): any;
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
      async find(queryObj?: Record<string, unknown>) {
        const data = await readJsonFile(this.getPath());
        if (!queryObj) {
          return data;
        }
        const filteredData = data.collection.find((item: any) => {
          // Check if item matches queryObj
          for (const key in queryObj) {
            if (item[key] !== queryObj[key]) {
              return false;
            }
          }
          return true;
        });
        return filteredData;
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
  const data = await db.find({ lastName: "Smith" });
  console.log("data: ", data);
}
run();
