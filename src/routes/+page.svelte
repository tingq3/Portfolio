<script>
  const sections = [
    { name: 'Projects', path: '/projects', class: 'blue' },
    { name: 'Experience', path: '/experience', class: 'orange' },
    { name: 'Languages', path: '/languages', class: 'yellow' },
    { name: 'Skills', path: '/skills', class: 'pink' }
  ];
</script>

<header>
  <h1>Jack's / Portfolio</h1>
  <nav>
    <button>Log in</button>
    <button>About</button>
  </nav>
</header>

<main>
  <h2>Jack’s Portfolio</h2>
  <p>When it comes to computer science, I have a diverse skill-set...</p>

  <div class="cards">
    {#each sections as section}
      <a href={section.path} class={"card " + section.class}>
        <h3>{section.name}</h3>
      </a>
    {/each}
  </div>
</main>