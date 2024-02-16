import { spec } from "pactum";

import { baseType, statusCode, specificGamesStudio } from "../types";

import "dotenv/config";

it("should get all games by santa monica studios", async () => {
  const apiData: specificGamesStudio & baseType = {
    apiURL: "https://api.rawg.io/api/games?key=",
    API_KEY: process.env.RAWG_K!,
    studio: "sce-santa-monica-studio",
    statuscode: statusCode.ok,
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
