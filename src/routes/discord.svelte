<script>
  let staffServers = [
    {
      name: "Blueville's",
      invite: "463djfsRaV",
      position: "Head Moderator",
      description:
        "This is a community server for everyone to hang out, and currently the most active server that I'm a staff in!",
    },
    {
      name: "Planet 1Bot",
      invite: "JGcnKxEPsW",
      position: "Owner + Moderator",
      description:
        "This is not a community server. It's just the support server for my bot, 1Bot.",
    },
    {
      name: "Code Clan",
      invite: "z4aTZAktU6",
      position: "Admin + Moderator",
      description:
        "A tech community where we chat about Web Development, Programming and help each other grow.",
    },
    {
      name: "DevJungle",
      invite: "HjmpRsBqXh",
      position: "Moderator",
      description:
        "The server for all bots developed by @SpicyyJungle (on Twitch and Twitter).",
    },
    {
      name: "Bot Development",
      invite: "hQCQxAw2eB",
      position: "Manager and Moderator",
      description:
        "A community server for Discord Bot developers. Get support with coding, share code and meet other bot developers.",
    },
  ];
</script>

<main>
  <h1 class="montserrat">Discord Servers</h1>
  <p>
    I currently do not own any (community) servers, but I am a staff member in
    these servers:
  </p>
  {#each staffServers as server}
    <section>
      <h1 class="montserrat">
        <a href="https://discord.com/invite/{server.invite}">{server.name}</a>
      </h1>
      <p class="small">My position: {server.position}</p>
      <p>{server.description}</p>
    </section>
  {/each}
</main>

<style>
  section {
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 20px auto;
    text-align: left;

    border-radius: 10px;
    border: 2px solid #f80;
    box-shadow: 0px 4px 10px #0000003d;
    max-width: 560px;
  }

  section h1 a {
    color: #f60;
  }

  .small {
    font-size: 0.85em;
    color: #666;
  }
</style>
