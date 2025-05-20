<script>
    import Header from "$lib/Header.svelte";

  const sections = [
    { name: 'Projects', path: 'Portfolio/projects', class: 'blue' },
    { name: 'Languages', path: 'Portfolio/languages', class: 'yellow' },
    { name: 'Skills', path: 'Portfolio/skills', class: 'pink' }
  ];
</script>

<Header path="portfolio" />

<main class = "container">
  <h2>Jack's Portfolio</h2>
  <p>When it comes to computer science, I have a diverse skill-set...</p>
  <p>Learn more about my abilities by checking out my portfolio.</p>

  <div class="cards">
    {#each sections as section}
      <a href={section.path} class={"card " + section.class}>
        <h3>{section.name}</h3>
      </a>
    {/each}
  </div>
</main>