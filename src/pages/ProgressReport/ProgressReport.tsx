import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { Page } from '../../components/Page';
import { IWalk } from '../../utils/types';
import { LogoWrapper, Logo } from '../../components/SharedStyles';
import useLocalStorage from '../../hooks/useLocalStorage';
import { blue } from '../../utils/constants';

// interface IProps {
//   history: IWalk[]
// }

const ReportContainer = styled.div`

`;

const WalkContainer = styled.div`
    border: 1px solid ${blue};
    border-radius: 5px;
    padding: 25px;
    margin: 10 10px;
    background-color: rgba( 256, 256, 256, 0.1 );
`;

const ReportItemText = styled.div`
    color: ${blue};
`;

const StrongSpan = styled.span`
  font-weight: 700;
`;

export const ProgressReport: React.FC = () => {
  const [ history, setHistory] = useLocalStorage<IWalk[]>('history', []); 
  console.log('===> history', history);
  const walkItems = history.map((walk: IWalk) => {
    const dateTime = moment(walk.startDateTime).format('MMM Do YYYY, h:mm a')
    const walkTime = moment(walk.walkTime).format('MMM Do YYYY, h:mm a')
    const walkName = walk.walkName;
    return (
      <WalkContainer key={walk.startDateTime}>
        <ReportItemText><StrongSpan>{dateTime}</StrongSpan></ReportItemText>
        <ReportItemText><StrongSpan>Total time: </StrongSpan>{walkTime}</ReportItemText>
        <ReportItemText><StrongSpan>Walk grade: </StrongSpan>{walkName}</ReportItemText>
      </WalkContainer>

    )

  })
  const noWalks = <WalkContainer><ReportItemText>Welcome, record your Dawgs Rehab history!</ReportItemText></WalkContainer>
  return (
    <>
      <Page>
        <LogoWrapper>
          <Logo>
            Progress Report <br />
          </Logo>
        </LogoWrapper>
        <ReportContainer>
          <WalkContainer>
            {history.length ? walkItems : noWalks}
          </WalkContainer>
        </ReportContainer>
      </Page>
    </>
  );
};
