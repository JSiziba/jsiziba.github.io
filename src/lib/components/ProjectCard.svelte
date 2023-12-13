<script lang="ts">
   import type { Skill } from "$lib/models/Skill";
   import type { ProjectRating } from "$lib/models/ProjectRating";
   import SkillPill from "$lib/components/SkillPill.svelte";

   export let title: string;
   export let picture: string;
   export let description: string;
   export let link: string;
   export let skills: Skill[];
   export let rating: ProjectRating;
</script>

<div class="w-full flex gap-3 lg:gap-14 flex-col lg:flex-row hover:bg-highstorm-white hover:bg-opacity-5 hover:shadow p-5">
  <div class="w-36 aspect-video rounded-sm bg-kaladin-gray">

  </div>
  <div class="flex flex-col gap-3 w-full">
    <h2><a class="font-medium" rel="external" target="_blank" href={link}>{title}</a></h2>
    <p class="font-light">{description}</p>
    <div class="text-windrunner-blue-secondary  font-normal">
      {rating}
    </div>
    <div class="flex gap-1 lg:gap-3 flex-wrap">
      {#each skills as skill, index}
        <div class="flex">
          <SkillPill {...skill} />
          {#if index < skills.length - 1}
            <span class="text-windspren-green lg:hidden">,</span>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</div>