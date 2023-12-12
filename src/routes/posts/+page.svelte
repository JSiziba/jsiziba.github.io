<div class="w-full flex flex-col h-full relative">
    <div class="flex gap-2 items-end">
      <div class="w-full flex gap-2 lg:w-1/2 h-[35px] border border-sylphrena-cyan rounded px-2">
        <input class="w-full h-full bg-transparent" />
      </div>
    </div>

  <div class="overflow-hidden">
    <table class="table-auto table w-full mt-10 text-left relative">
      <thead class="bg-windrunner-blue-primary">
        <tr>
          <th class="px-4 py-2">Title</th>
          <th class="px-4 py-2">Tags</th>
          <th class="px-4 py-2">Date</th>
        </tr>
      </thead>
      <tbody>

      {#each Array.from({ length: 90 } , (_, i) => i) as _}
        <tr>
          <td class="border border-slate-600 px-4 py-2">
            <a href="/posts">My awesome notes</a>
          </td>
          <td class="border border-slate-600 px-4 py-2">
            Tag, tag, tag
          </td>
          <td class="border border-slate-600 px-4 py-2">
            24 January 2024
          </td>
        </tr>
      {/each}

      </tbody>
    </table>
  </div>

</div>