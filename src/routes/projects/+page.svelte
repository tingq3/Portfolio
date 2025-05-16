<script>
    import Header from "$lib/Header.svelte";

  const sections = [
    {
    name: "Minifolio",
    path: "/projects/minifolio",
    class: "pink",
    description: "A SvelteKit-based content management system powering this very portfolio."
  },
  {
    name: "Dungeon Mania",
    path: "/projects/dungeonmania",
    class: "blue",
    description: "Implemented enemy behavior and goal planning with pathfinding, enemy splitting, and invincibility logic."
  },
  {
    name: "2048 Game in C",
    path: "/projects/2048-c",
    class: "orange",
    description: "Recreated the classic 2048 game in C using terminal graphics, movement logic, random tile generation, and scoring."
  },
  {
    name: "Quiz Tool Platform",
    path: "/projects/quiz-tool",
    class: "green",
    description: "An admin-student quiz system with token-based auth, quiz submission, and score tracking with feedback."
  },
  {
    name: "Event-Driven Kafka-like Simulation",
    path: "/projects/event-system",
    class: "red",
    description: "Simulated topics, producers, and consumers with command-line interaction, partitioning, and load balancing logic."
  },
  {
    name: "Train & Load Simulator",
    path: "/projects/train-sim",
    class: "purple",
    description: "A Java simulation of trains and cargo loading with perishable item logic and object-oriented refactoring patterns."
  },
  {
    name: "Search Agent for Grid Map",
    path: "/projects/agent-search",
    class: "yellow",
    description: "A text-based search agent that explores a 2D grid using BFS and backtracking, collecting items and avoiding dead ends."
  }
  ];
</script>

<Header path="projects" />

<main class = "container">
  <h2>Projects I've Built</h2>
  <p>Here are some projects that highlight my technical experience.</p>

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

