import { spec } from "pactum";

import { baseType, statusCode, randomParam } from "../types";

it("it should return response with status of 401 Unauthorized", async () => {
  const apiData: baseType & randomParam = {
    apiURL: "https://api.rawg.io/api/games?key=",
    randomParam: "sdhjshdshj",
    statuscode: statusCode.fail,
  };

  await spec()
    .get(apiData.apiURL + apiData.randomParam)
    .expectStatus(statusCode.fail)
    .expectJsonLike({
      error: "The API key is not found",
    })
    .inspect();
});
