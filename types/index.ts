export enum statusCode {
  ok = 200,
  fail = 401,
}

export type testResponseType = {
  apiURL: string;
  statuscode: statusCode.ok | statusCode.fail;
  API_KEY?: string;
  randomParam?: string;
};

export type randomParam = {
  randomParam: string;
};

export type gameSeriesOk = {
  apiURL: string;
  API_KEY: string;
  statuscode: number;
  gameName: string;
  platform: number;
  searchPrecise: boolean;
  searchExact: boolean;
  count: number;
};

export type specificGamesSeries = {
  apiURL: string;
  API_KEY: string;
  statuscode: number;
  gameName: string;
  platform: number;
  searchPrecise: boolean;
  searchExact: boolean;
  count: number;
  dates: string;
};

export type specificGamesStudio = {
  apiURL: string;
  API_KEY: string;
  statusCode: number;
  studio: string;
  searchPrecise: boolean;
  searchExact: boolean;
};
