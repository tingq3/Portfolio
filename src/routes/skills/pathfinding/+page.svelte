<script>
  import Header from '$lib/Header.svelte';

  const project = {
    title: "Pathfinding Algorithms",
    description: "a way for computers to find the best path between two points in a map or environment. Including Dijkstra, A* and other Best-first Search algorithms."
  }
</script>

<Header path="skills/pathfinding" />

<main class="container">
  <h2>{project.title}</h2>
  <p>{project.description}</p>
</main>