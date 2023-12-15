<script>
  import Title from "$lib/components/typography/Title.svelte";
  import Heading1 from "$lib/components/typography/Heading1.svelte";
  import Heading2 from "$lib/components/typography/Heading2.svelte";
  import Heading3 from "$lib/components/typography/Heading3.svelte";
  import Heading4 from "$lib/components/typography/Heading4.svelte";
  import Paragraph from "$lib/components/typography/Paragraph.svelte";
  import { CodeBlock } from "@skeletonlabs/skeleton";
</script>

<div class="flex gap-3 flex-col">
  <Title>My Title</Title>
  <Heading1>My Heading1</Heading1>
  <Heading2>My Heading2</Heading2>
  <Heading3>My Heading3</Heading3>
  <Heading4>My Heading4</Heading4>
  <Paragraph>My Paragraph</Paragraph>
  <CodeBlock lineNumbers={true} language="html" code={`<div>This is meta</div>`}></CodeBlock>


  <h1 class="h1">Skeleton H1</h1>
  <h2 class="h2">Skeleton H2</h2>
  <h3 class="h3">Skeleton H3</h3>
  <h4 class="h4">Skeleton H4</h4>
  <h5 class="h5">Skeleton H5</h5>
  <h6 class="h6">Skeleton H6</h6>





</div>