<script lang="ts">
  import Header from '$lib/Header.svelte';
  import { buildTagHref } from '$lib/utils/paths';

  const project = {
    title: "2048",
    description: "This is a small project of me and my friend recreating 2048 in C using terminal graphics, movement logic, random tile generation, and scoring.",
    tags: {
      Languages: ["C"],
      Skills: ["Modular-Programming"],
      Status: "Complete"
    },
    links: {
      github: "https://github.com/poko0320/2048"
    }
  };
</script>

<Header path="projects/2048" />

<main class="container">
  <h2>{project.title}</h2>
  <p>{project.description}</p>

  {#each Object.entries(project.tags) as [key, value]}
  <h3>{key}</h3>
    <div class="tags">
      {#if Array.isArray(value)}
        {#each value as tag}
          <a href={buildTagHref(key, tag)} class="pill">{tag}</a>
        {/each}
      {:else}
        <span class="pill status complete">{value}</span>
      {/if}
    </div>
  {/each}

  <div class="links">
    <div>
      <img src="/github.png" alt="GitHub" />
      <p><strong>View the code on GitHub</strong><br />
      <a href={project.links.github} target="_blank">Tingq/2048</a></p>
    </div>
  </div>
</main>