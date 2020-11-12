export interface Dictionary<T> {
  [key: string]: T;
}
export interface IWalk {
  walkTimeStamps: number[];
  walk: WalkName;
}

export interface ICavaletti {
  trickGrade: TrickGrade;
  cavalettieStartEnd: [number, number]
}

export interface IDisplayGraphDataPoint {
  date: string;
  short: number;
  medium: number;
  long: number; 
}

export type WalkName = 'green' | 'blue' | 'red'
export type TrickGrade = 'bronze' | 'silver' | 'gold'
// export type TrickGrade = 'rookie (basic poles)' | 'cowdawg (figure of 8s)' | 'hotdawg (comp ready)'
export interface State {
  walkHistory: IWalk[];
}

