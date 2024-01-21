import { spec, response } from "pactum";
require("dotenv").config();
const API_KEY = process.env.RAWG_K;
import {
  statusOktype,
  statusUnauthorizedType,
  gameSeriesOk,
  specificGamesSeries,
  specificGamesStudio,
} from "../types";

it("should return response with status of 200", async () => {
  const apiData: statusOktype = {
    apiURL: "https://api.rawg.io/api/games?key=",
    API_KEY: process.env.RAWG_K!,
    statuscode: 200,
  };
  await spec()
    .get(apiData.apiURL + apiData.API_KEY)
    .expectStatus(apiData.statuscode)
    .inspect();
});

it("it should return response with status of 401 Unauthorized", async () => {
  const apiData: statusUnauthorizedType = {
    apiURL: "https://api.rawg.io/api/games?key=",
    randomParam: "sdhjshdshj",
    statuscode: 401,
  };

  await spec()
    .get(apiData.apiURL + apiData.randomParam)
    .expectStatus(apiData.statuscode)
    .expectJsonLike({
      error: "The API key is not found",
    })
    .inspect();
});

it("should get a game series", async () => {
  const apiData: gameSeriesOk = {
    apiURL: "https://api.rawg.io/api/games?key=",
    API_KEY: process.env.RAWG_K!,
    gameName: "Gran turismo",
    statuscode: 200,
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

it("should get god of war ragnarok", async () => {
  const apiData: specificGamesSeries = {
    apiURL: "https://api.rawg.io/api/games?key=",
    API_KEY: process.env.RAWG_K!,
    gameName: "God of War",
    statuscode: 200,
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
    .expectStatus(200)
    .expectJsonLike({ count: apiData.count })
    .inspect();
});

it("should get all games by santa monica studios", async () => {
  const apiData: specificGamesStudio = {
    apiURL: "https://api.rawg.io/api/games?key=",
    API_KEY: process.env.RAWG_K!,
    studio: "sce-santa-monica-studio",
    statusCode: 200,
    searchPrecise: true,
    searchExact: true,
  };

  await spec()
    .get("https://api.rawg.io/api/games")
    .withQueryParams("developers", apiData.studio)
    .withQueryParams("key", apiData.API_KEY)
    .withQueryParams("search_precise", apiData.searchPrecise)
    .withQueryParams("search_exact", apiData.searchExact)
    .expectStatus(apiData.statusCode)
    .inspect();
});
