import { spec, response } from "pactum";
require("dotenv").config();
const API_KEY = process.env.RAWG_K;
import {
  testResponseType,
  statusCode,
  randomParam,
  gameSeriesOk,
  specificGamesSeries,
  specificGamesStudio,
} from "../types";

it("should get a game series", async () => {
  const apiData: gameSeriesOk = {
    apiURL: "https://api.rawg.io/api/games?key=",
    API_KEY: process.env.RAWG_K!,
    gameName: "Gran turismo",
    statuscode: statusCode.ok,
    platform: 18,
    searchPrecise: true,
    searchExact: true,
    count: 3,
  };
  const gameSeries = await spec()
    .get("https://api.rawg.io/api/games")
    .withQueryParams("key", apiData.API_KEY)
    .withQueryParams("search", apiData.gameName)
    .withQueryParams("platforms", apiData.platform)
    .withQueryParams("search_precise", apiData.searchPrecise)
    .withQueryParams("search_exact", apiData.searchExact)
    .expectStatus(200)
    .expectJsonLike({ count: apiData.count })
    .inspect();
  const gameName = gameSeries.body.results[0].name;
  console.log(gameName);
});
