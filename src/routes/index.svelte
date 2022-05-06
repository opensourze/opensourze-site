<main>
  <h1 class="montserrat">
    hi. i'm <span class="opensourze">OpenSourze</span>.
  </h1>
  <hr />

  <div class="window">
    <h3 class="titlebar">about.txt</h3>
    <p>
      i'm a 15 year old and a self-taught developer with about {new Date().getFullYear() -
        2020} years of experience with programming. i'm not saying i'm
      <em>good</em>
      at it, but it is what it is i guess. i'm currently a student and just have
      development as a hobby.
      <br />
      i spend a lot of my time watching youtube, working on discord bots, or
      <a href="http://corehalla.com/stats/player/82144917">playing brawlhalla</a
      >.
    </p>
    <p>
      i enjoy writing bots with discord.py, and my go-to framework for websites
      is svelte.js. i don't really have many projects as of now but all my
      primary projects are open-source on GitHub (which should be obvious).
    </p>
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
    background-image: linear-gradient(to right, #ff6000, #ff9000);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .window {
    padding: 10px;
    background-color: #393a3d;
    border-radius: 15px;
    box-shadow: 0 5px 10px #14151a;
  }

  .window .titlebar {
    font-family: "Ubuntu Mono";
    width: 100%;
    padding: 10px;
    margin: -10px;
    background-image: linear-gradient(to top, #23232c, #2d2e34);
    border-radius: 15px 15px 0 0;
  }

  .grey {
    color: #b5b5b5;
  }
</style>
