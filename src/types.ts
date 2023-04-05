export type FetchingOptions = {
  forceSuccess?: boolean
}

export enum FetchStatus {
  Error,
  Loaded,
  Loading,
  Uninitialized,
}

export type StateData = {
  name: string,
  population: number,
  squareMiles: number,
}
