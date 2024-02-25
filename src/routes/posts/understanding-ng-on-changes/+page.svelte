<script>
  import { CodeBlock } from "@skeletonlabs/skeleton";
</script>

<svelte:head>
  <title>
  Understanding ngOnChanges in Angular: A Complete Guide
</title>
</svelte:head>

<div class="flex gap-3 flex-col">

  <h2>Understanding ngOnChanges</h2>

  <p> `ngOnChanges` is an important lifecycle hook in Angular components. Here's a breakdown of its functionality:</p>

  * <strong>Tracks Changes:</strong> Angular's change detection automatically triggers it whenever one or more input properties of a component change.
  * <strong>Input Properties:</strong> These are properties decorated with `@Input()` in your component, allowing data to flow from parent components to child components.
  * <strong>Reacting to Change:</strong> The `ngOnChanges` function provides a place to write code that responds specifically to changes in these input properties.

  <h3>Code Breakdown</h3>

  Here's a line-by-line analysis of the code snippet:


  <CodeBlock language="html" code="{`ngOnChanges(changes: SimpleChanges) {`}" />

  * This defines the `ngOnChanges` function, part of the `OnChanges` interface.
  * The function takes a `changes` argument (`SimpleChanges`) that holds details about changed input properties.

  <CodeBlock language="html" code="{` if (changes['collections'])`}" />

  * Checks if the 'collections' input property has been modified.

  <CodeBlock language="html" code="{`console.log('collections changed', changes['collections'].currentValue);`}" />

  * Logs a message and the new value of the 'collections' input to the console.

    <h3>In Summary</h3>

    The code shows how to use `ngOnChanges` to:

    1. Monitor changes to a 'collections' input property.
    2. Log the new 'collections' value to the console.

    <h3>When to Use ngOnChanges</h3>

    <strong>Updating internal state:</strong> Modify the component's state based on input property changes. <br>
    <strong>Triggering actions:</strong>  Fetch data, re-render the UI, etc., in response to input changes. <br>
    <strong>Data Validation/Manipulation:</strong> Perform tasks when an input property changes. <br>

    </div>