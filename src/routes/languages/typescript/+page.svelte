<script>
  import Header from '$lib/Header.svelte';
  import { buildTagHref } from '$lib/utils/paths';

  const project = {
    title: "Typescript",
    description: "TypeScript is a superset of JavaScript that introduces static typing to the language. It is designed for developing large applications and transpiles to JavaScript.",
    tags: {
      Skills: ["Frontend", "Full stack", "Backend"]
    }
  };
</script>

<Header path="languages/typescript" />

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