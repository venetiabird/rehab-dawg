export interface IWalk {
  startDateTime: number;
  walkTime: number;
  finishDateTime: number;
  walkName: string;
}

export interface IActiveWalk {
  startDateTime: number;
  walkTime?: number;
  finishDateTime?: number;
  walkName: string;
}
export interface State {
  history: IWalk[];
}