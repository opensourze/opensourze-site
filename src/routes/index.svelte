<script>
  let name = "OpenSourze";

  // lil easter egg thing
  function addZ() {
    let z = ["z", "Z"];
    let randomZ = z[Math.floor(Math.random() * z.length)];
    let insertPosition = name.length - 1;

    if (name.length < 90) {
      name =
        name.slice(0, insertPosition) + randomZ + name.slice(insertPosition);
    }
  }
</script>

<svelte:head>
  <meta name="description" content="OpenSourze - about" />
</svelte:head>

<main>
  <h1 class="montserrat">
    hi. i'm <span class="opensourze" on:click={addZ}>{name}</span>.
  </h1>

  <!-- a button to reset the name -->
  {#if name.length >= 20}
    <button
      on:click={() => {
        name = "OpenSourze";
      }}>clean that up lol</button
    >
  {/if}

  <hr />

  <div class="window">
    <h3 class="titlebar">about.txt</h3>
    <p>
      i'm a 15 year old and a self-taught developer with about {new Date().getFullYear() -
        2020} years of experience with programming. i'm not saying i'm
      <em>good</em> at it, but it is what it is i guess. i'm currently a student
      and development is just a hobby of mine.
      <br />
      i spend a lot of my free time watching youtube or playing valorant or
      <a href="http://corehalla.com/stats/player/82144917">brawlhalla</a>.
    </p>
    <span class="smol">BLR - KA - IN</span>
  </div>

  <hr />

  <p class="grey">
    ok now you know stuff about me, i guess you can go look at <a
      href="/projects">things i made?</a
    >
    or check out the <a href="/socials">socials that i use and don't use?</a>
  </p>
</main>

<style>
  .opensourze {
    cursor: pointer;
    background-image: linear-gradient(
      -45deg,
      #ff6000,
      #ffa000,
      #ff6000,
      #ffa000
    );
    background-size: 300%;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: animated_text 5s linear infinite;
    transition: 300ms border-bottom;
  }

  @keyframes animated_text {
    0% {
      background-position: 0px 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0px 50%;
    }
  }

  .opensourze:hover {
    border-bottom: 2px solid #ff8800;
  }

  h1 {
    inline-size: 95vw;
    overflow-wrap: break-word;
    /* Disable text selection in case user clicks rapidly */
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .window {
    padding: 10px;
    border-radius: 15px;
    box-shadow: 0 5px 10px #14151a;
  }

  .window .titlebar {
    font-family: "Ubuntu Mono";
    width: 100%;
    padding: 3px 10px;
    margin: -10px;
    background-image: linear-gradient(to top, #23232c, #2d2e34);
    border-bottom: 1px solid #686868;
    border-radius: 15px 15px 0 0;
  }

  .smol {
    font-size: 0.7em;
    color: #b5b5b5;
  }

  button {
    padding: 5px;
    background-color: #ff9000;
    border: none;
    border-radius: 5px;
    font-family: Inter;
    cursor: pointer;
    transition: 200ms background-color;
  }

  button:hover {
    background-color: #ff7000;
  }

  .grey {
    color: #b5b5b5;
  }
</style>
