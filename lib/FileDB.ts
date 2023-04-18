import { SchemaValidator, SchemaType, CollectionInterface } from "./Schema.ts";
import { $find, $findOne, $insert } from "./operations.ts";
import { writeJsonToFile, readJsonFile } from "./io.ts";

export type FindResult<T> = T[] | undefined;

export type FindOneResult<T> = T | T[] | undefined;

export type Query = Record<string, unknown>;

export type Document = Record<string, unknown> | Record<string, unknown>[];

export interface IndexableQuery extends Query {
  [key: string]: any;
}

type FileDB<T extends CollectionInterface<any>> = {
  schema: SchemaType<T>;
  data: T;
  path: string;
  getData(): T;
  getSchema(): SchemaType<T>;
  getPath(): string;
  find<T>(queryObject?: Query): Promise<FindResult<T>>;
  findOne<T>(queryObject?: Query): Promise<FindOneResult<T>>;
  insert<T>(doc: Document): Promise<number>;
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
      async find<T>(queryObj?: Query) {
        const data = await readJsonFile(this.getPath());
        return $find<T>(data, queryObj);
      },
      async findOne<T>(queryObj?: Query) {
        const data = await readJsonFile(this.getPath());
        return $findOne<T>(data, queryObj);
      },
      async insert<T>(document: Document) {
        const data = await readJsonFile(this.getPath());
        return $insert<T>(data, document);
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
  if (!data) {
    console.log("Not found");
    return;
  }

  console.log("data: ", data.length);
}
run();
