<script>
  import Header from '$lib/Header.svelte';

  const project = {
    title: "Java",
    description: "Java is a widely used, general-purpose, object-oriented programming language designed to be platform-independent. It's known for its \"write once, run anywhere\" (WORA) capability, meaning compiled Java code can run on any platform that supports the Java Virtual Machine (JVM).",
    tags: {
      Skills: ["Object oriented programming", "Design patterns"]
    }
  };
</script>

<Header path="languages/java" />

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