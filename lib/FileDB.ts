import { schemaValidator, SchemaType, CollectionInterface } from "./Schema.ts";
import {
  $find,
  $findOne,
  $insert,
  $update,
  $delete,
  $drop,
} from "./operations.ts";
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

export type Collection<T> = { collection: T[] };

export interface IndexableQuery extends Query {
  [key: string]: any;
}

type FileDB<T extends CollectionInterface<any>> = {
  schema: SchemaType<T>;
  data: T;
  path: string;
  getPath(): string;
  collection<T>(): Promise<Collection<T>>;
  find<T>(queryObject?: Query): Promise<FindResult<T>>;
  findOne<T>(queryObject?: Query): Promise<FindOneResult<T>>;
  insert<T>(doc: Document<T>): Promise<number>;
  update<T>(queryObject: Query, filter: Query): Promise<number>;
  delete<T>(queryObject: Query): Promise<number>;
  drop<T>(): Promise<number>;
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
        const data = await readJsonFile<Collection<T>>(this.getPath());
        return $find<T>(data, queryObj);
      },
      async findOne<T>(queryObj?: Query) {
        const data = await readJsonFile<Collection<T>>(this.getPath());
        return $findOne<T>(data, queryObj);
      },
      async insert<T>(document: Document<T>) {
        const data = await readJsonFile<Collection<T>>(this.getPath());
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
      async update<T>(queryObject: Query, updateObject: Query) {
        try {
          const data = await readJsonFile<Collection<T>>(this.getPath());
          const result = $update(data, queryObject, updateObject);
          await writeJsonToFile(result, this.getPath());
          return 0;
        } catch (error) {
          console.error("Error updating document in collection:", error);
          return -1;
        }
      },
      async delete<T>(queryObject: Query) {
        try {
          const data = await readJsonFile<Collection<T>>(this.getPath());
          const result = $delete(data, queryObject);
          await writeJsonToFile(result, this.getPath());
          return 0;
        } catch (error) {
          console.error("Error deleting document in collection:", error);
          return -1;
        }
      },
      async drop<T>() {
        try {
          const data = await readJsonFile<Collection<T>>(this.getPath());
          const result = $drop(data);
          await writeJsonToFile(result, this.getPath());
          return 0;
        } catch (error) {
          console.error("Error dropping all documents in collection:", error);
          return -1;
        }
      },
      getPath() {
        return this.path;
      },
      async collection<T>() {
        return await readJsonFile<Collection<T>>(this.getPath());
      },
    };
  } catch (error) {
    console.error("ERROR ", error);
    throw error;
  }
}
