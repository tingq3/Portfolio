<script>
    import Header from "$lib/Header.svelte";

  const sections = [
    { name: 'Web Development', class: 'pink', description: 'Frontend and backend web application development.' },
    { name: 'Data Analysis', class: 'yellow', description: 'Working with data using Python, Pandas, and R.' },
    { name: 'UI/UX Prototyping', class: 'blue', description: 'Designing user interfaces and interactions using Figma, HTML, and CSS.' },
    { name: 'Version Control (Git)', class: 'orange', description: 'Managing code versions and team collaboration with Git and GitHub.' }
  ];
</script>

<Header path="skills" />

<main class = "container">
  <h2>Technical Skills</h2>
  <p>Here are some of my strongest skill areas in computing.</p>

  <div class="cards">
    {#each sections as section}
      <div class={"card " + section.class}>
        <h3>{section.name}</h3>
        <p>{section.description}</p>
      </div>
    {/each}
  </div>
</main>

