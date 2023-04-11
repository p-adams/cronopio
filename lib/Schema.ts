import Ajv, { JSONSchemaType } from "https://esm.sh/ajv@8.12.0";

export type SchemaType<T> = JSONSchemaType<T>;

export function SchemaValidator<T>(obj: T, schema: SchemaType<T>) {
  const ajv = new Ajv();
  const validate = ajv.compile(schema);
  return validate(obj);
}
