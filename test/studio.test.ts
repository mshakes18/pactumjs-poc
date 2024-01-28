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

it("should get all games by santa monica studios", async () => {
  const apiData: specificGamesStudio = {
    apiURL: "https://api.rawg.io/api/games?key=",
    API_KEY: process.env.RAWG_K!,
    studio: "sce-santa-monica-studio",
    statusCode: statusCode.ok,
    searchPrecise: true,
    searchExact: true,
  };

  await spec()
    .get("https://api.rawg.io/api/games")
    .withQueryParams("developers", apiData.studio)
    .withQueryParams("key", apiData.API_KEY)
    .withQueryParams("search_precise", apiData.searchPrecise)
    .withQueryParams("search_exact", apiData.searchExact)
    .expectStatus(statusCode.ok)
    .inspect();
});
