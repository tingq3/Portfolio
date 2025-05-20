<script>
    import Header from "$lib/Header.svelte";

  const sections = [
  { name: "Design Patterns", path: "/skills/design-patterns", class: "blue", description: "Established solutions to common software architecture challenges." },
  { name: "Test-Driven Development", path: "/skills/test-driven-development", class: "yellow", description: "A development methodology that emphasizes writing tests prior to implementation." },
  { name: "Frontend Development", path: "/skills/frontend", class: "pink", description: "Development of responsive and interactive user interfaces using modern frameworks." },
  { name: "Backend Development", path: "/skills/backend", class: "darkgreen", description: "Backend development focuses on implementing business logic for applications." },
  { name: "Concurrency & C Programming", path: "/skills/concurrency", class: "orange", description: "Implementation of parallel execution and synchronization techniques in C." },
  { name: "Game AI & Pathfinding", path: "/skills/pathfinding", class: "red", description: "Design of intelligent agents and optimal navigation algorithms for games." },
  { name: "Version Control", path: "/skills/version-control", class: "green", description: "Management of code revisions and collaboration workflows using Git." },
  { name: "Type safety", path: "/skills/type-safety", class: "purple", description: "Ensuring correctness through strict adherence to type constraints in code." },
  { name: "Full stack", path: "/skills/full-stack", class: "yellow", description: "Full stack development is the process of developing both the frontend and the backend of an application." },
  { name: "SQL", path: "/skills/sql", class: "skyblue", description: "SQL (structured query language) is a language designed for efficiently searching databases." },
  { name: "Object Oriented Programming", path: "/skills/object-oriented-programming", class: "orange", description: "Object oriented programming is a data-centric design paradigm that represents software in terms of interactions between objects." },
  { name: "Modular Programming", path: "/skills/modular-programming", class: "blue", description: "Separation of concerns by organizing logic into distinct functions." },
  { name: "Event Driven Architecture", path: "/skills/event-driven-architecture", class: "orange", description: "A software design pattern where applications react to events occurring within a system, rather than relying on direct requests and responses" },
  { name: "Game Development", path: "/skills/game-development", class: "yellow", description: "The process of creating interactive games, encompassing everything from conceptualizing the game idea to its final release and beyond." },
  { name: "Data Manipulation", path: "/skills/data-manipulation", class: "red", description: "Transforming, cleaning, organizing, and restructuring raw data into a usable format for analysis and insights." },
  { name: "Data Visualization", path: "/skills/data-visualization", class: "skyblue", description: "The representation of data through use of common graphics, such as charts, plots, infographics and even animations." },
  { name: "Statistical Analysis", path: "/skills/statistical analysis", class: "pink", description: "It refers to investigating trends, patterns, and relationships using quantitative data." },
];
</script>

<Header path="Portfolio/skills" />

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