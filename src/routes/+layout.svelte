<script lang="ts">
    import "../app.css";
    import { goto } from "$app/navigation";
    let showMenu = false;
    function dismissMenuModal(e: MouseEvent) {
      if (e.target === e.currentTarget) {
        showMenu = false;
      }
    }
    function navigateTo(location: string){
      goto(location);
      showMenu = false;
    }
</script>

<div class="h-screen w-screen  overflow-hidden flex  text-highstorm-white">
    <aside class="w-fit h-full flex-col justify-between pt-14 pb-5 pl-14 lg:pl-20 hidden lg:flex">
      <section>
        <h1>
          <a class="font-bold text-[32px] whitespace-nowrap text-highstorm-white hover:text-highstorm-white hover:no-underline" href="/">
            Johnson Andrew Siziba
          </a>
        </h1>
        <h2 class="font-[500] text-[24px]">Software Engineer</h2>
        <p class="pt-3.5 font-normal text-[16px]">Navigating the Infinite Possibilities of Software</p>
      </section>

      <section>
        <a href="/">
          <div class="flex flex-row gap-5 text-highstorm-white font-[400] text-[20px] items-center cursor-pointer">
            <span class="w-[40px] border-b-[2px] border-highstorm-white"></span>
            <span>ABOUT ME</span>
          </div>
        </a>
        <a href="/posts">
          <div class="flex flex-row gap-5 text-highstorm-white font-[400] text-[20px] items-center mt-3.5 cursor-pointer">
            <span class="w-[40px] border-b-[2px] border-highstorm-white"></span>
            <span>MY NOTES</span>
          </div>
        </a>
      </section>

      <section>
        <div class="flex gap-5">
          <img class="w-[32px] h-[32px]" src="/svgs/github.svg" alt="Github" />
          <img class="w-[32px] h-[32px]" src="/svgs/mail.svg" alt="Mail" />
        </div>
      </section>
    </aside>

    <main class="h-screen flex flex-col w-full">
      <div class="flex justify-between lg:hidden w-full h-[55px] bg-windrunner-blue-primary items-center px-5">
        <button class="outline-0 border-0 bg-transparent" on:click={ ()=> showMenu = !showMenu }>
          <img class="h-[32px] aspect-auto" alt="Menu" src="/svgs/menu.svg">
        </button>
      </div>
      <div class="h-full mt-14 mb-5 overflow-y-auto custom-scrollbar px-10 lg:px-20 xl:px-40 w-full">
        <slot></slot>
      </div>
    </main>

</div>

{#if showMenu}
  <div class="z-10 fixed h-screen w-screen left-0 top-0 bg-black bg-opacity-75 flex justify-center text-highstorm-white" on:click={ dismissMenuModal }>

    <div class="bg-kaladin-gray shadow-lg rounded-lg w-[80%] h-fit px-8 mt-[20%] py-14">
      <p class="font-[400] text-[20px]">MENU</p>
      <div class="px-5 pt-5">
        <div on:click={ () => navigateTo("/")} class="flex flex-row gap-5 text-windrunner-blue-secondary font-extralight text-[18px] items-center px-1 py-2 cursor-pointer border-t border-windrunner-blue-secondary">
          <span>About me</span>
        </div>
        <div on:click={ () => navigateTo("/posts")} class="flex flex-row gap-5 text-windrunner-blue-secondary font-light text-[18px] items-center px-1 py-2 cursor-pointer border-y border-windrunner-blue-secondary">
          <span>My notes</span>
        </div>
      </div>
    </div>

  </div>
{/if}