import { spec, response } from "pactum";
require("dotenv").config();
const API_KEY = process.env.RAWG_K;
import {
  baseType,
  statusCode,
  randomParam,
  gameSeriesOk,
  specificGamesSeries,
  specificGamesStudio,
} from "../types";

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
