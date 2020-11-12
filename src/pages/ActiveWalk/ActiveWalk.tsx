import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import {Page} from '../../components/Page';
import {Timer} from '../../components/Timer';
import { DoneActivity } from '../../assets/svg/Done';
import { RehabDawg } from '../../assets/svg/Dawg';
import { DoneButton, Logo, LogoWrapper, DawgContainer } from '../../components/SharedStyles';
import { colors } from '../../utils/constants';
import { ActivityType, IWalk, WalkName } from '../../utils/types';
import { calculateActivityTime, sessionTime } from '../../utils/timeCalculation';
import { GradeMap } from '../../utils/constants';


interface IProps {
  setWalkHistory: (walk: React.Dispatch<IWalk[]>) => void
  setActivityTimeStamps: (activityTimeStamp: React.Dispatch<number[]> | number[]) => void
  activityTimeStamps: number[]
}

export const ActiveWalk: React.FC<IProps> = ({ setWalkHistory, activityTimeStamps, setActivityTimeStamps }) => {
  const { grade } = useParams();
  const walkTime = sessionTime(grade);
  const handleClickOnDone = (): void => {
    let doneTime = Date.now()
    const activeWalkTime = calculateActivityTime([...activityTimeStamps, doneTime])
    const setWalkTime = walkTime * 60;
    let tempTimeStamps = activityTimeStamps.slice();
    // this is not ideal because we are overriting the history. But maybe thats ok?
    if(activeWalkTime > setWalkTime) {
      tempTimeStamps = [tempTimeStamps[0], new Date(tempTimeStamps[0]).setSeconds(setWalkTime)]
    } else {
      tempTimeStamps = [...tempTimeStamps, doneTime]
    }
    let currentWalk: IWalk = {
      walk: grade,
      activityTimeStamps: tempTimeStamps
    }
    setWalkHistory((history: IWalk[]): IWalk[] => [...history, currentWalk]);
  };
  
  return (
    <>
      <Page heading={''}>
        <LogoWrapper>
          <Logo>
            Walk Session
            <DawgContainer>
              <RehabDawg fill={grade}/>
            </DawgContainer>
          </Logo>
        </LogoWrapper>
        <Timer activityType={ActivityType.Walk} activityTime={walkTime} activityTimeStamps={activityTimeStamps} setActivityTimeStamps={setActivityTimeStamps} />
        <DoneButton to="/progress" onClick={handleClickOnDone}>
          <DoneActivity fill={colors.white} />
            Done
          {/* <DoneActivity fill={white} /> */}
        </DoneButton>
      </Page>
    </>
  );
};