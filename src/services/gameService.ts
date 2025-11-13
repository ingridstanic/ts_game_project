import type { GameBrainResponse } from "../models/GameBrainResponse";

const apiKey = "https://api.gamebrain.co/v1/games?query=strategy+games&limit=10&offset=0&api-key=99a181548c814d16ae4f35611f7ebcc2";

const getGame = async () => {
    const response = await fetch(apiKey);
    const data: GameBrainResponse = await response.json();
    return data.results
}