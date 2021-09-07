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
  <div class="center">
    <div>
      <h1
        class="montserrat head"
        on:click={() => {
          document.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        }}
      >
        OpenSourze
      </h1>
      <p>
        A 14-year-old Discord bot developer and beginner web developer who loves
        open-source.
      </p>
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
    </div>
  </div>

  <h1 style="margin-top: 70px;" class="montserrat">About me</h1>
  <ul>
    <li>Beginner web developer</li>
    <li>Svelte.js fan</li>
    <li>Open-source enthusiast</li>
    <li>Privacy-conscious I guess</li>
  </ul>

  <h1 class="montserrat">Languages and frameworks I use</h1>
  <p>
    I've been using vanilla HTML, CSS and JavaScript since I started
    programming, and I'm experienced with building static sites with them.
    <br />
    But I also use Svelte a lot when I feel vanilla isn't going to work well. I made
    this site with Svelte.<br />
    I also use Python, but not for web development. I use Python just for coding
    Discord bots. Speaking of bots...
  </p>

  <h1 class="montserrat">My project, 1Bot</h1>
  <p>
    The only project I currently work on is a multipurpose Discord bot written
    in Python, 1Bot.
  </p>
  <div class="links">
    <a href="https://1bot.netlify.app" class="link">Check out 1Bot</a>
  </div>

  <footer class="center">
    <div>
      <p>
        This site was made with SvelteKit for some experience with Svelte
        ¯\_(ツ)_/¯
      </p>
      <a href="https://github.com/opensourze/opensourze-site"
        >Also, this site is open-source. I mean come on, what's the point of my
        username?</a
      >
    </div>
  </footer>
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

  .center {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .links {
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
