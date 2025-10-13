<script>
  import Header from '$lib/Header.svelte';
  import { buildTagHref } from '$lib/utils/paths';

  const project = {
    title: "React",
    description: "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.",
    tags: {
      Languages: ["Typescript", "Javascript"],
      Skills: ["Frontend", "Full-stack", "Backend"]
    }
  };
</script>

<Header path="frameworks/react" />

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