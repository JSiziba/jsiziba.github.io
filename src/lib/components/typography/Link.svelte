<script lang="ts">
  export let popupLink: string;
  let showPopup = false;
</script>

<span class="relative" on:mouseenter={() => {showPopup = true}} on:mouseleave={() => {showPopup = false}}>
  <slot />
  {#if showPopup}
    <span class="absolute top-7 left-0 w-[300px] h-[200px] shadow bg-transparent rounded-lg overflow-hidden z-10">
        <iframe class="w-full h-full" src={popupLink} />
    </span>
  {/if}
</span>
