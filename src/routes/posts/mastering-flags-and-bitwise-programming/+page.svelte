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
    
    <h3 class="h3">Understanding Bitwise Flags in Enums</h3>
    <p>When using enums for flags, each flag should represent a unique bit position in a binary number. This is why we use powers of two. Each power of two corresponds to a single binary digit being set to 1, starting from the rightmost bit.</p>
    <ul class="mx-14 list-disc">
      <li>1 in binary: 0001</li>
      <li>2 in binary: 0010</li>
      <li>4 in binary: 0100</li>
      <li>8 in binary: 1000</li>
    </ul>

    <p>This approach ensures that each flag is mutually exclusive, having only one bit set in their binary representation. When you combine them using bitwise operations, you can create a unique combination of these flags without any ambiguity.</p>


    <h3 class="h3">Defining Flagged Enums</h3>
    <h4 class="h4">Approach 1: Direct Numeric Values</h4>
    <p>This is the straightforward approach where each enum member is assigned a direct numeric value that represents a power of two.</p>
    <p>Example:</p>
    <CodeBlock lineNumbers={true} language="typescript"
               code={`enum AccessLevel {
  None = 0,
  Read = 1,     // Binary: 0001
  Write = 2,    // Binary: 0010
  Execute = 4,  // Binary: 0100
  Full = Read | Write | Execute // 7, Binary: 0111
}`}>
    </CodeBlock>

    <p>Key Points:</p>
    <ul class="mx-14 list-disc">
      <li>Simplicity: Direct and easy to understand. Each value clearly represents the corresponding bit position.</li>
      <li>Visual: The numeric values (1, 2, 4, etc.) directly correspond to their binary representations (0001, 0010, 0100, etc.).</li>
      <li>Common Usage: This method is commonly used and easily recognized by many developers.</li>
    </ul>


    <h4 class="h4">Approach 2: Bitwise Shift Operations</h4>
    <p>In this approach, bitwise shift operations {'(<<)'} are used to set the flag values.</p>
    <p>Example:</p>
    <CodeBlock lineNumbers={true} language="typescript"
               code={`enum AccessLevel {
  None = 0,
  Read = 1 << 0,   // Equivalent to 1
  Write = 1 << 1,  // Equivalent to 2
  Execute = 1 << 2,// Equivalent to 4
  Full = Read | Write | Execute // Still 7
}
`}>
    </CodeBlock>

    <p>Key Points:</p>
    <ul class="mx-14 list-disc">
      <li>Clarity on Bit Position: The shift operation ( {'<<'} ) makes it visually clear which bit position each flag represents. 1 {'<<'} 1 is easier to visualize as shifting the bit 1 position to the left, resulting in 2.</li>
      <li>Consistency and Scalability: Particularly useful in enums with many members. It’s easier to keep track of bit positions (1 {'<<'} 3, 1 {'<<'} 4, etc.) rather than the corresponding decimal numbers (8, 16, etc.).</li>
      <li>Educational Value: Demonstrates the underlying bit manipulation more explicitly, which is helpful for those learning or reviewing bitwise operations.</li>
    </ul>

    <h3 class="h3">Combining Flags</h3>
    <p>Regardless of the approach, combining flags using bitwise OR (|) works the same way. It combines different permissions. For example you can combine these flags for a user with multiple access levels.</p>
    <CodeBlock lineNumbers={true} language="typescript"
               code={`let userAccess = AccessLevel.Read | AccessLevel.Write; // Combines Read and Write
`}>
      </CodeBlock>


    <h3 class="h3">Checking Flags</h3>
    <p>Checking if a flag is set also remains consistent in both approaches, utilizing the bitwise AND (&):</p>
    <CodeBlock lineNumbers={true} language="typescript"
               code={`if (userAccess & AccessLevel.Write) {
  console.log('User has write access.');
}
`}>
      </CodeBlock>

    <h3 class="h3">Clearing Flags:</h3>
    <p>To remove an access level, use the bitwise AND (&) with NOT (~).</p>
    <CodeBlock lineNumbers={true} language="typescript"
               code={`userAccess &= ~AccessLevel.Write;
// User access is now 1 in binary: 0001 (only Read access)`}>
      </CodeBlock>

    <h3 class="h3">Why Powers of Two:</h3>
    <ul class="mx-14 list-disc">
      <li>Each flag occupies a unique place in the binary representation, ensuring no overlap. For instance, Read (1) and Write (2) combined make 3 (11 in binary), a distinct combination that accurately represents having both permissions.</li>
      <li>This method is highly efficient for storing and checking multiple boolean conditions in a single number.</li>
    </ul>

  </section>

</article>