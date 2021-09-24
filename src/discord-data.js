import { writable } from "svelte/store";

export const active = writable([]);

const fetchData = async () => {
  const url = "https://api.lanyard.rest/v1/users/748791790798372964";
  const res = await fetch(url);
  const data = await res.json();

  active.set(data.data.active_on_discord_desktop);
};

fetchData();
