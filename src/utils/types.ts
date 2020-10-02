export interface Walk {
  date: number;
  startTime?: number;
  finishTime?: number;
  name: string;
}
export interface State {
  history: Walk[];
}