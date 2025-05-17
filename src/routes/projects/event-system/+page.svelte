<script lang="ts">
  import Header from '$lib/Header.svelte';
  import { buildTagHref } from '$lib/utils/paths';

  const project = {
    title: "Event-Driven Kafka-like Simulation",
    goals: "The system models topics, producers, consumers, partitions, and consumer groups. It supports message publishing, partition balancing, and consumer assignment logic—mirroring real-world message queue behavior.",
    dev: "This project enforces rigorous Git practices, including detailed commit messages, frequent pushes, and strict branch management. All functionality is developed and tested incrementally via structured command-line interactions simulating real-world distributed systems.",
    tags: {
      Languages: ["Javascript", "Typescript"],
      Skills: ["Event-Driven-Architecture", "Concurrency", "Backend", "Test-Driven-Development", "Version-Control"],
      Status: "Complete"
    }
  };
</script>

<Header path="projects/event-system" />

<main class="container">
  <h2>{project.title}</h2>
  <p>A terminal-based simulation inspired by Kafka’s event-streaming model, built for <a href=https://www.handbook.unsw.edu.au/undergraduate/courses/2024/COMP1531 target="_blank">COMP1531 group assignment</a>.
  </p>

  <h3>Project goals</h3>
  <p>{project.goals}</p>

  <h3>Developing</h3>
  <p>{project.dev}</p>

  <p>
    As this project was a university project, the source code is not public. However, I am able to grant access to potential employers on request.
  </p>

  {#each Object.entries(project.tags) as [key, value]}
    <h3>{key}</h3>
    <div class="tags">
      {#if Array.isArray(value)}
        {#each value as tag}
          <a href={buildTagHref(key, tag)} class="pill">{tag}</a>
        {/each}
      {:else}
        <span class="pill status complete">{value}</span>
      {/if}
    </div>
  {/each}
</main>
