<script lang="ts">
  import Header from '$lib/Header.svelte';
  import { buildTagHref } from '$lib/utils/paths';
  import { base } from '$app/paths';

  const project = {
    title: "Autoflow",
    description:
    "Autoflow is an demo of an interactive workflow builder that automates repetitive tasks and visualizes logic in real time.",
    goals:
    "Built to showcase automation-first UX, Autoflow provides a smooth drag-and-drop canvas where users connect actions, AI prompts, and integrations into executable workflows.",
    tags: {
        Languages: ["typescript", "javascript", "css"],
        Frameworks: ["react"],
        Skills: ["Frontend"],
        Status: "Complete",
    },
    links: {
      github: "https://github.com/poko0320/auto-timetable",
      vercelpage: "https://auto-timetable-gilt.vercel.app/"
    }
  };
</script>

<Header path="projects/autoflow" />

<main class="container">
  <h2>{project.title}</h2>
  <p>{project.description}</p>

  <h3>Project goals</h3>
  <p>{project.goals}</p>

  {#each Object.entries(project.tags) as [key, value]}
  <h3>{key}</h3>
    <div class="tags">
      {#if Array.isArray(value)}
        {#each value as tag}
          <a href={buildTagHref(key, tag)} class="pill">{tag}</a>
        {/each}
      {:else}
        <span class="pill status">{value}</span>
      {/if}
    </div>
  {/each}

  <div class="links">
    <div>
      <img src={base + '/github.png'} alt="GitHub" />
      <p><strong>View the code on GitHub</strong><br />
      <a href={project.links.github} target="_blank">Tingq/Autoflow</a></p>
    </div>

    <div>
      <img src={base + '/globe.png'} alt="Minifolio" />
      <p><strong>Dreamfolio Website</strong><br />
      <a href={project.links.vercelpage} target="_blank">{project.links.vercelpage}</a></p>
    </div>
  </div>
</main>