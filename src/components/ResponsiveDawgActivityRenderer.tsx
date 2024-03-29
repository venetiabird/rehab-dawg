import React from 'react';
import styled from 'styled-components';
// import { ResponsiveBar } from '@nivo/bar';

import { ICavalettiDisplayGraphDataPoint, IWalkDisplayGraphDataPoint } from '../utils/types';
import { colors } from '../utils/constants';

const ChartContainer = styled.div`
  border: 0px solid black;
  border-radius: 5px;
  padding: 6px;
  margin: 0 12px 12px;
  background-color: rgba( 256, 256, 256, 0.1 );
`;

const ChartTitle = styled.span`
  font-weight: 700;
  color: ${colors.black};
`;

interface IRendererProps {
  graphDataPts: IWalkDisplayGraphDataPoint[] | ICavalettiDisplayGraphDataPoint[];
  chartTitle: string;
  chartKeys: string[]
}

export const ResponsiveDawgActivityRenderer: React.FC<IRendererProps> = ({ graphDataPts, chartTitle, chartKeys }) => {
  if(graphDataPts.length === 0) {
    return null;
  }
  return (<>
    <ChartContainer>
    <ChartTitle>{chartTitle}</ChartTitle>
    </ChartContainer>
    {/* <ResponsiveBar
        data={graphDataPts}
        keys={chartKeys}
        indexBy="date"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: 'category10' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'short'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'medium'
                },
                id: 'lines'
            }
        ]}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Date',
            legendPosition: 'end',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Minutes',
            legendPosition: 'end',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    /> */}
  </>);
};
