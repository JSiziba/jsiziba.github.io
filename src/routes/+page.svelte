<script lang="ts">
  import ExperienceCard from "$lib/components/ExperienceCard.svelte";
  import { PersonalInformationService } from "$lib/services/PersonalInformationService";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  const experience = PersonalInformationService.experience;
</script>

<svelte:head>
  <title>About Me | Johnson Andrew Siziba</title>
</svelte:head>

<div class="w-full flex flex-col gap-20">

  <div class="flex flex-col gap-3 justify-center lg:hidden mb-5">
    <h1 class="font-bold text-[32px] text-center">Johnson Andrew Siziba</h1>
    <h2 class="font-[500] text-[24px] text-center">Software Engineer</h2>
    <p class="font-normal text-[16px] text-center">Navigating the Infinite Possibilities of Software</p>
  </div>

  <section>
    <p class="text-left ">
      Ever since I was young, the joy of building something from the ground up has captivated me. This passion found its true calling in software development during my  studies in
      <a target="_blank" href="https://www.uz.ac.zw/index.php/commerce-departments/104-business-studies/programmes-offered-business-studies/206-bachelor-of-business-studies-computing-science-degree-4-years">Bachelor of Business Studies and Computing Science (HBSCTC 2017)</a> at <a target="_blank" href="https://www.uz.ac.zw/">University of Zimbabwe</a>. Fast forward to today, and I've had the incredible opportunity to create impactful software solutions for a
      <a target="_blank" href="https://www.afcholdings.co.zw/">top commercial bank</a> and a <a target="_blank" href="https://jemina.capital/">leading stock broking company</a> in Zimbabwe, as well as an
      <a target="_blank" href="https://www.quintessencesoftware.com/">international software company</a>.
    </p> <br>

    <p>
      My main focus these days is developing dynamic, data-intensive applications that not only empower our internal teams but also elevate our clients' experiences at
      <a target="_blank" href="https://www.quintessencesoftware.com/">Quintessence Software</a>. Outside of work, my creative spirit doesn't rest - I delve into developing
      <a target="_blank" href="https://play.google.com/store/apps/developer?id=Johnson+Andrew+Siziba&hl=en&gl=US">mobile applications</a> that often reflect my personal interests and skills.
    </p> <br>

    <p>
      When I'm not busy coding, you'll find me on various adventures. Traveling to new places, immersing myself in the latest
      <a target="_blank" href="https://myanimelist.net/animelist/JSiziba">anime series</a>, or getting swept up in the imaginative worlds of
      <a target="_blank" href="https://www.goodreads.com/review/list/172388734-johnson-siziba?ref=nav_mybooks">sci-fi and fantasy books</a> – that's my kind of downtime. And let's not forget the fun times with friends. All these experiences feed into my personal and professional growth, making me a more rounded developer and a more curious individual.
    </p> <br>
  </section>

  <section>
    <div class="flex flex-col gap-3">
      {#each experience as exp}
        <ExperienceCard {...exp}  />
      {/each}
    </div>
  </section>

  <section>
    <h2>
      <a class="text-lg font-medium h2 text-highstorm-white" href="/pdf/JOHNSON%20A.%20SIZIBA%20CV.pdf" download>Download Full CV</a>
    </h2>
    <p>Download my full CV to learn more about my work experience, education, and skills.</p>
  </section>

<!--  <section>-->
<!--    <h2 class="text-lg font-medium">PROJECTS</h2>-->

<!--    <div class="mt-10">-->
<!--      <ProjectCard-->
<!--        title="Jemina Capital"-->
<!--        description="A mobile application for Jemina Capital, a leading stock broking company in Zimbabwe."-->
<!--        picture="/images/jemina-capital.png"-->
<!--        link="https://play.google.com/store/apps/details?id=com.jemina.capital"-->
<!--        skills={[]}-->
<!--        rating="4.5k+ Downloads"-->
<!--      />-->
<!--    </div>-->

<!--  </section>-->

  <section>
    <hr class="!border-dotted" />

    <div class="w-full flex flex-col items-center opacity-60 mt-5">
      <p>
        In the world of software, every day brings a new possibility. If you have an exciting project or an opportunity to explore, I'm just an email away. Let's push the boundaries of what's possible together.
      </p>
      <br>
      <p>
        Driven by a passion for innovation and a love for problem-solving, I am always eager to discuss new technologies, ideas, or collaborations. Whether it's a start-up venture, a community project, or just a chat over coffee about the latest in software development, I'm all ears. Let's make something amazing happen!
      </p>
    </div>
  </section>

</div>