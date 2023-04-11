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
  type: "object",
  properties: {
    firstName: { type: "string" },
    lastName: { type: "string" },
  },
  required: ["firstName", "lastName"],
};`}
        </pre>

    <h3>TypeScript</h3>
    Generate JSON schema from interface
    <pre>
      {@html `
// Define type

interface Person {
  firstName: string
  lastName: string
}
      `}</pre>
    <ul>
      <li>
        <h4>typescript-json-schema</h4>
        <pre>{@html `import { generateSchema } from "typescript-json-schema";
const personSchema = generateSchema(Person);`}</pre>
      </li>
      <li>
        <h4>Using ts-json-schema-generator</h4>
        <pre>{@html `npx ts-json-schema-generator --path 'path/to/Person.ts' --type Person --noExtraProps --required`}</pre>
      </li>
    </ul>
    <div>
      The output of this command should be a JSON schema that corresponds to the <code
        >{@html `Person interface`}</code
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
