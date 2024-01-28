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

it("should get god of war ragnarok", async () => {
  const apiData: specificGamesSeries = {
    apiURL: "https://api.rawg.io/api/games?key=",
    API_KEY: process.env.RAWG_K!,
    gameName: "God of War",
    statuscode: statusCode.ok,
    platform: 187,
    searchPrecise: true,
    searchExact: true,
    dates: "2022-11-09",
    count: 2,
  };
  await spec()
    .get("https://api.rawg.io/api/games")
    .withQueryParams("key", apiData.API_KEY)
    .withQueryParams("search", apiData.gameName)
    .withQueryParams("platforms", apiData.platform)
    .withQueryParams("search_precise", apiData.searchPrecise)
    .withQueryParams("search_exact", apiData.searchExact)
    .withQueryParams("dates", apiData.dates)
    .expectStatus(statusCode.ok)
    .expectJsonLike({ count: apiData.count })
    .inspect();
});
