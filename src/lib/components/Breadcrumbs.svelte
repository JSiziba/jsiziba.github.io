<script lang="ts">
    const breadcrumbsList = [
        {
            name: 'Home',
            url: '/'
        },
        {
            name: 'Posts',
            url: '/posts'
        }
    ]
</script>


<div class="flex gap-5 font-medium text-[18px] items-center">

  {#each breadcrumbsList as breadcrumb, index }
    <div class="flex gap-3 items-center">
      <span class="text-stormlight-gold">{breadcrumb.name}</span>
      {#if index !== breadcrumbsList.length - 1}
        <span class="text-windrunner-blue-secondary"> / </span>
      {/if}
    </div>
  {/each}

</div>