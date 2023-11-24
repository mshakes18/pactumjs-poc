const { spec, response } = require("pactum");
require("dotenv").config();
const API_KEY = process.env.RAWG_K;

it.skip("should return response with status of 200", async () => {
  await spec()
    .get("https://api.rawg.io/api/games?key=" + API_KEY)
    .expectStatus(200)
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
  await spec()
    .get("https://api.rawg.io/api/games")
    .withQueryParams("key", API_KEY)
    .withQueryParams("search", "Gran turismo")
    .withQueryParams("platforms", 18)
    .withQueryParams("search_precise", true)
    .withQueryParams("search_exact", true)
    .expectStatus(200)
    .expectJsonLike({ count: 3 })
    .inspect()
    .toss();
  const gameName = response.body;
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
