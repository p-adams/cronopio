import Ajv from "https://esm.sh/ajv@8.12.0";
import type { JSONSchemaType } from "https://esm.sh/ajv@8.12.0";

export type SchemaType<T> = JSONSchemaType<T>;

export function SchemaValidator<T>(obj: T, schema: SchemaType<T>) {
  const ajv = new Ajv();
  const validate = ajv.compile(schema);
  const isValid = validate(obj);
  if (!isValid) {
    const errorMessage = `Validation failed: ${ajv.errorsText(
      validate.errors
    )}`;
    throw new Error(errorMessage);
  }
  return isValid;
}
