<script lang="ts">
  import SkillPill from "$lib/components/SkillPill.svelte";
  import type { Skill } from "$lib/models/Skill";

  export let title: string;
  export let companyName: string;
  export let duration: string;
  export let description: string;
  export let companyWebsite: string;
  export let skills: Skill[];
</script>


<div class="w-full flex flex-col lg:flex-row gap-3 lg:gap-8 p-5 hover:bg-highstorm-white hover:bg-opacity-5 hover:shadow rounded-sm">
  <h2 class="text-[18px] lg:text-center font-medium lg:font-light lg:text-windrunner-blue-secondary lg:w-1/3">{duration}</h2>
  <div class="flex flex-col gap-4 w-full">
    <h2><a rel="external" target="_blank" href={companyWebsite}>{title} <span>.</span> {companyName}</a></h2>
    <p>{description}</p>
    <div class="flex gap-1 lg:gap-3 flex-wrap">
      {#each skills as skill, index}
        <div class="flex">
          <SkillPill {...skill} />
        </div>
      {/each}
    </div>
  </div>
</div>
