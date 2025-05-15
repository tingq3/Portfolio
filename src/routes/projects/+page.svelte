<script>
    import Header from "$lib/Header.svelte";

  const sections = [
    {
      name: 'Transdoc',
      path: '/projects/transdoc',
      class: 'blue',
      description: 'Transforms documentation into user-friendly formats.'
    },
    {
      name: 'Minifolio',
      path: '/projects/minifolio',
      class: 'orange',
      description: 'The engine behind this very portfolio site.'
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

