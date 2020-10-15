import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import {Page} from '../../components/Page';
import {Timer} from '../../components/Timer';
import {DoneWalk} from '../../assets/svg/Done';
import {RehabDawg} from '../../assets/svg/Dawg';
import {ButtonBaseWithLink, Logo, LogoWrapper} from '../../components/SharedStyles';
import { white } from '../../utils/constants';
import { IWalk, WalkName } from '../../utils/types';

const DoneButton = styled(ButtonBaseWithLink)`
  background: black;
  width: 25%;
`;

const gradeMap = {
  'green': 1,
  'blue': 10,
  'red': 15
};

const sessionTime = (walkName: WalkName): number => {
  return gradeMap[walkName];
};

interface IProps {
  setWalkHistory: (walk: React.Dispatch<IWalk[]>) => void
  setWalkTimeStamps: (walkTimeStamp: React.Dispatch<number[]> | number[]) => void
  walkTimeStamps: number[]
}

const calcluateAcualWalkTime = (walkTimeStamps: number[]): number => {
  console.log('====> walkTimeStamps', walkTimeStamps);
  let result = 0;
  for (let i = 0; i < walkTimeStamps.length - 1; i += 2) {
    const timeDiff = (walkTimeStamps[i+1] - walkTimeStamps[i]);
    console.log('====> timeDiff', timeDiff);
    result += timeDiff;
  }

  console.log('====> result', result /1000);
  return Math.round(result / 1000);
}

const getStartTime = (walkTimeStamps: number[]): number => walkTimeStamps[walkTimeStamps.length - 1];

export const ActiveWalk: React.FC<IProps> = ({ setWalkHistory, setWalkTimeStamps, walkTimeStamps }) => {
  // const [ history, setHistory ] = useLocalStorage<IWalk[]>('history', []); 
  // const [ timeLeft, setTimeLeft ] = useLocalStorage<number>('timeLeft', 0); 
  // // const [ startDateTime, setStartDateTime ] = useLocalStorage<number>('startDateTime', Date.now()); 
  // const [ activeWalk, setActiveWalk ] = useLocalStorage<IActiveWalk | undefined>('activeWalk', undefined); 
  const { grade } = useParams();
  const walkTime = sessionTime(grade);
  const startTime = getStartTime(walkTimeStamps);
  console.log('timestamps ==>', walkTimeStamps)
  const handleClickOnDone = (): void => {
    // event.preventDefault(); //pattern to not post "ACTION" on hte button onvlick handler
    const walkingRehabTime = calcluateAcualWalkTime([...walkTimeStamps, Date.now()]);
    let currentWalk: IWalk = {
      walkName: grade,
      walkTimeStamps: walkTimeStamps
    }
    setWalkHistory((history: IWalk[]): IWalk[] => [...history, currentWalk]);
    // setWalkTimeStamps([]);
  };
  
  // console.log(' ===> walkGrade', grade)
  // console.log(' ===> walkTime', walkTime)
  
  return (
    <>
      <Page heading={''}>
        <LogoWrapper>
          <Logo>
            Walk Session <br />
            <RehabDawg fill={grade}/>
          </Logo>
        </LogoWrapper>
        <Timer walkTime={walkTime} startTime={startTime} />
        <DoneButton to="/home" onClick={handleClickOnDone}>
          <DoneWalk fill={white} />
          Done
          <DoneWalk fill={white} />
        </DoneButton>
      </Page>
    </>
  );
};