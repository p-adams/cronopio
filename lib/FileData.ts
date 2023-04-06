// TODO: move to schema + validation module
import Ajv from "https://esm.sh/ajv@8.12.0";

/**
 * Dynamically generate class from file data.
 * Example: given JSON schema
 *  {
 *    "type": "object",
 *    "properties": {
 *      "firstName": { "type": "string"},
 *      "lastName": {"type": "string"}
 *    },
 *    "required": ["firstName", "lastName"]
 *  }
 */
const ajv = new Ajv();
const schema = {
  type: "object",
  properties: {
    firstName: { type: "string" },
    lastName: { type: "string" },
  },
  required: ["firstName", "lastName"],
};
const validate = ajv.compile(schema);
const person = {
  firstName: "John",
  lastName: "Doe",
};
const isValid = validate(person);
if (isValid) {
  console.log("Valid!");
} else {
  console.log("Invalid!");
}

class FileData {
  constructor(data: any) {
    Object.keys(data).forEach((key) => {
      Object.defineProperty(this, key, {
        get() {
          return data[key];
        },
        set(value) {
          data[key] = value;
        },
      });
    });
  }
}
const p = new FileData(person);
