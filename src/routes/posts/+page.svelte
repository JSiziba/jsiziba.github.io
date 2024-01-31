<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import type { Note } from "$lib/models/Note";
  import { NotesService } from "$lib/services/NotesService";
  import type { PaginationSettings } from "@skeletonlabs/skeleton";
  import { Paginator } from "@skeletonlabs/skeleton";

  export const notesList = writable<Note[]>([]);
  let searchQuery: string = "";
  const notesService: NotesService = new NotesService();

  let paginationSettings: PaginationSettings;

  onMount( () => {
    const postsData = notesService.getNotesList();
    notesList.set(postsData);
  });

  function updateTableContentsWithSearchTerm() {
    if (searchQuery.length > 0) {
      const postsData = notesService.getNotesList(searchQuery);
      notesList.set(postsData);
    } else {
      const postsData = notesService.getNotesList();
      notesList.set(postsData);
    }
  }

  function clearSearchTerm() {
    searchQuery = "";
    updateTableContentsWithSearchTerm();
  }

  notesList.subscribe( (notes) => {
    paginationSettings = {
      page: 0,
      limit: 10,
      size: notes.length,
      amounts: [1,2,5,10],
    } satisfies PaginationSettings;
  });

  $: paginatedSource = $notesList.slice(
    paginationSettings.page * paginationSettings.limit,
    paginationSettings.page * paginationSettings.limit + paginationSettings.limit
  );

</script>

<svelte:head>
  <title>My Notes | Johnson Andrew Siziba</title>
</svelte:head>


<div class="w-full flex flex-col h-full relative">
    <div class="flex gap-2 w-full justify-center">
      <div class="w-full flex gap-2 lg:w-2/3 h-[40px] border-[2px] border-windrunner-blue-primary rounded px-2">
        <img class="w-[24px]" src="/svgs/search.svg" alt="" srcset="">
        <input type="text" autocomplete="on" placeholder="Search by title or tags" bind:value={searchQuery} on:input={updateTableContentsWithSearchTerm} class="w-full h-full bg-transparent" />
        <button class="bg-transparent border-0 outline-0" on:click={clearSearchTerm}>
          <img class="w-[24px]" src="/svgs/close.svg" alt="" srcset="">
        </button>
      </div>
    </div>

  <div class="overflow-hidden">
    <table class="table-auto table w-full mt-10 text-left relative">
      <thead class="bg-windrunner-blue-primary">
        <tr>
          <th class="px-4 py-2 ">Title</th>
          <th class="px-4 py-2 hidden lg:table-cell">Tags</th>
          <th class="px-4 py-2 hidden lg:table-cell">Date</th>
        </tr>
      </thead>
      <tbody>

      {#each paginatedSource as notesEntry}
        <tr>
          <td class="border border-slate-600 px-4 py-2">
            <a href={'/posts/' + notesEntry.link}>{notesEntry.title}</a>
          </td>
          <td class="border border-slate-600 px-4 py-2 hidden lg:table-cell">
            <div class="flex gap-2">
              {#each notesEntry.tags as tag}
                <span class="badge variant-filled-surface">{tag}</span>
              {/each}
            </div>
          </td>
          <td class="border border-slate-600 px-4 py-2 hidden lg:table-cell whitespace-nowrap">
            {notesEntry.date}
          </td>
        </tr>
      {/each}

      </tbody>
    </table>

    {#if paginationSettings}
      <Paginator
        class="my-5"
        bind:settings={paginationSettings}
        showFirstLastButtons="{true}"
        showPreviousNextButtons="{true}"
      />
    {/if}

  </div>

</div>
