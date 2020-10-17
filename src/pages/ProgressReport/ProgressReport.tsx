import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Pagination from "react-js-pagination";

import { Page } from '../../components/Page';
import { IWalk, WalkName } from '../../utils/types';
import { calculateActivityTime } from '../../utils/timeFormatter'
import { LogoWrapper, Logo } from '../../components/SharedStyles';
import { blue, red } from '../../utils/constants';


const ReportContainer = styled.div`
  padding: 1
  border: 3px solid ${red};
  height: 350px;
  // min-height: 100vh;
  width: 75%;
`;

const WalkContainer = styled.div`
  border: 0px solid ${blue};
  border-radius: 5px;
  padding: 10px;
  margin: 0 12px;
  background-color: rgba( 100, 170, 200, 0.1 );
  margin-bottom 10px; 
`;

const ReportItemText = styled.div`
    color: ${blue};
    font-size: 12px;
`;

const StrongSpan = styled.span`
  font-weight: 700;
`;

const walkGrade = (walkName: WalkName): string => {
  const grade = {
    'green': 'short',
    'blue': 'medium',
    'red': 'long'
  }
  return grade[walkName];
}

const noWalkContainer = (): JSX.Element => <WalkContainer><ReportItemText>Welcome, this view your Dawg's Rehab history!</ReportItemText></WalkContainer>


interface IProps {
  walkHistory: IWalk[]
}
export const ProgressReport: React.FC<IProps> = ({ walkHistory }) => {
  // const handlePaginationOnClick = (pageNumber: number): void => {
  //   console.log(`active page is ${pageNumber}`);
  //   // this.setState({activePage: pageNumber});
  // };

  const walkItems = walkHistory.map((walk: IWalk) => {
    const lastWalkTimeStamp = walk.walkTimeStamps.slice(walk.walkTimeStamps.length - 1).shift(); //.format('MMM Do YYYY, h:mm a')
    if(lastWalkTimeStamp) {
      const activityTime = calculateActivityTime(walk.walkTimeStamps) * 1000;
      const walkTime = moment(activityTime).format('mm:ss');
      const walkName = walkGrade(walk.walkName as WalkName);
      const dateTime = moment(lastWalkTimeStamp).format('MMM Do YYYY, h:mm a');
      return (
        <WalkContainer key={lastWalkTimeStamp}>
          <ReportItemText><StrongSpan>{dateTime}</StrongSpan></ReportItemText>
          <ReportItemText><StrongSpan>Total walk time: </StrongSpan>{walkTime}</ReportItemText>
          <ReportItemText><StrongSpan>Walk grade: </StrongSpan>{walkName}</ReportItemText>
        </WalkContainer>
  
      )
    }
    return noWalkContainer();
  });

  const noWalks = noWalkContainer();
  return (
    <>
      <Page heading={''}>
        <LogoWrapper>
          <Logo>
            Progress Report <br />
          </Logo>
        </LogoWrapper>
        <ReportContainer>
          <WalkContainer>
            {walkHistory.length ? walkItems : noWalks}
          </WalkContainer>
          {/* <Pagination
            activePage={1}
            itemsCountPerPage={10}
            totalItemsCount={450}
            pageRangeDisplayed={5}
            onChange={handlePaginationOnClick} /> */}
            
        </ReportContainer>
      </Page>
    </>
  );
};
