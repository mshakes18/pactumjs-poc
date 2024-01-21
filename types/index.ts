export type statusOktype = {
  apiURL: string;
  API_KEY: string;
  statuscode: number;
};

export type statusUnauthorizedType = {
  apiURL: string;
  randomParam: string;
  statuscode: number;
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
