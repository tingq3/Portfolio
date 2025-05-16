<script>
    import Header from "$lib/Header.svelte";

  const sections = [
    { name: "Design Patterns", path: "/skills/design-patterns", class: "blue", description: "Strategy, Factory, Singleton, Composite, and more." },
    { name: "Test-Driven Development", path: "/skills/test-driven-development", class: "yellow", description: "Writing tests before code using tools like JUnit and SvelteKit’s test setup." },
    { name: "Frontend Development", path: "/skills/frontend-development", class: "pink", description: "Experience with SvelteKit, React Native, HTML, CSS, and TypeScript." },
    { name: "Concurrency & C Programming", path: "/skills/concurrency-c-programming", class: "orange", description: "Using mutex, threads, and handling race conditions in C." },
    { name: "Game AI & Pathfinding", path: "/skills/game-ai-pathfinding", class: "red", description: "Implemented BFS, A*, and Minimax AI for games and simulations." },
    { name: "Version Control", path: "/skills/version-control", class: "green", description: "Proficient with Git, GitHub, branching, and .gitignore best practices." }
  ];
</script>

<Header path="skills" />

<main class = "container">
  <h2>Technical Skills</h2>
  <p>Here are some of my strongest skill areas in computing.</p>

  <div class="cards">
    {#each sections as section}
      <a href={section.path} class={"card " + section.class}>
        <h3>{section.name}</h3>
        <p>{section.description}</p>
      </a>
    {/each}
  </div>
</main>

<style>
  .card {
    flex-direction: column;
  }
</style>