import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { SchemaValidator } from "../lib/Schema.ts";
import type { SchemaType } from "../lib/Schema.ts";

Deno.test("Schema", () => {
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
  assertEquals(true, SchemaValidator(person, schema));
});
