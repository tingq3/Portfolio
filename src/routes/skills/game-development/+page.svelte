<script>
  import Header from '$lib/Header.svelte';
  import { buildTagHref } from '$lib/utils/paths';

  const project = {
    title: "Game Development",
    description: "Game development is the process of creating interactive games, encompassing everything from conceptualizing the game idea to its final release and beyond.",
    tags: {
      Skills: ["Full-Stack", "Concurrency", "Event-driven-Architecture"]
    }
  };
</script>

<Header path="skills/game-development" />

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
        <span class="pill status">{value}</span>
      {/if}
    </div>
  {/each}
</main>