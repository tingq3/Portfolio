<script>
  import Header from '$lib/Header.svelte';
  import { buildTagHref } from '$lib/utils/paths';

  const project = {
    title: "CSS",
    description:
      "CSS (Cascading Style Sheets) controls the presentation of web pages. It enables layout, typography, color, spacing, animations, and responsive design across devices.",
  };
</script>

<Header path="languages/css" />

<main class="container">
  <h2>{project.title}</h2>
  <p>{project.description}</p>
</main>
