<svelte:head>
  <title>Cronopio</title>
  <meta name="description" content="Home" />
</svelte:head>

<h1>Welcome to Cronopio</h1>
<p>A file based database</p>
<section>
  <h2>Getting Started</h2>
  <section>
    <h3>Define JSON Schema</h3>
    <pre>{@html `const schema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Eulipotyphla animals",
  "description": "A collection of Eulipotyphla animals",
  "type": "object",
  "properties": {
    "collection": {
      "type": "array",
      "items": {
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
        "required": ["id", "name", "family", "order"]
      }
    }
  },
  "required": ["collection"]
};`}</pre>
    <span
      >All schemas must <code>{@html `extend`}</code> the
      <code>{@html `CollectionInterface`}</code>
      <pre>{@html `export type CollectionInterface<T> = {
  collection: T[];
};`}</pre></span
    >
    <h3>TypeScript</h3>
    <h4>Define Types</h4>
    <pre>
    
{@html `// Define type

interface Animal {
  id: number
  name: string
  family: string
  order: string
}

interface EulipotyphlaAnimals {
  collection: Animal[]
}
      `}</pre>
    <h4>Generate JSON schema from interface:</h4>
    <ul>
      <li>
        <h4>typescript-json-schema</h4>
        <pre>{@html `import { generateSchema } from "typescript-json-schema";
const personSchema = generateSchema(EulipotyphlaAnimals);`}</pre>
      </li>
      <li>
        <h4>Using ts-json-schema-generator</h4>
        <pre>{@html `npx ts-json-schema-generator --path 'path/to/EulipotyphlaAnimals.ts' --type EulipotyphlaAnimals --noExtraProps --required`}</pre>
      </li>
    </ul>
    <div>
      The output of this command should be a JSON schema that corresponds to the <code
        >{@html `EulipotyphlaAnimals interface`}</code
      >
    </div>
  </section>
  <section>
    <h3>Define Data</h3>
    <pre>{@html `const animals: EulipotyphlaAnimals = {
  collection: [
    {id: 0, name: "Shrew", family: "Soricidae", order: "Eulipotyphla"},
    {id: 1, name: "moonrat", family: "Erinaceidae", order: "Eulipotyphla"},
    {id: 2, name: "Gansu mole", family: "Talpidae", order: "Eulipotyphla"},
    {id: 3, name: "Balkan mole ", family: "Talpidae", order: "Eulipotyphla"}
  ]
};`}</pre>
  </section>
  <section>
    <h3>Create Database</h3>
    <pre>{@html `const db = createFileDB(schema, animals, "./Animals.json");`}</pre>
  </section>
  <section>
    <h3>Query Database</h3>
    <section>
      <h4>Find</h4>
      <pre>{@html `//find: find all matching documents, if no query is provided all documents are returned
const talpids = db.find({family: "Talpidae"});

returns [
  {id: 2, name: "Gansu mole", family: "Talpidae", order: "Eulipotyphla"},
  {id: 3, name: "Balkan mole ", family: "Talpidae", order: "Eulipotyphla"}
]

//findOne: find one matching document, if no query is provided all documents are returned
const talpid = db.findOne({family: "Talpidae"});

return {id: 2, name: "Gansu mole", family: "Talpidae", order: "Eulipotyphla"}
            `}</pre>
    </section>
    <section>
      <h4>Insert</h4>
      <pre>{@html `//insert 1) insert one document into collection
db.insert({id: 4, name: "European hedgehog", family: "Erinaceidae", order: "Eulipotyphla"});

// insert 2) insert multiple documents into collection
db.insert([
  {id: 4, name: "European hedgehog", family: "Erinaceidae", order: "Eulipotyphla"},
  {id: 5, name: "Pyrenean desman", family: "Talpidae", order: "Eulipotyphla"}
])

return 0 if insert operation is successful; otherwise, -1
      `}</pre>
    </section>
  </section>
</section>

<style>
  pre {
    padding: 10px;
    width: fit-content;
    background-color: lightgray;
  }
</style>
