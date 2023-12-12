<script lang="ts">
  import ExperienceCard from "$lib/components/ExperienceCard.svelte";
  import { PersonalInformationService } from "$lib/services/PersonalInformationService";
  const experience = PersonalInformationService.experience;
</script>

<div class="w-full flex flex-col gap-5">

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

</div>