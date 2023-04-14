import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { SchemaValidator } from "../lib/Schema.ts";
import type { SchemaType, CollectionInterface } from "../lib/Schema.ts";

Deno.test("Person Schema", () => {
  interface People
    extends CollectionInterface<{
      firstName: string;
      lastName: string;
    }> {
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
    collection: [{ firstName: "John", lastName: "Doe" }],
  };
  assertEquals(true, SchemaValidator(person, schema));
});

Deno.test("Eulipotyphla Animals Schema", () => {
  interface Animal {
    id: number;
    name: string;
    family: string;
    order: string;
  }

  interface EulipotyphlaAnimals extends CollectionInterface<Animal> {
    collection: Animal[];
  }
  const schema: SchemaType<EulipotyphlaAnimals> = {
    $schema: "http://json-schema.org/draft-07/schema#",
    title: "Eulipotyphla animals",
    description: "A collection of Eulipotyphla animals",
    type: "object",
    properties: {
      collection: {
        type: "array",
        items: {
          type: "object",
          properties: {
            id: {
              type: "integer",
            },
            name: {
              type: "string",
            },
            family: {
              type: "string",
            },
            order: {
              type: "string",
            },
          },
          required: ["id", "name", "family", "order"],
        },
      },
    },
    required: ["collection"],
  };

  const animals: EulipotyphlaAnimals = {
    collection: [
      { id: 0, name: "Shrew", family: "Soricidae", order: "Eulipotyphla" },
      { id: 1, name: "moonrat", family: "Erinaceidae", order: "Eulipotyphla" },
      { id: 2, name: "Gansu mole", family: "Talpidae", order: "Eulipotyphla" },
    ],
  };
  assertEquals(true, SchemaValidator(animals, schema));
});
