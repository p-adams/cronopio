import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import {
  $find,
  $findOne,
  $insert,
  $update,
  $delete,
  $drop,
} from "../lib/operations.ts";

Deno.test("$find on shallow object properties", () => {
  assertEquals(
    [
      { firstName: "Mary", lastName: "Smith" },
      { firstName: "John", lastName: "Smith" },
    ],
    $find(
      {
        collection: [
          { firstName: "John", lastName: "Doe" },
          { firstName: "Mary", lastName: "Smith" },
          { firstName: "John", lastName: "Smith" },
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

Deno.test("$findOne on nested object properties", () => {
  assertEquals(
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

    $findOne(
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
          {
            firstName: "John",
            lastName: "Smith",
            contact: {
              address: {
                street: "123 Acme Ave",
                city: "Tune Town2",
                state: "CA",
                zip: 92802,
              },
            },
          },
        ],
      },
      { "contact.address.state": "CA" }
    )
  );
});

Deno.test("$insert single document", () => {
  assertEquals(
    { collection: [{ id: 0, data: "foo" }] },
    $insert({ collection: [] }, { id: 0, data: "foo" }).collection
  );
  assertEquals(
    {
      collection: [
        { id: 0, data: "foo" },
        { id: 1, data: "bar" },
      ],
    },
    $insert({ collection: [{ id: 0, data: "foo" }] }, { id: 1, data: "bar" })
      .collection
  );
});

Deno.test("$insert multiple documents", () => {
  assertEquals(
    {
      collection: [
        { id: 0, data: "foo" },
        { id: 1, data: "bar" },
      ],
    },
    $insert({ collection: [] }, [
      { id: 0, data: "foo" },
      { id: 1, data: "bar" },
    ]).collection
  );
});

Deno.test("$update flat document property", () => {
  const data = {
    collection: [
      { id: 0, product: "T-Shirt", color: "White", quantity: 10 },
      { id: 1, product: "T-Shirt", color: "Green", quantity: 2 },
    ],
  };
  assertEquals(
    {
      collection: [
        { id: 0, product: "T-Shirt", color: "White", quantity: 11 },
        { id: 1, product: "T-Shirt", color: "Green", quantity: 2 },
      ],
    },
    $update(data, { id: 0 }, { quantity: 11 })
  );
});

Deno.test("$update nested document property", () => {
  const data = {
    collection: [
      {
        id: 0,
        name: "foo",
        contact: {
          address: "1234 Acme Dr.",
          phone: { home: 222_222_2222, cell: 888_888_8888 },
        },
      },
      {
        id: 1,
        name: "bar",
        contact: {
          address: "222 Acme Lane",
          phone: { home: 222_222_2222, cell: 888_888_8888 },
        },
      },
    ],
  };

  assertEquals(
    {
      collection: [
        {
          id: 0,
          name: "foo",
          contact: {
            address: "1234 Acme Dr.",
            phone: { home: 222_222_2222, cell: 888_888_8888 },
          },
        },
        {
          id: 1,
          name: "bar",
          contact: {
            address: "222 Acme Lane",
            phone: { home: 222_222_2222, cell: 333_333_3333 },
          },
        },
      ],
    },
    $update(data, { id: 1 }, { "contact.phone.cell": 333_333_3333 })
  );
});

Deno.test("$delete shallow document matching query", () => {
  const data = {
    collection: [
      { id: 0, name: "John" },
      { id: 1, name: "Jane" },
    ],
  };

  assertEquals(
    { collection: [{ id: 1, name: "Jane" }] },
    $delete(data, { id: 0 })
  );
});

Deno.test("$delete nested document matching query", () => {
  const data = {
    collection: [
      { id: 0, name: { firstName: "John" } },
      { id: 1, name: { firstName: "Jane" } },
    ],
  };

  assertEquals(
    { collection: [{ id: 1, name: { firstName: "Jane" } }] },
    $delete(data, { "name.firstName": "John" })
  );
});

Deno.test("$drop documents in a collection", () => {
  const data = {
    collection: [
      { id: 0, name: { firstName: "John" } },
      { id: 1, name: { firstName: "Jane" } },
    ],
  };
  assertEquals({ collection: [] }, $drop(data));
});
