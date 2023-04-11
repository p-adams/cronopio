import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { FileData } from "../lib/FileData.ts";

type Person = {
  firstName: string;
  lastName: string;
};

Deno.test("FileData getters", () => {
  const person: Person = {
    firstName: "John",
    lastName: "Doe",
  };
  const pfd = FileData<Person>(person);
  assertEquals(pfd.firstName, "John");
  assertEquals(pfd.lastName, "Doe");
});

Deno.test("FileData setter", () => {
  const person: Person = {
    firstName: "John",
    lastName: "Doe",
  };
  const pfd = FileData<Person>(person);
  pfd.firstName = "Harun";
  pfd.lastName = "Abbas";
  assertEquals(pfd.firstName, "Harun");
  assertEquals(pfd.lastName, "Abbas");
});
