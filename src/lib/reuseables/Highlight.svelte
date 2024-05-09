 <script lang="ts">
   export let color: string = "blue";
 </script>
 
 <span style="--highlight-color: {color};" class="dph-highlight">
    <slot />
  </span>

  <style>
    span.dph-highlight {
      border-radius: 2px;
      color: var(--highlight-color);
      padding: 0.2rem;
    }
  </style>