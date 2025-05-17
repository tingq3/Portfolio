<script>
  import Header from '$lib/Header.svelte';

  const project = {
    title: "Version Control",
    description: "Version Control refers to the practice of tracking and managing changes to software code, documents, or other files over time."
  };
</script>

<Header path="skills/version-control" />

<main class="container">
  <h2>{project.title}</h2>
  <p>{project.description}</p>
</main>