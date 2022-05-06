<script>
  import { fly } from "svelte/transition";
  export let refresh = "";
</script>

{#key refresh}
  <div
    in:fly={{ y: -60, duration: 600, delay: 670 }}
    out:fly={{ y: 60, duration: 600 }}
  >
    <slot />
  </div>
{/key}
