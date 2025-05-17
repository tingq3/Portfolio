<script>
  import Header from '$lib/Header.svelte';

  const project = {
    title: "Type Safety",
    description: "Type safety refers to when static analysis is used to check for type errors within code.",
  };
</script>

<Header path="skills/type-safety" />

<main class="container">
  <h2>{project.title}</h2>
  <p>{project.description}</p>
</main>