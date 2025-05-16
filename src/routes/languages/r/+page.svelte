<script>
  import Header from '$lib/Header.svelte';
  import { buildTagHref } from '$lib/utils/paths';

  const project = {
    title: "R",
    description: "R is a powerful and versatile open-source programming language and software environment for statistical computing and graphics. It's widely used for data analysis, data visualization, and machine learning, particularly in fields like data science and statistics.",
    tags: {
      Skills: ["Data manipulation", "Data visualization", "Statistical analysis"]
    }
  };
</script>

<Header path="languages/r" />

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