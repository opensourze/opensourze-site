<script>
  let links = [
    {
      name: "My Blog",
      url: "https://opensourze.hashnode.dev/",
      icon: "fas fa-pen",
    },

    {
      name: "WakaTime",
      url: "https://wakatime.com/@opensourze",
      icon: "far fa-clock",
    },
  ];

  let socials = [
    {
      name: "Tumblr",
      url: "https://opensourze.tumblr.com/ask",
      icon: "fab fa-tumblr",
    },
    {
      name: "GitHub",
      url: "https://github.com/opensourze",
      icon: "fab fa-github",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/opensourze",
      icon: "fab fa-twitter",
    },
    {
      name: "Reddit",
      url: "https://www.reddit.com/user/opensourze",
      icon: "fab fa-reddit-alien",
    },
  ];
</script>

<main>
  <div class="center">
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

    <div class="icon-grid">
      <h1 class="montserrat">My Skills</h1>
      <div class="skills__icons">
        <i class="fab fa-html5" title="HTML" />
        <i class="fab fa-css3-alt" title="CSS" />
        <i class="fab fa-js" title="JavaScript" />
        <i class="fab fa-python" title="Python" />
        <img src="./svelte.png" height="45px" alt="Svelte" title="Svelte" />
      </div>
    </div>

    <div class="icon-grid">
      <h1 class="montserrat">My Socials</h1>
      <div class="socials">
        {#each socials as social}
          <a
            class="link"
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"><i class={social.icon} /></a
          >
        {/each}
      </div>
    </div>
    <img
      src="https://lanyard-profile-readme.vercel.app/api/748791790798372964"
      alt="Discord status"
      id="discord"
    />

    <br />
    <hr />

    <h1 class="montserrat">More links</h1>
    <div class="links">
      {#each links as link}
        <a
          class="link"
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"><i class={link.icon} /> {link.name}</a
        >
      {/each}
    </div>

    <br />
    <hr />

    <h1 class="montserrat">My project, 1Bot</h1>
    <p>
      The only project I currently work on is a multipurpose Discord bot written
      in Python, 1Bot.
    </p>
    <div class="links">
      <a href="https://1bot.netlify.app" class="link">Check out 1Bot</a>
    </div>

    <footer class="center">
      <p>
        This site was made with SvelteKit for some experience with Svelte
        ¯\_(ツ)_/¯
      </p>
      <a href="https://github.com/opensourze/opensourze-site"
        >Also, this site is open-source (of course it is)</a
      >
    </footer>
  </div>
</main>

<style>
  h1.head {
    background-image: linear-gradient(to right, #ff5f00, #ff9900);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size: 4em;
    text-shadow: 0px 4px 5px rgba(255, 158, 94, 0.3);
    margin-bottom: 50px;
  }

  h1.head:hover {
    cursor: pointer;
  }

  .center {
    display: grid;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .icon-grid {
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    border: 2px solid #f60;
  }

  .icon-grid i {
    font-size: 2.5em;
    color: #ff3e00;
    margin: 8px;
  }

  .icon-grid h1 {
    padding: 10px;
  }

  .skills__icons {
    margin-block: 5px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .links,
  .socials {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .socials .link i {
    font-size: 2em;
    color: #ff7000;
  }

  .link {
    color: #fff;
    text-decoration: none;
    padding: 1px 10px;
    margin: 3px 5px;
    border-radius: 40px;
    background-color: #f70;
    line-height: 2.5em;

    transition: 400ms;
  }

  .socials .link {
    padding: 0 !important;
    background-color: transparent;
  }

  .link:hover {
    transform: translateY(-3px);
    filter: drop-shadow(0 3px 3px rgba(255, 119, 0, 0.5));
  }

  #discord {
    display: block;
    margin: 30px auto;
    width: 90%;
  }

  @media (max-width: 435px) {
    h1.head {
      font-size: 2.1em;
    }
  }
</style>
