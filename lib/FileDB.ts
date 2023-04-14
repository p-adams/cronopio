import { SchemaValidator, SchemaType } from "./Schema.ts";

function writeJsonToFile<T>(path: string, data: T) {
  try {
    const encoder = new TextEncoder();
    Deno.writeFileSync(path, encoder.encode(JSON.stringify(data)));
    console.log("Successfully wrote data to file!");
  } catch (e) {
    console.error(e.message);
  }
}

export function FileDB<T>(schema: SchemaType<T>, data: T, path: string) {
  try {
    SchemaValidator(data, schema);
    writeJsonToFile(path, data);
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

FileDB(schema, person, "./Person.json");
