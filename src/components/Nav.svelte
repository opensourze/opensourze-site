<script>
  import { onMount } from "svelte";
  let showMobileMenu = false;

  const handleMobileIconClick = () => {
    showMobileMenu = !showMobileMenu;
  };

  const mediaQueryHandler = e => {
    if (!e.matches) {
      showMobileMenu = false;
    }
  };

  onMount(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    mediaQuery.addListener(mediaQueryHandler);
  });
</script>

<nav>
  <div class="socials">
    <a href="/"><i class="fas fa-house-chimney" /></a>
  </div>
  <div
    on:click={handleMobileIconClick}
    class={`mobile-icon${showMobileMenu ? " active" : ""}`}
  >
    <div class="middle-line" />
  </div>

  <div class={`navbar-list${showMobileMenu ? " active" : ""}`}>
    <a href="/">home</a>
    <a href="/socials">socials</a>
    <a href="/projects">projects</a>
  </div>
</nav>
