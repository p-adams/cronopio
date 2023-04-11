<svelte:head>
  <title>Cronopio</title>
  <meta name="description" content="Home" />
</svelte:head>

<h1>Welcome to Cronopio</h1>
<p>A file based database</p>
<section>
  <h2>Getting Started</h2>
  <div>
    <h3>Define JSON Schema</h3>
    <div>
      Given
      <code
        >{@html `
        interface Person {
          firstName: string
          lastName: string
        }
          `}</code
      >
      generate JSON schema
    </div>

    <ul>
      <li>
        <h4>JSON Schema Language</h4>
        <pre>
          {@html `
const schema: SchemaType<Person> = {
  type: "object",
  properties: {
    firstName: { type: "string" },
    lastName: { type: "string" },
  },
  required: ["firstName", "lastName"],
};`}
        </pre>
      </li>
      <li>
        <h4>typescript-json-schema</h4>
        <pre>
          {@html `
import { generateSchema } from "typescript-json-schema";
const personSchema = generateSchema<Person>(Person);
          `}
        </pre>
      </li>
      <li>
        <h4>ts-json-schema-generator</h4>
        <pre>
          {@html `
npx ts-json-schema-generator --path 'path/to/Person.ts' --type Person --noExtraProps --required   

The output of this command should be a JSON schema that corresponds to the Person interface    
          `}
        </pre>
      </li>
    </ul>
  </div>
</section>
