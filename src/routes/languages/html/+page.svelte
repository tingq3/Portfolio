<script>
  import Header from '$lib/Header.svelte';
  import { buildTagHref } from '$lib/utils/paths';

  const project = {
    title: "HTML",
    description: "HTML is a markup language used for building webpages. It is primarily rendered and displayed by web browsers, and is often used alongside CSS for styling and JavaScript for interactivity.",
    tags: {
      Skills: ["Frontend"]
    }
  };
</script>

<Header path="languages/html" />

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