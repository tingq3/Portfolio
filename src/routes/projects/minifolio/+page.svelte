<script lang="ts">
  import Header from '$lib/Header.svelte';
  import { buildTagHref } from '$lib/utils/paths';

  const project = {
    title: "Minifolio",
    description: "Minifolio is my content management system for my portfolio site, which I use to showcase my work.",
    goals: "Minifolio is designed to store your data in a flexible manner, with the full site configuration being a Git repository to allow it to be backed up easily from any system. All the portfolio data files are human-readable.",
    dev: "This project is performed on all pull requests using GitHub Actions for continuous integration.",
    tags: {
      Languages: ["JavaScript", "HTML"],
      Frameworks: ["SvelteKit"],
      Skills: ["Type safety", "Full stack", "Frontend"],
      Status: "Active"
    },
    links: {
      github: "https://github.com/tingq3/Portfolio",
      gitpage: "https://tingq3.github.io/Portfolio"
    }
  };
</script>

<Header path="projects/minifolio" />

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
        <span class="pill status">{value}</span>
      {/if}
    </div>
  {/each}

  <div class="links">
    <div>
      <img src="/Portfolio/github.png" alt="GitHub" />
      <p><strong>View the code on GitHub</strong><br />
      <a href={project.links.github} target="_blank">Tingq/Minifolio</a></p>
    </div>

    <div>
      <img src="/Portfolio/globe.png" alt="Minifolio" />
      <p><strong>Minifolio Website</strong><br />
      <a href={project.links.gitpage} target="_blank">{project.links.gitpage}</a></p>
    </div>
  </div>
</main>