export interface IWalk {
  walkTimeStamps: number[];
  walkName: string;
}
export type WalkName = 'green' | 'blue' | 'red'
export interface State {
  walkHistory: IWalk[];
}
