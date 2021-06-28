import React from 'react';

import { IActivity, WalkName, IWalkDisplayGraphDataPoint, ICavalettiDisplayGraphDataPoint, TrickGrade, ActivityType } from '../utils/types';
import { calculateActivityTime } from '../utils/timeCalculation';
// import { ResponsiveDawgActivityRenderer } from './ResponsiveDawgActivityRenderer';

interface IProps {
  walkHistory: IActivity[];
  cavalettiHistory: IActivity[];
}

interface IWalkGraphDataPoint {
  date: Date;
  short: number;
  medium: number;
  long: number;
}
interface ICavalettiGraphDataPoint {
  date: Date;
  rookie: number;
  hotdawg: number;
  prodawg: number;
}

const activityLength = (activityName: WalkName | TrickGrade): string => {
  const walkMap = {
    'green': 'short',
    'blue': 'medium',
    'red': 'long',
    'bronze': 'rookie',
    'silver': 'hotdawg',
    'gold': 'prodawg'
  }
  return walkMap[activityName];
}

const getDay = (datetime: number): string => {
  return new Date(datetime).toLocaleDateString('en-EN');
}

type WalkGraphDataPointDictionary = {
  [key: string]: IWalkGraphDataPoint
}

type CavelettiGraphDataPointDictionary = {
  [key: string]: ICavalettiGraphDataPoint
}

type GraphDataPointDictionary = {
  [key: string]: IWalkGraphDataPoint | ICavalettiGraphDataPoint
}

// function activityGraphDataPts(activity: IActivity, existingGraphData: IWalkGraphDataPoint): IWalkGraphDataPoint
// function activityGraphDataPts(activity: IActivity, existingGraphData: ICavalettiGraphDataPoint): ICavalettiGraphDataPoint
const walkGraphDataPts = (data: { activityTime: number, activityName: string, activity: IActivity, existingGraphData: IWalkGraphDataPoint}): IWalkGraphDataPoint => {
  let graphDataPt: IWalkGraphDataPoint
    if (data.existingGraphData) {
      graphDataPt = {
        ...data.existingGraphData,
        short: data.activityName === 'short' ? data.activityTime + data.existingGraphData.short : data.existingGraphData.short,
        medium: data.activityName === 'medium' ? data.activityTime + data.existingGraphData.medium : data.existingGraphData.medium,
        long: data.activityName === 'long' ? data.activityTime + data.existingGraphData.long : data.existingGraphData.long
      }
    } else {
      graphDataPt = {
        date: new Date(data.activity.activityTimeStamps[0]),
        short: data.activityName === 'short' ? data.activityTime : 0,
        medium: data.activityName === 'medium' ? data.activityTime : 0,
        long: data.activityName === 'long' ? data.activityTime : 0,
      }
    }
    return graphDataPt
}

const cavallettiGraphDataPts = (data: { activityTime: number, activityName: string, activity: IActivity, existingGraphData: ICavalettiGraphDataPoint}): ICavalettiGraphDataPoint => {
  let graphDataPt: ICavalettiGraphDataPoint
    if (data.existingGraphData) {
      graphDataPt = {
        ...data.existingGraphData,
        rookie: data.activityName === 'rookie' ? data.activityTime + data.existingGraphData.rookie : data.existingGraphData.rookie,
        hotdawg: data.activityName === 'hotdawg' ? data.activityTime + data.existingGraphData.hotdawg : data.existingGraphData.hotdawg,
        prodawg: data.activityName === 'prodawg' ? data.activityTime + data.existingGraphData.prodawg : data.existingGraphData.prodawg
      }
    } else {
      graphDataPt = {
        date: new Date(data.activity.activityTimeStamps[0]),
        rookie: data.activityName === 'rookie' ? data.activityTime : 0,
        hotdawg: data.activityName === 'hotdawg' ? data.activityTime : 0,
        prodawg: data.activityName === 'prodawg' ? data.activityTime : 0,
      }
    }
    return graphDataPt
}
const groupedActivity = (activities: IActivity[]): GraphDataPointDictionary => {
  const data = activities.reduce((accum: GraphDataPointDictionary, activity: IActivity): GraphDataPointDictionary => {
    const activityTime: number = Math.ceil(calculateActivityTime(activity.activityTimeStamps) / 60);
    const activityName = activityLength(activity.name)
    const computedDateIndex: string = getDay(activity.activityTimeStamps[0]);
    const existingGraphData = accum[computedDateIndex];
    let graphDataPt: IWalkGraphDataPoint | ICavalettiGraphDataPoint
    if(isWalkActivity(activity.activityType)) {
      graphDataPt = walkGraphDataPts({
        activityTime,
        activityName,
        activity,
        existingGraphData: (existingGraphData as IWalkGraphDataPoint)})
      } else {
        graphDataPt = cavallettiGraphDataPts({
          activityTime,
          activityName,
          activity,
          existingGraphData: (existingGraphData as ICavalettiGraphDataPoint)})
    }
    return {
      ...accum,
      [computedDateIndex]: graphDataPt
    };
  }, {})
  return data;
}

function activityGroupedByDate(activity: IActivity[]): WalkGraphDataPointDictionary
function activityGroupedByDate(activity: IActivity[]): CavelettiGraphDataPointDictionary
function activityGroupedByDate(activity: IActivity[]): GraphDataPointDictionary {
  return groupedActivity(activity)
}

// type guard
function isWalkGraphDataPoint(data: IWalkGraphDataPoint | ICavalettiGraphDataPoint): data is IWalkGraphDataPoint {
  if(data as IWalkGraphDataPoint && (data as IWalkGraphDataPoint).short !== undefined) {
    return true
  }
  return false
}
// type guard
function isWalkActivity(data: ActivityType): data is ActivityType {
  return (data === ActivityType.Walk)
}

function createGraphDataPoints(data: WalkGraphDataPointDictionary): IWalkDisplayGraphDataPoint[]
function createGraphDataPoints(data: CavelettiGraphDataPointDictionary): ICavalettiDisplayGraphDataPoint[]
function createGraphDataPoints(data: WalkGraphDataPointDictionary | CavelettiGraphDataPointDictionary):
  IWalkDisplayGraphDataPoint[] | ICavalettiDisplayGraphDataPoint[] {
  const entries = Object.entries(data);
  if(entries === undefined || entries.length === 0 ) { return [] }
  if (isWalkGraphDataPoint(entries[0][1])) {
    return Object.entries(data).map(
      ([key, value]) => {

        return { date: key, short: value.short, medium: value.medium, long: value.long }
      }
    );
  }

  return Object.entries(data).map(
    ([key, value]) => {

      return { date: key, rookie: value.rookie, hotdawg: value.hotdawg, prodawg: value.prodawg }
    }
  );
};

export const DawgResponsiveGraph: React.FC<IProps> = ({ walkHistory, cavalettiHistory }) => {
  const walkGraphDataPts = createGraphDataPoints(activityGroupedByDate(walkHistory));
  const cavalettiGraphDataPts = createGraphDataPoints(activityGroupedByDate(cavalettiHistory));
  return (<>
  </>)
}
export default DawgResponsiveGraph;
