<script>
  import Header from '$lib/Header.svelte';
  import { buildTagHref } from '$lib/utils/paths';

  const project = {
    title: "Data Visualization",
    description: "Data visualization is the representation of data through use of common graphics, such as charts, plots, infographics and even animations. These visual displays of information communicate complex data relationships and data-driven insights in a way that is easy to understand.",
    tags: {
      Skills: ["Statistical-Analysis"]
    }
  };
</script>

<Header path="skills/data-visualization" />

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