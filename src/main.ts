import { createHTML } from "./htmlUtils";
import { getGame } from "./services/gameService";
import "./style.css";

const searchGameForm = document.getElementById("searchGameForm");

searchGameForm?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const gameInput = document.getElementById("searchInput") as HTMLInputElement;

  if (gameInput) {
    const search = gameInput.value;

    if (search.length !== 0) {
      const games = await getGame();
      createHTML(games);
    } else {
      console.log("Ange en sökning...");
    }
  }
});
