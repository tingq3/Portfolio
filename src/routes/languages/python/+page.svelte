<script>
  import Header from '$lib/Header.svelte';

  const project = {
    title: "Python",
    description: "Python is a versatile, high-level, and general-purpose programming language known for its readability and ease of use. It's widely used for a variety of tasks, including web development, data science, machine learning, and automation.",
    tags: {
      Skills: ["Type safety", "Backend"]
    }
  };
</script>

<Header path="languages/python" />

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