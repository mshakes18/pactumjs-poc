export enum statusCode {
  ok = 200,
  fail = 401,
}

export type baseType = {
  apiURL: string;
  API_KEY?: string;
  statuscode: statusCode.ok | statusCode.fail;
};

export type randomParam = {
  randomParam: string;
};

export type gameSeriesOk = baseType & {
  gameName: string;
  platform: number;
  searchPrecise: boolean;
  searchExact: boolean;
  count: number;
};

export type specificGamesSeries = baseType & {
  gameName: string;
  platform: number;
  searchPrecise: boolean;
  searchExact: boolean;
  count: number;
  dates: string;
};

export type specificGamesStudio = baseType & {
  studio: string;
  searchPrecise: boolean;
  searchExact: boolean;
};
