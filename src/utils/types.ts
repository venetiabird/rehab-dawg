export interface IWalk {
  walkTimeStamps: number[];
  walkName: string;
  // key?: number;
}
export type WalkName = 'green' | 'blue' | 'red'
export interface State {
  walkHistory: IWalk[];
}
