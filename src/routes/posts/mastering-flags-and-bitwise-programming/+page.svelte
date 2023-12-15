<script lang="ts" xmlns:svelte="http://www.w3.org/1999/html">

import { CodeBlock } from "@skeletonlabs/skeleton";
</script>

<svelte:head>
  <title>Mastering Flags and Bitwise Operations in Programming
  </title>
</svelte:head>


<article class="flex gap-10 flex-col">
  <h1 class="h1">Mastering Flags and Bitwise Operations in Programming</h1>

  <section>
    <h2 class="h2">What are Flags?</h2>
    <p class="mt-2">
      Flags are boolean variables used to represent a condition. In programming, they are often manipulated using bitwise operations for efficient storage and access.
    </p>
  </section>

  <section class="flex flex-col gap-5">
    <h2 class="h2">Bitwise Operations on Flags</h2>
    <h3 class="h3">Setting a Flag</h3>
    <ul class="mx-14 list-disc">
        <li>Purpose: Turn on a specific bit (flag).</li>
        <li>Operator: Bitwise OR (|).</li>
        <li>
          Example:
          <ul class="mx-14 list-disc">
            <li>
              Define flags:
              <CodeBlock lineNumbers={true} class="" language="typescript"
                         code={`const READ = 1;  // 001 in binary
const WRITE = 2; // 010 in binary`}
              ></CodeBlock>
            </li>
            <li>
              Set a flag:
              <CodeBlock lineNumbers={true} class="" language="typescript"
                         code={`let permissions = 0; // Starting with no permissions
permissions |= READ; // Now permissions is 1 (001 in binary)
`}
              ></CodeBlock>
            </li>
          </ul>

        </li>
    </ul>

    <h3 class="h3">Clearing a Flag</h3>
    <ul class="mx-14 list-disc">
      <li>Purpose: Turn off a specific bit (flag).</li>
      <li>Operator: Bitwise AND (&) with NOT (~).</li>
      <li>
        Example
        <CodeBlock lineNumbers={true} class="" language="typescript"
                   code={`permissions |= WRITE; // Setting WRITE, permissions is now 3 (011 in binary)
permissions &= ~WRITE; // Clearing WRITE, permissions is back to 1 (001 in binary)
`}
        ></CodeBlock>
      </li>
    </ul>

    <h3 class="h3">Checking a Flag</h3>
    <ul class="mx-14 list-disc">
      <li>Purpose: Determine if a specific bit (flag) is on.</li>
      <li>Operator: Bitwise AND (&).</li>
      <li>
        Example
        <CodeBlock lineNumbers={true} language="typescript"
                   code={`if (permissions & READ) {
  console.log('Read permission is set.');
}`}
        ></CodeBlock>
      </li>
    </ul>
  </section>


  <section class="flex flex-col gap-5">
    <h2 class="h2">Logical Operations on Flags</h2>
    <p>Logical operations are used for making decisions based on one or more conditions.</p>

    <h3 class="h3">AND (&&)</h3>
    <ul class="mx-14 list-disc">
      <li>Purpose: Check if both conditions are true.</li>
      <li>
        Example
        <CodeBlock lineNumbers={true} language="typescript"
                   code={`if ((permissions & READ) && (permissions & WRITE)) {
  console.log('Both Read and Write permissions are set.');
}`}>
        </CodeBlock>
      </li>
    </ul>

    <h3 class="h3">OR (||)</h3>
    <ul class="mx-14 list-disc">
      <li>Purpose: Check if at least one condition is true.</li>
      <li>
        Example
        <CodeBlock lineNumbers={true} language="typescript"
                   code={`if ((permissions & READ) || (permissions & WRITE)) {
  console.log('Either Read or Write (or both) permission is set.');
}`}>
        </CodeBlock>
      </li>
    </ul>

    <h3 class="h3">NOT (!)</h3>
    <ul class="mx-14 list-disc">
      <li>Purpose: Inverts the truth value.</li>
      <li>
        Example
        <CodeBlock lineNumbers={true} language="typescript"
                   code={`if (!(permissions & WRITE)) {
  console.log('Write permission is not set.');
}`}>
        </CodeBlock>
      </li>
    </ul>
  </section>


  <section class="flex flex-col gap-5">
    <h2 class="h2">Using Flags in Enums</h2>
    <p>Enums in TypeScript can be used to organize flags more effectively.</p>

    <h3 class="h3">Defining Flagged Enums</h3>
    <ul class="mx-14 list-disc">
      <li>Purpose: Group related flags under a single enum type.</li>
      <li>
        Example
        <CodeBlock lineNumbers={true} language="typescript"
                   code={`enum Permission {
  None = 0,
  Read = 1 << 0,  // 1
  Write = 1 << 1, // 2
}
`}>
        </CodeBlock>
      </li>
    </ul>

    <h3 class="h3">Setting and Checking Flags with Enums</h3>
    <ul class="mx-14 list-disc">
      <li>
        Setting Flags:
        <CodeBlock lineNumbers={true} language="typescript"
                   code={`let userPermissions = Permission.Read | Permission.Write;`}>
        </CodeBlock>
      </li>
      <li>
        Checking Flags:
        <CodeBlock lineNumbers={true} language="typescript"
                   code={`if (userPermissions & Permission.Write) {
  console.log('Write permission is set.');
}`}>
        </CodeBlock>
      </li>

    </ul>

  </section>

</article>