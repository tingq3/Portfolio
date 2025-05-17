<script>
  import Header from '$lib/Header.svelte';
  import { buildTagHref } from '$lib/utils/paths';

  const project = {
    title: "Concurrency",
    description: "Concurrency refers to the ability of a system to execute multiple tasks or processes at the same time",
  };
</script>

<Header path="skills/concurrency" />

<main class="container">
  <h2>{project.title}</h2>
  <p>{project.description}</p>
</main>