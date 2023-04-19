import { createFileDB } from "./FileDB.ts";
import type { SchemaType, CollectionInterface } from "./Schema.ts";

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
  const res = await db.insert<Person>({ firstName: "Jane", lastName: "Doe" });
  if (!data) {
    console.log("Not found");
    return;
  }

  console.log("data: ", data, res);
}
run();
