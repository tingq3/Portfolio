<script>
  import Header from '$lib/Header.svelte';
  import { buildTagHref } from '$lib/utils/paths';

  const project = {
    title: "Data Manipulation",
    description: "Data manipulation involves transforming, cleaning, organizing, and restructuring raw data into a usable format for analysis and insights.",
    tags: {
      Skills: ["Statistical-Analysis"]
    }
  };
</script>

<Header path="skills/data-manipulation" />

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