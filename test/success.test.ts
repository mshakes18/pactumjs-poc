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

it("should return response with status of 200", async () => {
  const apiData: testResponseType = {
    apiURL: "https://api.rawg.io/api/games?key=",
    API_KEY: process.env.RAWG_K!,
    statuscode: statusCode.ok,
  };
  await spec()
    .get(apiData.apiURL + apiData.API_KEY)
    .expectStatus(statusCode.ok)
    .inspect();
});
