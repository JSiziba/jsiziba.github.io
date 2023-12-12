<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import type { Note } from "$lib/models/Note";
  import { NotesService } from "$lib/services/NotesService";

  export const notesList = writable<Note[]>([]);
  let searchQuery: string = "";
  const notesService: NotesService = new NotesService();

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

</script>


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

      {#each $notesList as notesEntry}
        <tr>
          <td class="border border-slate-600 px-4 py-2">
            <a href={'/posts/' + notesEntry.link}>{notesEntry.title}</a>
          </td>
          <td class="border border-slate-600 px-4 py-2 hidden lg:table-cell">
            <div class="flex gap-2">
              {#each notesEntry.tags as tag}
                <div class="bg-windrunner-blue-secondary text-kaladin-gray rounded px-2 py-1 text-xs">
                  {tag}
                </div>
              {/each}
            </div>
          </td>
          <td class="border border-slate-600 px-4 py-2 hidden lg:table-cell">
            {notesEntry.date}
          </td>
        </tr>
      {/each}

      </tbody>
    </table>
  </div>

</div>