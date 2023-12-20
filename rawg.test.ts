import { spec, response } from "pactum";
require("dotenv").config();
const API_KEY = process.env.RAWG_K!;
import { details } from "./types";

it.skip("should return response with status of 200", async () => {
  // const apiURL: string = "https://api.rawg.io/api/games?key=";

  const testDetails: details = {
    apiURL: "https://api.rawg.io/api/games?key=",
    API_KEY: process.env.RAWG_K!,
    statuscode: 200,
  };
  await spec()
    .get(testDetails.apiURL + testDetails.API_KEY)
    .expectStatus(testDetails.statuscode)
    .inspect();
});

it.skip("it should return response with status of 401 Unauthorized", async () => {
  await spec()
    .get("https://api.rawg.io/api/games?key=" + "sdhjshdshj")
    .expectStatus(401)
    .expectJsonLike({
      error: "The API key is not found",
    })
    .inspect();
});

it("should get a game series", async () => {
  const gameSeries = await spec()
    .get("https://api.rawg.io/api/games")
    .withQueryParams("key", API_KEY)
    .withQueryParams("search", "Gran turismo")
    .withQueryParams("platforms", 18)
    .withQueryParams("search_precise", true)
    .withQueryParams("search_exact", true)
    .expectStatus(200)
    .expectJsonLike({ count: 3 })
    .inspect();
  // .toss();
  const gameName = gameSeries.body.results[0].name;
  console.log(gameName);
});

it.skip("should get god of war ragnarok", async () => {
  await spec()
    .get("https://api.rawg.io/api/games")
    .withQueryParams("key", API_KEY)
    .withQueryParams("search", "God of War")
    .withQueryParams("platforms", 187)
    .withQueryParams("search_precise", true)
    .withQueryParams("search_exact", true)
    .withQueryParams("dates", "2022-11-09")
    .expectStatus(200)
    .expectJsonLike({ count: 1 })
    .inspect();
});

it.skip("should get all games by santa monica studios", async () => {
  await spec()
    .get("https://api.rawg.io/api/games")
    .withQueryParams("developers", "sce-santa-monica-studio")
    .withQueryParams("key", API_KEY)
    .withQueryParams("search_precise", true)
    .withQueryParams("search_exact", true)
    .inspect();
});
