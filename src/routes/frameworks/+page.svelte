<script>
    import Header from "$lib/Header.svelte";

  const sections = [
    { name: 'SvelteKit', path: '/frameworks/sveltekit', class: 'yellow', description: 'SvelteKit is a concise and feature-rich framework for building powerful and fun web apps.', img: '/Sveltekit.png' },

  ];
</script>

<Header path="frameworks" /> 

<main class = "container">
  <h2>Frameworks</h2>
  <p>These are the frameworks that I have experience with.</p>

  <div class="cards">
  {#each sections as section}
    <a href={section.path} class={"card " + section.class}>
      <img src={section.img} alt="{section.name} icon" />
      <div class="card-content">
        <h3>{section.name}</h3>
        <p>{section.description}</p>
      </div>
    </a>
  {/each}
  </div>
</main>