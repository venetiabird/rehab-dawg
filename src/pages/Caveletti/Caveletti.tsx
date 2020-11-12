import React from 'react';
import styled from 'styled-components';

import { useParams } from 'react-router-dom';
import {Page} from '../../components/Page';
import {Timer} from '../../components/Timer';
import { colors } from '../../utils/constants';
import { ICavaletti } from '../../utils/types';
import {Logo, LogoWrapper, DawgContainer, DoneButton } from '../../components/SharedStyles';
import { DoneActivity } from '../../assets/svg/Done';
import { RehabFigure8Dawg } from '../../assets/svg/Dawg';
import { sessionTime } from '../../utils/timeCalculation';

interface IProps {
  setCavalettiHistory: ICavaletti[];
  setCavalettiTimeStamps: (cavalettiTimeStamp: React.Dispatch<number[]> | number[]) => void;
}
export const Caveletti: React.FC<IProps> = ({ setCavalettiHistory, setCavalettiTimeStamps}) => {
    const { grade } = useParams();
    console.log('grade', grade)
    const activityTime = sessionTime(grade);
    const handleClickOnDone = (): void => { console.log('hi')}
  return (
    <>
      <Page heading={''}>
        <LogoWrapper>
          <Logo>
            Caveletti Session
            <DawgContainer>
              <RehabFigure8Dawg fill={grade}/>
            </DawgContainer>
          </Logo>
        </LogoWrapper>
        {/* Free timer <Timer activityTime={activityTime} /> */}
        <DoneButton to="/home" onClick={handleClickOnDone}>
          <DoneActivity fill={colors.white} />
          Done
        </DoneButton>
      </Page>
    </>
  );
};