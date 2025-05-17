<script>
  import Header from '$lib/Header.svelte';
  import { buildTagHref } from '$lib/utils/paths';

  const project = {
    title: "Sveltekit",
    description: "SvelteKit is a concise and feature-rich framework for building powerful and fun web apps.",
    tags: {
      Languages: ["Typescript", "Javascript"],
      Skills: ["Frontend", "Full-stack", "Backend"]
    }
  };
</script>

<Header path="frameworks/sveltekit" />

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