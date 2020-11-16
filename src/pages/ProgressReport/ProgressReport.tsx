import React from 'react';
import styled from 'styled-components';

import { Page } from '../../components/Page';
import { DawgResponsiveGraphs } from '../../components/DawgResponsiveBar';
import { ProgressNotification } from '../../components/ProgressNotification';
import { IActivity } from '../../utils/types';
import { LogoWrapper, Logo } from '../../components/SharedStyles';
import { colors } from '../../utils/constants';
import { calculateWeeklyActivityTime } from '../../utils/timeCalculation';

const ReportContainer = styled.div`
  padding: 1
  border: 3px solid ${colors.red};
  height: 350px;
  width: 75%;
  alignment-baseline: baseline
`;

interface IProps {
  walkHistory: IActivity[]
  cavalettiHistory: IActivity[]
}
export const ProgressReport: React.FC<IProps> = ({ walkHistory, cavalettiHistory }) => {
  // Get current walks
  const totalWalkActivityTime = calculateWeeklyActivityTime(walkHistory) * 1000;
  const totalCavelettieActivityTime = calculateWeeklyActivityTime(cavalettiHistory) * 1000;

  return (
    <>
      <Page heading={''}>
        <LogoWrapper>
          <Logo>
            Progress Report <br />
          </Logo>
        </LogoWrapper>
        <ReportContainer>
          <ProgressNotification totalWalkActivityTime={totalWalkActivityTime} totalCavelettiActivityTime={totalCavelettieActivityTime}/>
        <DawgResponsiveGraphs walkHistory={walkHistory} cavalettiHistory={cavalettiHistory}/>   
        </ReportContainer>
      </Page>
    </>
  );
};
