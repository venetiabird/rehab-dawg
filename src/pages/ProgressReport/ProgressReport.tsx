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
        <ReportItemText><StrongSpan>wWalk drade: </StrongSpan>{walkName}</ReportItemText>
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
            <ReportContainer>
              <WalkContainer>
                {history.length ? walkItems : noWalks}
              </WalkContainer>
            </ReportContainer>
          </Logo>
        </LogoWrapper>
      </Page>
    </>
  );
};
