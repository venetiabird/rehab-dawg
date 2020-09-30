export interface Walk {
  startDateTime: number;
  walkTime: number;
  finishDateTime?: number;
  walkName: string;
}
export interface State {
  history: Walk[];
}