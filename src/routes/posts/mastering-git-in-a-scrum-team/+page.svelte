<script>
  import { CodeBlock } from "@skeletonlabs/skeleton";
  import Link from "$lib/components/typography/Link.svelte";
</script>

<svelte:head>
  <title>Collaborative Coding Chronicles: Mastering Git in a Scrum Team</title>
</svelte:head>

<div class="flex gap-3 flex-col">
  <div class="flex flex-col gap-5">
    <h1 class="h1">Collaborative Coding Chronicles: Mastering Git in a Scrum Team</h1>

    <section>
      <h2 class="h2">1. Branching:</h2>
      <ul class="list-disc mx-14 mt-3">
        <li><b>Why:</b> Prevents the main codebase (usually main or master branch) from becoming unstable.</li>
        <li>
          <b>How:</b> Create feature branches for each task/user story.
        </li>
        <li>
          <b>Example:</b> If you're working on a user story for a new login feature, you might do: <br>
          <CodeBlock class="mt-1" language="shell" code={`git checkout -b feature/login`}></CodeBlock>
        </li>
      </ul>
    </section>

    <section>
      <h2 class="h2">2. Committing:</h2>
      <ul class="mt-3 mx-14 list-disc">
        <li>
          Why: Keeps a record of changes and makes it easier to track what each change was about.
        </li>
        <li>
          How: Commit small, logically separate changes with descriptive messages.
        </li>
        <li>
          Staging: Before committing, you need to stage the changes you want to commit.
          <CodeBlock class="" language="shell" code={`git add .`}></CodeBlock>
          Or you can stage specific files:
          <CodeBlock class="" language="shell" code={`git add index.html`}></CodeBlock>
        </li>
        <li>
          Committing: After staging, you can commit your changes with a descriptive message.
          <CodeBlock class="" language="shell" code={`git commit -m "Fix login form bug"`}></CodeBlock>
        </li>
      </ul>
    </section>

    <section>
      <h2 class="h2">3. Pull Requests/Merge Requests:</h2>
      <ul class="mt-3 mx-14 list-disc">
        <li>
          Why: Facilitates code reviews, ensuring code quality and team awareness of changes.
        </li>
        <li>
          How: Open a pull request (PR) when you want to merge your branch into the main branch.
        </li>
        <li>
          Example: After completing the login feature, you submit a PR and request reviews from teammates.
        </li>
      </ul>
    </section>

    <section>
      <h2 class="h2">4. Code Reviews:</h2>
      <ul class="mt-3 mx-14 list-disc">
        <li>
          Why: Improves code quality, catches bugs, and shares knowledge across the team.
        </li>
        <li>
          How: Team members review and comment on the changes in PRs before merging.
        </li>
        <li>
          Example: A teammate might suggest improvements or ask for clarifications in your PR comments.
        </li>
      </ul>
    </section>

    <section>
      <h2 class="h2">5. Pulling & Merging:</h2>
      <ul class="mt-3 mx-14 list-disc">
        <li>
          Why: Keeps your local branch up-to-date with the main branch.
        </li>
        <li>
          How: Regularly pull from the main branch and handle any merge conflicts.
        </li>
        <li>
          Example
          <CodeBlock class="mt-1" language="shell" code={`git pull origin main`}></CodeBlock>
        </li>
        <li>
          When you are working on another branch, you might want to merge the main branch into your branch to keep it up-to-date.
          <CodeBlock class="mt-1" language="shell" code={`git merge main`}></CodeBlock>
        </li>
      </ul>
    </section>

    <section>
      <h2 class="h2">6. Handling Merge Conflicts:</h2>
      <ul class="mt-3 mx-14 list-disc">
        <li>
          Why: Conflicts are inevitable when multiple people change code; resolving them is crucial.
        </li>
        <li>
          How: Understand both sides of the conflict and make necessary changes to integrate.
        </li>
        <li>
          Example: Manually edit files to resolve conflicts, then commit the resolved version.
          Some IDEs have tools to help with this.
        </li>
      </ul>
    </section>

    <section>
      <h2 class="h2">7. Regular Commits & Pushes:</h2>
      <ul class="mt-3 mx-14 list-disc">
        <li>
          Why: Prevents losing work and keeps teammates informed of your progress.
        </li>
        <li>
          How: Commit often and push to the remote branch.
        </li>
        <li>
          Example: At the end of each day, ensure your work is committed and pushed.
        </li>
      </ul>
    </section>

    <section>
      <h2 class="h2">8. Tagging Releases:</h2>
      <ul class="mt-3 mx-14 list-disc">
        <li>
          Why: Marks specific points in the repository’s history as important, usually for releases.
        </li>
        <li>
          How: Create tags for each sprint or version release.
        </li>
        <li>
          Example: After completing a sprint, you might tag the commit with the sprint number.
          <CodeBlock class="mt-1" language="shell" code={`git tag -a v1.0 -m "Release version 1.0" \ngit push origin --tags`}></CodeBlock>
        </li>
      </ul>
    </section>

    <section>
      <h2 class="h2">9. Using Git Stash:</h2>
      <ul class="mt-3 mx-14 list-disc">
        <li>
          Why: Handy for switching branches without committing work-in-progress code.
        </li>
        <li>
          How: Stash changes before switching branches.
        </li>
        <li>
          Example: If you're working on a feature branch and need to switch to another branch, you can stash your changes:
          <CodeBlock class="mt-1" language="shell" code={`git stash
git checkout other-branch
# Do some work
git checkout original-branch
git stash pop
`}></CodeBlock>
        </li>
      </ul>
    </section>
  </div>

<!--  <Link popupLink="https://jemina.capital/">-->
<!--    <a href="#">Skeleton Link</a>-->
<!--  </Link>-->

</div>