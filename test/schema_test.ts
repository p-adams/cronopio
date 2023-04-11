import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { SchemaValidator } from "../lib/Schema.ts";
import type { SchemaType } from "../lib/Schema.ts";
/**
 * {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "collection": {
      "type": "array",
      "items": [
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "name": {
              "type": "string"
            },
            "family": {
              "type": "string"
            },
            "order": {
              "type": "string"
            }
          },
          "required": [
            "id",
            "name",
            "family",
            "order"
          ]
        },
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "name": {
              "type": "string"
            },
            "family": {
              "type": "string"
            },
            "order": {
              "type": "string"
            }
          },
          "required": [
            "id",
            "name",
            "family",
            "order"
          ]
        },
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "name": {
              "type": "string"
            },
            "family": {
              "type": "string"
            },
            "order": {
              "type": "string"
            }
          },
          "required": [
            "id",
            "name",
            "family",
            "order"
          ]
        }
      ]
    }
  },
  "required": [
    "collection"
  ]
}*/

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
