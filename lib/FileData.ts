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
const person = {
  firstName: "John",
  lastName: "Doe",
};

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
