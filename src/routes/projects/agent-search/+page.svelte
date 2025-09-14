<script lang="ts">
  import Header from '$lib/Header.svelte';
  import { buildTagHref } from '$lib/utils/paths';

  const project = {
    title: "Search Agent 2D",
    description: "A Python-based project where an autonomous agent navigates a 2D grid, collecting items and reaching a designated goal.",
    goals: "The agent is required to explore the environment intelligently using pathfinding algorithms, manage unknown terrain, and avoid getting trapped in dead ends. The ultimate goal is to reach the target state efficiently while handling obstacles and dynamic updates.",
    dev: "This Python project involved building a search agent from scratch to explore a 2D grid environment. The agent is designed to collect items, avoid dead ends, handle unknown terrain, and reliably navigate toward the goal state using algorithms like BFS. Careful attention was paid to preventing infinite loops, logical bugs, and inefficient pathfinding.",
    tags: {
      Languages: ["Python"],
      Skills: ["Search Algorithms", "Pathfinding"],
      Status: "Inactive"
    },
    links: {
      github: "https://github.com/tingq3/searchAgent2D",
    }
  };
</script>

<Header path="projects/agent-search" />

<main class="container">
  <h2>{project.title}</h2>
  <p>{project.description}</p>

  <h3>Project goals</h3>
  <p>{project.goals}</p>

  <h3>Developing</h3>
  <p>{project.dev}</p>

  {#each Object.entries(project.tags) as [key, value]}
    <h3>{key}</h3>
    <div class="tags">
      {#if Array.isArray(value)}
        {#each value as tag}
          <a href={buildTagHref(key, tag)} class="pill">{tag}</a>
        {/each}
      {:else}
        <span class="pill status incomplete">{value}</span>
      {/if}
    </div>
  {/each}

  <div class="links">
    <div>
      <img src="/Portfolio/github.png" alt="GitHub" />
      <p><strong>View the code on GitHub</strong><br />
      <a href={project.links.github} target="_blank">tingq3/search-agent</a></p>
    </div>
  </div>
</main>