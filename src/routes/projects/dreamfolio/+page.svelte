<script lang="ts">
  import Header from '$lib/Header.svelte';
  import { buildTagHref } from '$lib/utils/paths';
  import { base } from '$app/paths';

  const project = {
    title: "Dream-folio",
    description: "Dreamfolio is a featured mini-folio with stunning visuals",
    goals: "Dreamfolio is constructed for qualifying Devsoc training program T2 2025, the project is created focusing on the visuals while having a smooth execution.",
    tags: {
      Languages: ["typescript", "css"],
      Frameworks: ["nextjs"],
      Skills: ["Frontend"],
      Status: "Complete"
    },
    links: {
      github: "https://github.com/tingq3/dreamfolio",
      gitpage: "https://tingq3.github.io/dreamfolio"
    }
  };
</script>

<Header path="projects/dreamfolio" />

<main class="container">
  <h2>{project.title}</h2>
  <p>{project.description}</p>

  <h3>Project goals</h3>
  <p>{project.goals}</p>

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
      <img src={base + '/github.png'} alt="GitHub" />
      <p><strong>View the code on GitHub</strong><br />
      <a href={project.links.github} target="_blank">Tingq/dreamfolio</a></p>
    </div>

    <div>
      <img src={base + '/globe.png'} alt="Minifolio" />
      <p><strong>Dreamfolio Website</strong><br />
      <a href={project.links.gitpage} target="_blank">{project.links.gitpage}</a></p>
    </div>
  </div>
</main>