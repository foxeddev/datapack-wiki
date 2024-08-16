<script lang="ts">
  const { children, color = "FFFF00" }: any = $props();
</script>

<span style="--background-color: {color}BB;" class="dph-highlight">
  {@render children()}
</span>

<style>
  span.dph-highlight {
    border-radius: 3px;
    background-color: var(--background-color);
    padding: 0.2rem;
    /* box-shadow: 0px 2px 5px black;  */
  }
</style>
