export interface Dictionary<T> {
  [key: string]: T;
}
export interface IActivity {
  activityTimeStamps: number[];
  activityType: ActivityType
}

export interface IWalk extends IActivity{
  walk: WalkName;
}
export interface ICavaletti extends IActivity {
  cavaletti: TrickGrade;
}

export enum ActivityType {
  Walk,
  Cavaletti
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
  walkHistory: IActivity[];
}

