import * as cronopio from "https://deno.land/x/cronopio@v0.0.1-alpha/mod.ts";

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
      { firstName: "Harun", lastName: "Ahmad" },
    ],
  };
  const db = cronopio.createFileDB(schema, person, "./Person.json");
  const data = await db.find<Person>({ lastName: "Smith" });
  const res = await db.insert<Person>({ firstName: "Jane", lastName: "Doe" });
  const updated = await db.update<Person>(
    { firstName: "John" },
    { lastName: "Doe2" }
  );
  const deleted = await db.delete<Person>({ lastName: "Doe" });
  if (!data) {
    console.log("Not found");
    return;
  }

  console.log("data: ", data, res, updated, deleted);
}
run();
