export interface IWalk {
  startDateTime: number;
  walkTime: number;
  finishDateTime: number;
  walkName: string;
  key?: number;
}
export type WalkName = 'green' | 'blue' | 'red'

export interface IActiveWalk {
  startDateTime: number;
  walkTime?: number;
  finishDateTime?: number;
  walkName?: WalkName;
}
export interface State {
  history: IWalk[];
}
