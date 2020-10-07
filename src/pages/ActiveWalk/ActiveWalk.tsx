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
import { formatTimeLeft } from '../../utils/timeFormatter';
import useLocalStorage from '../../hooks/useLocalStorage';

const DoneButton = styled(ButtonBaseWithLink)`
  background: black;
  width: 25%;
`;

const walkMap = {
  'green': 5,
  'blue': 10,
  'red': 15
};

const sessionTime = (walkName: WalkName): number => {
  return walkMap[walkName];
};

interface IProps {
  setWalkHistory: (walk: React.Dispatch<IWalk[]>) => void
}

export const ActiveWalk: React.FC<IProps> = ({ setWalkHistory }) => {
  // const [ history, setHistory ] = useLocalStorage<IWalk[]>('history', []); 
  const [ timeLeft, setTimeLeft ] = useLocalStorage<number>('timeLeft', 0); 
  const [ startDateTime, setStartDateTime ] = useLocalStorage<number>('startDateTime', Date.now()); 
  // const [ activeWalk, setActiveWalk ] = useLocalStorage<IActiveWalk | undefined>('activeWalk', undefined); 
  const { walkGrade } = useParams();
  const walkTime = sessionTime(walkGrade);
  // setTimeLeft(walkTime); ==> HERE!!
  const handleClick = () => {
    const finishDateTime = Date.now();
    const walkingRehabTime = (timeLeft === 0)? walkTime : finishDateTime - startDateTime
    let currentWalk: IWalk = {
      walkName: walkGrade,
      startDateTime: startDateTime,
      walkTime: walkingRehabTime,
      finishDateTime: finishDateTime
    }
    return setWalkHistory((history: IWalk[]): IWalk[] => [...history, currentWalk]);
  };
  
  console.log(' ===> walkGrade', walkGrade)
  console.log(' ===> walkTime', walkTime)
  
  return (
    <>
      <Page heading={''}>
        <LogoWrapper>
          <Logo>
            Walk Session <br />
            <RehabDawg fill={walkGrade}/>
          </Logo>
        </LogoWrapper>
        <Timer walkTime={walkTime} startTime={startDateTime} />
        <DoneButton to="/home" onClick={handleClick}>
          <DoneWalk fill={white} />
          Done
          <DoneWalk fill={white} />
        </DoneButton>
      </Page>
    </>
  );
};