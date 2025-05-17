<script lang="ts">
  import Header from '$lib/Header.svelte';
  import { buildTagHref } from '$lib/utils/paths';

  const project = {
    title: "Train & Load Simulator",
    tags: {
      Languages: ["Java"],
      Skills: ["Object-Oriented-Programming", "Test-Driven-Development", "Design-Patterns", "Concurrency"],
      Status: "Complete"
    }
  };
</script>

<Header path="projects/train-sim" />

<main class="container">
  <img src="/train_sim_tick_diagram.png" alt="Train Simulation Diagram" class="hero-img" />

  <h2>{project.title}</h2>
  <p>Train & Load Similtar is a project created in <a href=https://www.handbook.unsw.edu.au/undergraduate/courses/2025/COMP2511 target="_blank">UNSW Comp2511 Course</a>
    This project similates train moving between stations and managing cargo that includes concepts like train movement, Cargo Handling, Load Expiry, Object-Oriented Design and Tick Simulation</p>
    
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

<style>
  .hero-img {
    width: 60vw;
    height: auto;
    display: block;
    object-fit: contain;
    margin: 0 auto;
  }
</style>