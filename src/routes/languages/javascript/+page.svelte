<script>
  import Header from '$lib/Header.svelte';

  const project = {
    title: "Javascript",
    description: "JavaScript (JS) is a versatile, lightweight, interpreted programming language primarily used to create interactive effects within web browsers. It is one of the core technologies of the World Wide Web, alongside HTML and CSS, and is used by 99% of websites on the client-side for webpage behavior.",
    tags: {
      Skills: ["Frontend", "Full stack", "Backend"]
    }
  };
</script>

<Header path="languages/javascript" />

<main class="container">
  <h2>{project.title}</h2>
  <p>{project.description}</p>

  {#each Object.entries(project.tags) as [key, value]}
    <h3>{key}</h3>
    <div class="tags">
      {#if Array.isArray(value)}
        {#each value as tag}
          <span class="pill">{tag}</span>
        {/each}
      {:else}
        <span class="pill status">{value}</span>
      {/if}
    </div>
  {/each}
</main>