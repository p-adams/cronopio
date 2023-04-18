import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { $find } from "../lib/FileDB.ts";

Deno.test("$find on shallow object properties", () => {
  assertEquals(
    [{ firstName: "Mary", lastName: "Smith" }],
    $find(
      {
        collection: [
          { firstName: "John", lastName: "Doe" },
          { firstName: "Mary", lastName: "Smith" },
        ],
      },
      { lastName: "Smith" }
    )
  );
});

Deno.test("$find on nested object properties", () => {
  assertEquals(
    [
      {
        contact: {
          address: {
            city: "ToonTown",
            state: "CA",
            street: "123 Acme Ave",
            zip: 92802,
          },
        },
        firstName: "John",
        lastName: "Doe",
      },
    ],
    $find(
      {
        collection: [
          {
            firstName: "John",
            lastName: "Doe",
            contact: {
              address: {
                street: "123 Acme Ave",
                city: "ToonTown",
                state: "CA",
                zip: 92802,
              },
            },
          },
          {
            firstName: "Mary",
            lastName: "Smith",
            contact: {
              address: {
                street: "123 Acme Ave",
                city: "Tune Town2",
                state: "FL",
                zip: 32836,
              },
            },
          },
        ],
      },
      { "contact.address.state": "CA" }
    )
  );
});
