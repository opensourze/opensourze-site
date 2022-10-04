<svelte:head>
  <meta name="description" content="OpenSourze - primary projects" />
</svelte:head>

<main>
  <h1 class="montserrat">primary projects</h1>
  <hr />

  <div>
    <section>
      <a href="https://1bot.opensourze.gq">
        <img src="https://1bot.opensourze.gq/banner.png" alt="1Bot banner" />
        <h1>1Bot</h1>
        <p>
          "One bot, several uses" - a multipurpose Discord bot (CURRENTLY DEAD)
        </p>
      </a>
    </section>
    <section>
      <a href="https://github.com/opensourze/opensourze-site">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fa7PnzpNDURQ%2Fmaxresdefault.jpg&f=1&nofb=1"
          alt="hmm"
        />
        <h1>this site</h1>
        <p>this site</p>
      </a>
    </section>
  </div>
</main>

<style>
  div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
  }

  section a {
    width: 35vw;
    height: 400px;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    text-align: center;
    border: 3px solid #ff6600;
    border-radius: 10px;
  }

  section h1 {
    color: #ffffff;
    margin-bottom: 0;
  }

  section p {
    color: #a8a8a8;
  }

  section img {
    width: 85%;
  }
</style>
