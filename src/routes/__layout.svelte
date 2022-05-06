<script context="module">
  export const load = async ({ page }) => ({
    props: {
      key: page.path,
    },
  });
</script>

<script>
  import Nav from "../components/Nav.svelte";
  import PageTransition from "../components/PageTransition.svelte";

  export let key;
</script>

<Nav />

<main class="main-content">
  <PageTransition refresh={key}>
    <slot />
  </PageTransition>
</main>
