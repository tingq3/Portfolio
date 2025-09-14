<script lang="ts">
  import Header from '$lib/Header.svelte';
  import { buildTagHref } from '$lib/utils/paths';

  const project = {
    title: "F1 LightGod — Race Prediction & Rankings",
    goals:
      "A next.js powered web app for my friend group to predict F1 race outcomes, auto-rank players across seasons, and display live driver/constructor standings. Users submit race predictions per driver; the app scores results after each GP and updates all-time leaderboards.",
    dev:
      "Built as a full-stack project with typed APIs and strict schema control. Admin tools let me add races, drivers, and official results; a background job recalculates points and tiebreakers. Auth separates admin vs normal users, and RLS-style rules protect user data. CI runs type checks and DB migrations on every deploy.",
    tags: {
      Languages: ["TypeScript", "Python"],
      Skills: ["version-control", "full-stack"],
      Frameworks: ["nextjs"],
      Status: "In Progress"
    },
    links: {
      github: "https://github.com/poko0320/F1_LightGod",
    }
  };
</script>

<Header path="projects/f1-lightgod" />

<main class="container">
  <h2>{project.title}</h2>
  <p>
    A full-stack F1 prediction platform where friends pick race outcomes and compete on
    season-long leaderboards. Players make picks per Grand Prix, results are ingested
    after the race, and scores/placements update instantly.
  </p>

  <h3>Project goals</h3>
  <p>{project.goals}</p>

  <h3>Developing</h3>
  <p>{project.dev}</p>

  <p>
    This repo includes a typed API layer, database migrations, and an admin dashboard
    for race data management. 
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

  <div class="links">
    <div>
      <img src="/Portfolio/github.png" alt="GitHub" />
      <p><strong>View the code on GitHub</strong><br />
      <a href={project.links.github} target="_blank">tingq3/F1_LightGod</a></p>
    </div>
  </div>
</main>
