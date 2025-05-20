<script>
    import Header from "$lib/Header.svelte";

  const sections = [
    { name: 'Python', path: '/Portfolio/languages/python', class: 'yellow', description: 'General-purpose language with simple syntax.', img: '/Portfolio/python.png' },
    { name: 'JavaScript', path: '/Portfolio/languages/javascript', class: 'pink', description: 'Used for dynamic web applications.', img: '/Portfolio/javascript.png' },
    { name: 'Java', path: '/Portfolio/languages/java', class: 'orange', description: 'Object-oriented programming language for enterprise apps.', img: '/Portfolio/java.png' },
    { name: 'C', path: '/Portfolio/languages/c', class: 'blue', description: 'Low-level language for systems and performance.', img: '/Portfolio/C.png' },
    { name: 'R', path: '/Portfolio/languages/r', class: 'red', description: 'R is a powerful language for statistical computing and graphics', img: '/Portfolio/R.png' },
    { name: 'HTML', path: '/Portfolio/languages/html', class: 'skyblue', description: 'HTML is the standard markup language used to create web pages', img: '/Portfolio/HTML.png' },
    { name: 'TypeScript', path: '/Portfolio/languages/typescript', class: 'green', description: 'Typescript is designed for developing large applications and transpiles to JavaScript', img: '/Portfolio/typescript.png' },

  ];
</script>

<Header path="languages" /> 

<main class = "container">
  <h2>Languages</h2>
  <p>These are the programming languages I use regularly.</p>

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