import { spec } from "pactum";
import { baseType, statusCode, specificGamesSeries } from "../types";
import "dotenv/config";

it("should get god of war ragnarok", async () => {
  const apiData: specificGamesSeries & baseType = {
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
    // works but is too long.... want to check specific fields....
    .expectJsonSchema({
      type: "object",
      properties: {
        count: {
          type: "integer",
        },
        next: {
          type: ["string", "null"],
        },
        previous: {
          type: ["string", "null"],
        },
        results: {
          type: "array",
          items: {
            type: "object",
            properties: {
              slug: {
                type: "string",
              },
              name: {
                type: "string",
              },
              playtime: {
                type: "integer",
              },
              platforms: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    platform: {
                      type: "object",
                      properties: {
                        id: {
                          type: "integer",
                        },
                        name: {
                          type: "string",
                        },
                        slug: {
                          type: "string",
                        },
                      },
                      required: ["id", "name", "slug"],
                    },
                  },
                  required: ["platform"],
                },
              },
              stores: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    store: {
                      type: "object",
                      properties: {
                        id: {
                          type: "integer",
                        },
                        name: {
                          type: "string",
                        },
                        slug: {
                          type: "string",
                        },
                      },
                      required: ["id", "name", "slug"],
                    },
                  },
                  required: ["store"],
                },
              },
              released: {
                type: "string",
                format: "date",
              },
              tba: {
                type: "boolean",
              },
              background_image: {
                type: "string",
                format: "uri",
              },
              rating: {
                type: "number",
              },
              rating_top: {
                type: "integer",
              },
              ratings: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    id: {
                      type: "integer",
                    },
                    title: {
                      type: "string",
                    },
                    count: {
                      type: "integer",
                    },
                    percent: {
                      type: "number",
                    },
                  },
                  required: ["id", "title", "count", "percent"],
                },
              },
            },
            required: [
              "slug",
              "name",
              "playtime",
              "platforms",
              "stores",
              "released",
              "tba",
              "background_image",
              "rating",
              "rating_top",
              "ratings",
            ],
          },
        },
      },
      required: ["count", "next", "previous", "results"],
    })
    .inspect();
});

it("Cyberpunk 2077", async () => {
  const apiData: specificGamesSeries & baseType = {
    apiURL: "https://api.rawg.io/api/games?key=",
    API_KEY: process.env.RAWG_K!,
    gameName: "Cyberpunk 2077",
    statuscode: statusCode.ok,
    platform: 187,
    searchPrecise: true,
    searchExact: true,
    dates: "2020-12-10",
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
    .expectJsonLike({ count: apiData.count });
  // .inspect();
});
