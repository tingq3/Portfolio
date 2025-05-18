<script>
  import Header from '$lib/Header.svelte';

  const project = {
    title: "Statistical Analysis",
    description: "Statistical analysis means investigating trends, patterns, and relationships using quantitative data.",
  };
</script>

<Header path="skills/statistical-analysis" />

<main class="container">
  <h2>{project.title}</h2>
  <p>{project.description}</p>
</main>