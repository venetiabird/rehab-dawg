import React from 'react';

import { IWalk, WalkName, IDisplayGraphDataPoint } from '../utils/types';
import { calculateActivityTime } from '../utils/timeCalculation';
import { ResponsiveDawgActivityRenderer } from './ResponsiveDawgActivityRenderer';

interface IProps {
    walkHistory: IWalk[];
  }

const walkLength = (walkName: WalkName): string => {
    const walkMap = {
        'green': 'short',
        'blue': 'medium',
        'red': 'long',
    }   
    return walkMap[walkName];
}

const getDay = (datetime: number): string => {
    return new Date(datetime).toLocaleDateString('en-EN');
}

const groupByDate = (walks: IWalk[]): { [key: string]: IGraphDataPoint }  => {
    const data =  walks.reduce((accum: { [key: string]: IGraphDataPoint }, walk: IWalk): { [key: string]: IGraphDataPoint } => {
        const actTime: number = Math.ceil(calculateActivityTime(walk.activityTimeStamps) / 60);
        const length = walkLength(walk.walk)
        const computedDateIndex: string = getDay(walk.activityTimeStamps[0]);
        const existingGraphData = accum[computedDateIndex];
        
        let graphDataPt: IGraphDataPoint
        if(existingGraphData) {
          graphDataPt = {
            ...existingGraphData,
            short: length === 'short'? actTime + existingGraphData.short : existingGraphData.short,
            medium: length === 'medium'? actTime + existingGraphData.medium : existingGraphData.medium,
            long: length === 'long'? actTime + existingGraphData.long : existingGraphData.long
          }
        } else {
            graphDataPt = {
              date: new Date(walk.activityTimeStamps[0]),
              short: length === 'short'? actTime : 0,
              medium: length === 'medium'? actTime : 0,
              long: length === 'long'? actTime : 0,
          }
        }
        return { 
          ...accum, 
          [computedDateIndex]: graphDataPt
        };
    }, {})
    return data;
}

interface IGraphDataPoint {
    date: Date;
    short: number;
    medium: number;
    long: number; 
}



// const data: IDisplayGraphDataPoint[] = [
//     {
//         "date": "Monday",
//         "short": 100,
//         "medium": 0,
//         "long": 10,
//     },
//     {
//         "date": "Tuesday",
//         "short": 100,
//         "medium": 50,
//         "long": 0
//     },
// ]
// const data2 = [
//     {
//       "country": "AD",
//       "hot dog": 27,
//       "hot dogColor": "hsl(31, 70%, 50%)",
//       "burger": 144,
//       "burgerColor": "hsl(208, 70%, 50%)",
//       "sandwich": 129,
//       "sandwichColor": "hsl(329, 70%, 50%)",
//       "kebab": 174,
//       "kebabColor": "hsl(318, 70%, 50%)",
//       "fries": 110,
//       "friesColor": "hsl(176, 70%, 50%)",
//       "donut": 182,
//       "donutColor": "hsl(37, 70%, 50%)"
//     },
//     {
//       "country": "AE",
//       "hot dog": 192,
//       "hot dogColor": "hsl(136, 70%, 50%)",
//       "burger": 2,
//       "burgerColor": "hsl(257, 70%, 50%)",
//       "sandwich": 153,
//       "sandwichColor": "hsl(312, 70%, 50%)",
//       "kebab": 17,
//       "kebabColor": "hsl(53, 70%, 50%)",
//       "fries": 11,
//       "friesColor": "hsl(251, 70%, 50%)",
//       "donut": 32,
//       "donutColor": "hsl(198, 70%, 50%)"
//     },
//     {
//       "country": "AF",
//       "hot dog": 191,
//       "hot dogColor": "hsl(35, 70%, 50%)",
//       "burger": 166,
//       "burgerColor": "hsl(5, 70%, 50%)",
//       "sandwich": 53,
//       "sandwichColor": "hsl(91, 70%, 50%)",
//       "kebab": 117,
//       "kebabColor": "hsl(246, 70%, 50%)",
//       "fries": 33,
//       "friesColor": "hsl(224, 70%, 50%)",
//       "donut": 77,
//       "donutColor": "hsl(145, 70%, 50%)"
//     },
//     {
//       "country": "AG",
//       "hot dog": 150,
//       "hot dogColor": "hsl(163, 70%, 50%)",
//       "burger": 104,
//       "burgerColor": "hsl(229, 70%, 50%)",
//       "sandwich": 64,
//       "sandwichColor": "hsl(270, 70%, 50%)",
//       "kebab": 60,
//       "kebabColor": "hsl(223, 70%, 50%)",
//       "fries": 29,
//       "friesColor": "hsl(76, 70%, 50%)",
//       "donut": 21,
//       "donutColor": "hsl(283, 70%, 50%)"
//     },
//     {
//       "country": "AI",
//       "hot dog": 99,
//       "hot dogColor": "hsl(312, 70%, 50%)",
//       "burger": 149,
//       "burgerColor": "hsl(192, 70%, 50%)",
//       "sandwich": 8,
//       "sandwichColor": "hsl(287, 70%, 50%)",
//       "kebab": 179,
//       "kebabColor": "hsl(92, 70%, 50%)",
//       "fries": 13,
//       "friesColor": "hsl(284, 70%, 50%)",
//       "donut": 11,
//       "donutColor": "hsl(171, 70%, 50%)"
//     },
//     {
//       "country": "AL",
//       "hot dog": 43,
//       "hot dogColor": "hsl(287, 70%, 50%)",
//       "burger": 33,
//       "burgerColor": "hsl(62, 70%, 50%)",
//       "sandwich": 109,
//       "sandwichColor": "hsl(185, 70%, 50%)",
//       "kebab": 162,
//       "kebabColor": "hsl(152, 70%, 50%)",
//       "fries": 47,
//       "friesColor": "hsl(33, 70%, 50%)",
//       "donut": 79,
//       "donutColor": "hsl(68, 70%, 50%)"
//     },
//     {
//       "country": "AM",
//       "hot dog": 74,
//       "hot dogColor": "hsl(48, 70%, 50%)",
//       "burger": 150,
//       "burgerColor": "hsl(191, 70%, 50%)",
//       "sandwich": 16,
//       "sandwichColor": "hsl(106, 70%, 50%)",
//       "kebab": 18,
//       "kebabColor": "hsl(117, 70%, 50%)",
//       "fries": 120,
//       "friesColor": "hsl(301, 70%, 50%)",
//       "donut": 149,
//       "donutColor": "hsl(149, 70%, 50%)"
//     }
//   ]


export const DawgResponsiveBar: React.FC<IProps> = ( { walkHistory } ) => {
  const graphData = groupByDate(walkHistory);
  const graphDataPts:IDisplayGraphDataPoint[] = Object.entries(graphData).map(
    ([key, value]) => {
      return {date: key, short: value.short, medium: value.medium, long: value.long}
    }
  );
  if(graphDataPts.length > 0) {
    return <ResponsiveDawgActivityRenderer graphDataPts={graphDataPts}/>
  }
    return null // vs <></> both are ok
  }
export default DawgResponsiveBar;