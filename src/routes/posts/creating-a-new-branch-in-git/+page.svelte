<script>
  import Title from "$lib/components/typography/Title.svelte";
  import { CodeBlock } from "@skeletonlabs/skeleton";
  import Link from "$lib/components/typography/Link.svelte";
</script>

<svelte:head>
  <title>Creating A New Branch in Git | Johnson Andrew Siziba</title>
</svelte:head>

<div class="flex gap-3 flex-col">
  <Title>My Title</Title>

  <CodeBlock lineNumbers={true} language="html" code={`<div>This is meta</div>`}></CodeBlock>


  <h1 class="h1">Skeleton H1</h1>
  <h2 class="h2">Skeleton H2</h2>
  <h3 class="h3">Skeleton H3</h3>
  <h4 class="h4">Skeleton H4</h4>
  <h5 class="h5">Skeleton H5</h5>
  <h6 class="h6">Skeleton H6</h6>

  <Link popupLink="https://jemina.capital/">
    <a href="#">Skeleton Link</a>
  </Link>

</div>