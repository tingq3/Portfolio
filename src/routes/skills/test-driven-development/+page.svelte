<script>
  import Header from '$lib/Header.svelte';

  const project = {
    title: "Test Driven Development",
    description: "Test-driven development is the process of using testing to validate software as it is being written.",
  };
</script>

<Header path="skills/test-driven-development" />

<main class="container">
  <h2>{project.title}</h2>
  <p>{project.description}</p>
</main>