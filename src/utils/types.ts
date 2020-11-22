export interface Dictionary<T> {
  [key: string]: T;
}
export interface IActivity {
  activityTimeStamps: number[];
  activityType: ActivityType
  name: WalkName | TrickGrade
}

export enum ActivityType {
  Walk,
  Cavaletti
}
export interface IWalkDisplayGraphDataPoint {
  date: string;
  short: number;
  medium: number;
  long: number; 
}

export interface ICavalettiDisplayGraphDataPoint {
  date: string;
  rookie: number;
  hotdawg: number;
  prodawg: number;
}

export type WalkName = 'green' | 'blue' | 'red'
export type TrickGrade = 'bronze' | 'silver' | 'gold'
// export type TrickGrade = 'rookie (basic poles)' | 'cowdawg (figure of 8s)' | 'hotdawg (comp ready)'
export interface State {
  walkHistory: IActivity[];
}

