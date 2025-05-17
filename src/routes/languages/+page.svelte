<script>
    import Header from "$lib/Header.svelte";

  const sections = [
    { name: 'Python', path: '/languages/python', class: 'yellow', description: 'General-purpose language with simple syntax.', img: '/python.png' },
    { name: 'JavaScript', path: '/languages/javascript', class: 'pink', description: 'Used for dynamic web applications.', img: '/javascript.png' },
    { name: 'Java', path: '/languages/java', class: 'orange', description: 'Object-oriented programming language for enterprise apps.', img: '/java.png' },
    { name: 'C', path: '/languages/c', class: 'blue', description: 'Low-level language for systems and performance.', img: '/C.png' },
    { name: 'R', path: '/languages/r', class: 'red', description: 'R is a powerful language for statistical computing and graphics', img: '/R.png' },
    { name: 'HTML', path: '/languages/html', class: 'skyblue', description: 'HTML is the standard markup language used to create web pages', img: '/HTML.png' },
    { name: 'TypeScript', path: '/languages/typescript', class: 'green', description: 'Typescript is designed for developing large applications and transpiles to JavaScript', img: '/typescript.png' },

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