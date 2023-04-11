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
    <h4>JSON Schema Language</h4>
    <pre>
    {@html `
const schema = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://example.com/product.schema.json",
  "title": "Eulipotyphla animals",
  "description": "A collection of Eulipotyphla animals",
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
}
;`}
        </pre>

    <h3>TypeScript</h3>
    Generate JSON schema from interface
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
</section>

<style>
  pre {
    padding: 10px;
    width: fit-content;
    background-color: lightgray;
  }
</style>
