<script lang="ts">
  export let path: string;

  // Convert path string into segments
  $: segments = path.split('/').filter(Boolean);

  // Build href for each level
  const buildHref = (arr: string[], i: number) =>
    '/' + arr.slice(0, i + 1).join('/');
</script>

<header>
  <h1>
    <a href="/" class="header-link">Jack's</a>
    {#if segments.length > 0}
      <span class="header-span"> / </span>
    {/if}

    {#each segments as segment, i}
      {#if i < segments.length - 1}
        <a href={buildHref(segments, i)} class="header-link">
          {segment.charAt(0).toUpperCase() + segment.slice(1)}
        </a>
        <span class="header-span"> / </span>
      {:else}
        <span class="inactive">
          {segment.charAt(0).toUpperCase() + segment.slice(1)}
        </span>
      {/if}
    {/each}
  </h1>
</header>

<style>
  .header-link {
  font-size: 4rem;
  text-decoration: none;
  color: inherit;
}

.header-link:hover {
  text-decoration: underline;
  cursor: pointer;
}

.header-span {
  font-size: 4rem;
}

.inactive {
  font-size: 4rem;
  color: #555;
  font-weight: 600;
}
</style>