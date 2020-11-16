import React from 'react';

import { useParams } from 'react-router-dom';
import {Page} from '../../components/Page';
import {Timer} from '../../components/Timer';
import { colors } from '../../utils/constants';
import { ICavaletti, ActivityType } from '../../utils/types';
import {Logo, LogoWrapper, DawgContainer, DoneButton } from '../../components/SharedStyles';
import { DoneActivity } from '../../assets/svg/Done';
import { RehabFigure8Dawg } from '../../assets/svg/Dawg';

interface IProps {
  setCavalettiHistory: (cavaletti: React.Dispatch<ICavaletti[]>) => void
  setActivityTimeStamps: (activityTimeStamp: React.Dispatch<number[]> | number[]) => void;
  activityTimeStamps: number[];
}
export const Caveletti: React.FC<IProps> = ({ setCavalettiHistory, setActivityTimeStamps, activityTimeStamps}) => {
    const { grade } = useParams();
    const handleClickOnDone = (): void => {
      const currentActivity: ICavaletti = {
        cavaletti: grade,
        activityTimeStamps: [...activityTimeStamps, Date.now()]
      }
      setCavalettiHistory((history: ICavaletti[]): ICavaletti[] => [...history, currentActivity]);
    };
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
        <Timer activityType={ActivityType.Cavaletti} activityTime={0} activityTimeStamps={activityTimeStamps} setActivityTimeStamps={setActivityTimeStamps} />
        <DoneButton to="/progress" onClick={handleClickOnDone}>
          <DoneActivity fill={colors.white} />
          Done
        </DoneButton>
      </Page>
    </>
  );
};