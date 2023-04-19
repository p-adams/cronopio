import { schemaValidator, SchemaType, CollectionInterface } from "./Schema.ts";
import { $find, $findOne, $insert } from "./operations.ts";
import { createJsonFile, writeJsonToFile, readJsonFile } from "./io.ts";

export type FindResult<T> = T[] | undefined;

export type FindOneResult<T> = T | T[] | undefined;

export interface InsertResult<T> {
  success: boolean;
  errorMessage?: string;
  collection: { collection: T[] };
}

export type Query = Record<string, unknown>;

export type Document<T> = T | T[];

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
  insert<T>(doc: Document<T>): Promise<number>;
};

export function createFileDB<T extends CollectionInterface<any>>(
  schema: SchemaType<T>,
  data: T,
  path: string
): FileDB<T> {
  try {
    schemaValidator(data, schema);
    createJsonFile(data, path);
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
      async insert<T>(document: Document<T>) {
        const data = await readJsonFile(this.getPath());
        const result = $insert<T>(data, document);
        if (result.success) {
          try {
            await writeJsonToFile(result.collection, this.getPath());
            return 0;
          } catch (error) {
            console.error("Error inserting document into collection:", error);
            return -1;
          }
        }
        return -1;
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
