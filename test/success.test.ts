import { spec } from "pactum";

import { baseType, statusCode } from "../types";

import "dotenv/config";

it("should return response with status of 200", async () => {
  const apiData: baseType = {
    apiURL: "https://api.rawg.io/api/games?key=",
    API_KEY: process.env.RAWG_K!,
    statuscode: statusCode.ok,
  };
  await spec()
    .get(apiData.apiURL + apiData.API_KEY)
    .expectStatus(statusCode.ok)
    .inspect();
});
