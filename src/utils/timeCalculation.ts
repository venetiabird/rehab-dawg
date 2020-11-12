import { IWalk, WalkName, TrickGrade} from './types'
import { GradeMap } from './constants';

export const sessionTime = (activityName: WalkName | TrickGrade ): number => {
  return GradeMap[activityName];
};

/** 
 * The return time is in seconds
*/
export const calculateWeeklyActivityTime = (walks: IWalk[]): number => {
  let result = 0;
  result = walks.reduce((accum: number, walk: IWalk) => {
    return accum = accum + calculateActivityTime(walk.activityTimeStamps);
  }, 0);
  return result;
}

/** 
 * The return time is in seconds
 */
export const calculateActivityTime = (walkTimeStamps: number[]): number => {
  let result = 0;
  for (let i = 0; i < walkTimeStamps.length - 1; i += 2) {
    const timeDiff = (walkTimeStamps[i+1] - walkTimeStamps[i]);
    result += timeDiff;
  }
  return Math.round(result / 1000);
}