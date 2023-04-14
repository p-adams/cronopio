import { SchemaValidator, SchemaType } from "./Schema.ts";

function writeJsonToFile<T>(data: T, path: string) {
  try {
    const encoder = new TextEncoder();
    Deno.writeFileSync(path, encoder.encode(JSON.stringify(data)));
    return 0;
  } catch (e) {
    return e.message;
  }
}

export function FileDB<T>(schema: SchemaType<T>, data: T, path: string) {
  try {
    SchemaValidator(data, schema);
    writeJsonToFile(data, path);
  } catch (error) {
    console.error("ERROR ", error);
  }
}
const schema: SchemaType<{ firstName: string; lastName: string }> = {
  type: "object",
  properties: {
    firstName: { type: "string" },
    lastName: { type: "string" },
  },
  required: ["firstName", "lastName"],
};
const person = {
  firstName: "John",
  lastName: "Doe",
};

console.log(FileDB(schema, person, "./Person.json"));
