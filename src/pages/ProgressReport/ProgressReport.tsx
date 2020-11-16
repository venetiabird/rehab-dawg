import React from 'react';
import styled from 'styled-components';

import { Page } from '../../components/Page';
import { DawgResponsiveBar } from '../../components/DawgResponsiveBar';
import { ProgressNotification } from '../../components/ProgressNotification';
import { IWalk } from '../../utils/types';
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
  walkHistory: IWalk[]
}
export const ProgressReport: React.FC<IProps> = ({ walkHistory }) => {
  // Get current walks
  const totalActivityTime = calculateWeeklyActivityTime(walkHistory) * 1000;

  return (
    <>
      <Page heading={''}>
        <LogoWrapper>
          <Logo>
            Progress Report <br />
          </Logo>
        </LogoWrapper>
        <ReportContainer>
          <ProgressNotification totalActivityTime={totalActivityTime}/>
        <DawgResponsiveBar walkHistory={walkHistory}/>   
        </ReportContainer>
      </Page>
    </>
  );
};
