export interface Dictionary<T> {
  [key: string]: T;
}
export interface IWalk {
  walkTimeStamps: number[];
  walk: WalkName;
}

export interface IDisplayGraphDataPoint {
  date: string;
  short: number;
  medium: number;
  long: number; 
}

export type WalkName = 'green' | 'blue' | 'red'
export interface State {
  walkHistory: IWalk[];
}

