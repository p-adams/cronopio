import { SchemaValidator, SchemaType, CollectionInterface } from "./Schema.ts";

function writeJsonToFile<T>(data: T, path: string) {
  try {
    const encoder = new TextEncoder();
    Deno.writeFileSync(path, encoder.encode(JSON.stringify(data)));
    return 0;
  } catch (e) {
    return e.message;
  }
}

type FileDB<T extends CollectionInterface<T>> = {
  schema: SchemaType<T>;
  data: T;
  path: string;
  getData(): T;
  getSchema(): SchemaType<T>;
  getPath(): string;
};

export function createFileDB<T extends CollectionInterface<T>>(
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
