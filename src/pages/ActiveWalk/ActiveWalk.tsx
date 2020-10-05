import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import {Page} from '../../components/Page';
import {Timer} from '../../components/Timer';
import {DoneWalk} from '../../assets/svg/Done';
import {RehabDawg} from '../../assets/svg/Dawg';
import {ButtonBaseWithLink, Logo, LogoWrapper} from '../../components/SharedStyles';
import { white } from '../../utils/constants';
import { IWalk } from '../../utils/types';
import useLocalStorage from '../../hooks/useLocalStorage';

const DoneButton = styled(ButtonBaseWithLink)`
  background: black;
  width: 25%;
`;

type WalkName = 'green' | 'blue' | 'red'

const walkMap = {
  'green': 5,
  'blue': 10,
  'red': 15
};

const sessionTime = (walkName: WalkName): number => {
  return walkMap[walkName];
};

export const ActiveWalk: React.FC = () => {
  const [ history, setHistory ] = useLocalStorage<IWalk[]>('history', []); 
  const [ timeLeft, setTimeLeft ] = useLocalStorage<number>('timeLeft', 0); 
  const [ startDateTime, setStartDateTime ] = useLocalStorage<number>('startDateTime', Date.now()); 
  // const [ activeWalk, setActiveWalk ] = useLocalStorage<IActiveWalk | undefined>('activeWalk', undefined); 
  const { walkGrade } = useParams();
  const handleClick = () => {
    let currentWalk: IWalk = {
      walkName: walkGrade,
      startDateTime: startDateTime,
      walkTime: startDateTime - timeLeft,
      finishDateTime: Date.now(),
    }
    history.push(currentWalk)
    // setTimeLeft(0);
    return setHistory(history);
  };
  
  const walkTime = sessionTime(walkGrade);
  // setTimeLeft(walkTime);
  console.log(' ===> walkGrade', walkGrade)
  console.log(' ===> walkTime', walkTime)
  return (
    <>
      <Page>
        <LogoWrapper>
          <Logo>
            Walk Session <br />
            <RehabDawg fill={walkGrade}/>
          </Logo>
        </LogoWrapper>
        <Timer walkTime={walkTime} />
        <DoneButton to="/home" onClick={handleClick}>
          <DoneWalk fill={white} />
          Done
          <DoneWalk fill={white} />
        </DoneButton>
      </Page>
    </>
  );
};