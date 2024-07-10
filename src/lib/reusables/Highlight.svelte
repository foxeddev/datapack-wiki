<script lang="ts">
  export let color: string = "blue";
</script>

<span style="--background-color: {color}BB;" class="dph-highlight">
  <slot />
</span>

<style>
  span.dph-highlight {
    border-radius: 6px;
    background-color: var(--background-color);
    padding: 0.2rem;
    /* box-shadow: 0px 2px 5px black;  */
  }
</style>
