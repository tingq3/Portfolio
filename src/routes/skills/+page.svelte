<script>
    import Header from "$lib/Header.svelte";

  const sections = [
    { name: "Design Patterns", class: "blue", description: "Strategy, Factory, Singleton, Composite, and more." },
  { name: "Test-Driven Development", class: "yellow", description: "Writing tests before code using tools like JUnit and SvelteKit’s test setup." },
  { name: "Frontend Development", class: "pink", description: "Experience with SvelteKit, React Native, HTML, CSS, and TypeScript." },
  { name: "Concurrency & C Programming", class: "orange", description: "Using mutex, threads, and handling race conditions in C." },
  { name: "Game AI & Pathfinding", class: "red", description: "Implemented BFS, A*, and Minimax AI for games and simulations." },
  { name: "Version Control", class: "green", description: "Proficient with Git, GitHub, branching, and .gitignore best practices." },
  ];
</script>

<Header path="skills" />

<main class = "container">
  <h2>Technical Skills</h2>
  <p>Here are some of my strongest skill areas in computing.</p>

  <div class="cards">
    {#each sections as section}
      <div class={"card " + section.class}>
        <h3>{section.name}</h3>
        <p>{section.description}</p>
      </div>
    {/each}
  </div>
</main>

<style>
  .card {
    flex-direction: column;
  }
</style>