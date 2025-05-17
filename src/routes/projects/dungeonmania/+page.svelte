<script lang="ts">
  import Header from '$lib/Header.svelte';
  import { buildTagHref } from '$lib/utils/paths';

  const project = {
    title: "Dungeon Mania",
    tags: {
      Languages: ["Java"],
      Skills: ["Object-Oriented-Programming", "Design-Patterns"],
      Status: "Complete"
    }
  };
</script>

<Header path="projects/dungeonmania" />

<main class="container">
  <h2>{project.title}</h2>
  <p>Dungeon Mania is a project I created in <a href=https://www.handbook.unsw.edu.au/undergraduate/courses/2021/COMP2511 target="_blank">
    UNSW Comp2511 Course</a>, It is a complex dungeon crawler game which I completed as the leader of a small team of students. The game’s rules were designed to challenge our design skills, with extremely complex requirements for player and enemy movement.</p>

  <p> 
    In order to implement this project, we made heavy use of design patterns and the object-oriented paradigm to encapsulate complex behaviours in simple interfaces.
  </p>

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