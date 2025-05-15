<script>
  export let path = "";
</script>

<header>
  <h1>
    {#if path === 'portfolio'}
      <span class="inactive">Jack's</span>
      <span> / </span>
      <span class="inactive">Portfolio</span>
    {:else}
      <a href="/" class="header-link">Jack's</a>
      <span> / </span>
      <span class="inactive">{path.charAt(0).toUpperCase() + path.slice(1)}</span>
    {/if}
  </h1>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
  }

  h1 {
    font-size: 3rem;
  }

  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }

  .inactive {
    pointer-events: none;
    color: gray;
  }
</style>