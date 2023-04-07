import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { FileData } from "../lib/FileData.ts";

type Person = {
  firstName: string;
  lastName: string;
};

Deno.test("FileData", () => {
  const person: Person = {
    firstName: "John",
    lastName: "Doe",
  };
  const pfd = FileData(person);
  assertEquals(pfd.firstName, "John");
});
