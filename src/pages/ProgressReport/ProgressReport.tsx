import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
// import InfiniteScroll from 'react-infinite-scroller';

import { Page } from '../../components/Page';
import { IWalk, WalkName } from '../../utils/types';
import { LogoWrapper, Logo } from '../../components/SharedStyles';
import { blue, lightblue } from '../../utils/constants';


const ReportContainer = styled.div`
  // background-image: linear-gradient(to bottom right, ${blue}, ${'lightblue'}); 
  min-height: 100vh;
  padding: 0 12px 62px 12px
`;

const WalkContainer = styled.div`
  border: 2px solid ${blue};
  border-radius: 5px;
  padding: 6px;
  margin: 0 12px;
  background-color: rgba( 256, 256, 256, 0.1 );
  margin-bottom 62px; 
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

interface IProps {
  walkHistory: IWalk[]
}
export const ProgressReport: React.FC<IProps> = ({ walkHistory }) => {
  console.log('===> history', walkHistory);
  const walkItems = walkHistory.map((walk: IWalk) => {
    const dateTime = moment(walk.startDateTime).format('MMM Do YYYY, h:mm a')
    const walkTime = moment(walk.walkTime).format('mm:ss')
    const walkName = walkGrade(walk.walkName as WalkName);
    return (

      <WalkContainer key={walk.startDateTime}>
        <ReportItemText><StrongSpan>{dateTime}</StrongSpan></ReportItemText>
        <ReportItemText><StrongSpan>Total time: </StrongSpan>{walkTime}</ReportItemText>
        <ReportItemText><StrongSpan>Walk grade: </StrongSpan>{walkName}</ReportItemText>
      </WalkContainer>

    )
    // return (
    //   <ListContainer scrollable={false}>
    //     <InfiniteList scrollContainer={'window'} walks={history} />
    //   </ListContainer>
    // );

  })

  const noWalks = <WalkContainer><ReportItemText>Welcome, record your Dawgs Rehab history!</ReportItemText></WalkContainer>
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
            {/* <InfiniteScroll
              pageStart={0}
              loadMore={walkItems}
              hasMore={true || false}
              loader={<div className="loader" key={0}>Loading ...</div>}> 
              {history.length ? walkItems : noWalks}
            </InfiniteScroll>                                  */}
            {walkHistory.length ? walkItems : noWalks}
          </WalkContainer>
        </ReportContainer>
      </Page>
    </>
  );
};
