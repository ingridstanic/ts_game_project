import type { GameBrainResponse } from "../models/GameBrainResponse";

export const getGame = async (search: string) => {
  const response = await fetch(
    "https://api.gamebrain.co/v1/games?api-key=99a181548c814d16ae4f35611f7ebcc2&query=" +
      search
  );
  const data: GameBrainResponse = await response.json();
  return data.results;
};
