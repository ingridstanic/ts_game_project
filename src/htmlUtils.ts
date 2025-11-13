import type { Game } from "./models/Game";

export const createHTML = (games: Game[]) => {
    const gameContainer = document.getElementById("gameSection");

    if(gameContainer) {
        gameContainer.innerHTML = "";
    }

    games.forEach((game) => {
        const gameCard = document.createElement("div");
        const name = document.createElement("h2");
        const year = document.createElement("h3");
        const genre = document.createElement("p");
        const imgContainer = document.createElement("div");
        const img = document.createElement("img");

        name.innerHTML = game.name;
        year.innerHTML = game.year.toString();
        genre.innerHTML = game.genre;
        img.src = game.image;
        img.alt = game.name;

        imgContainer.appendChild(img);
        gameCard.appendChild(name);
        gameCard.appendChild(year);
        gameCard.appendChild(genre);

        gameContainer?.appendChild(gameCard);
    })

    


}