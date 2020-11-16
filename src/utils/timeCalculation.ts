import { IActivity, WalkName, TrickGrade, ICavaletti} from './types'
import { GradeMap } from './constants';

export const sessionTime = (activityName: WalkName | TrickGrade ): number => {
  return GradeMap[activityName];
};

/** 
 * The return time is in seconds
*/
export const calculateWeeklyActivityTime = (activity: IActivity[]): number => {
  let result = 0;
  result = activity.reduce((accum: number, a: IActivity) => {
    return accum = accum + calculateActivityTime(a.activityTimeStamps);
  }, 0);
  return result;
}

/** 
 * The return time is in seconds
 */
export const calculateActivityTime = (activityTimeStamps: number[]): number => {
  let result = 0;
  for (let i = 0; i < activityTimeStamps.length - 1; i += 2) {
    const timeDiff = (activityTimeStamps[i+1] - activityTimeStamps[i]);
    result += timeDiff;
  }
  return Math.round(result / 1000);
}