<script>
  let links = [
    {
      name: "My Blog",
      url: "https://opensourze.hashnode.dev/",
    },
    {
      name: "GitHub",
      url: "https://github.com/opensourze",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/opensourze",
    },
    {
      name: "Reddit",
      url: "https://www.reddit.com/user/opensourze",
    },
    {
      name: "WakaTime",
      url: "https://wakatime.com/@opensourze",
    },
  ];
</script>

<main>
  <div>
    <h1
      class="montserrat head"
      on:click={() => {
        document.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
      }}
    >
      OpenSourze
    </h1>
    <p>A 14-year-old, beginner web developer who loves open-source.</p>
    <div class="links">
      {#each links as link}
        <a
          class="link"
          href={link.url}
          target="_blank"
          rel="noopener noreferrer">{link.name}</a
        >
      {/each}
    </div>

    <h1 style="margin-top: 70px;" class="montserrat">About me</h1>
    <ul>
      <li>Beginner web developer</li>
      <li>Svelte.js fan</li>
      <li>Open-source enthusiast</li>
      <li>Privacy-conscious I guess</li>
    </ul>

    <h1 class="montserrat">Languages and frameworks I use</h1>
    <ul>
      <li>Vanilla HTML, CSS and JavaScript</li>
      <li>Python</li>
      <li>Svelte</li>
    </ul>

    <footer>
      <p>
        This site was made with SvelteKit for some experience with Svelte
        ¯\_(ツ)_/¯
      </p>
      <a href="https://github.com/opensourze/opensourze-site"
        >Also, this site is open-source.</a
      >
    </footer>
  </div>
</main>

<style>
  h1.head {
    background-image: linear-gradient(to right, #ff7000, #ffaa00);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size: 4em;
    text-shadow: 0px 4px 5px rgba(255, 158, 94, 0.3);
    margin-bottom: 50px;

    transition: background 1000ms ease-in-out;
  }

  h1.head:hover {
    cursor: pointer;
    background-position: 500px;
  }

  main {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .links {
    position: relative;
    top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .link {
    color: #fff;
    text-decoration: none;
    font-size: 1.1em;
    padding: 1px 15px;
    margin: 3px 5px;
    border-radius: 40px;
    background-color: #f70;
    line-height: 2.5em;

    transition: 400ms;
  }

  .link:hover {
    transform: translateY(-3px);
    filter: drop-shadow(0 3px 3px rgba(255, 119, 0, 0.5));
  }

  @media (max-width: 435px) {
    h1.head {
      font-size: 2.1em;
    }
  }
</style>
