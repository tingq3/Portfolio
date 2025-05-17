<script>
  import Header from '$lib/Header.svelte';
  import { buildTagHref } from '$lib/utils/paths';

  const project = {
    title: "Modular Programming",
    description: "Separation of concerns by organizing logic into distinct functions. Each module focuses on a specific task, making the code easier to understand, maintain, and update, aiming to simplify large software projects by breaking them down into manageable pieces. ",
    tags: {
      Skills: ["Design-Patterns"]
    }
  };
</script>

<Header path="skills/modular-programming" />

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