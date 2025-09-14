<script>
  import Header from '$lib/Header.svelte';
  import { buildTagHref } from '$lib/utils/paths';

  const project = {
    title: "Next.js",
    description: "Next.js is an open-source React framework developed by Vercel, designed for building web applications. It extends React's capabilities by providing a comprehensive set of features and tools that address common web development challenges.",
    tags: {
      Languages: ["Typescript", "Javascript"],
      Skills: ["Frontend", "Full-stack", "Backend"]
    }
  };
</script>

<Header path="frameworks/nextjs" />

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