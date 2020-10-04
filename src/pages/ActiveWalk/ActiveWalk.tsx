import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import {Page} from '../../components/Page';
import {Timer} from '../../components/Timer';
import {DoneWalk} from '../../assets/svg/Done';
import {RehabDawg} from '../../assets/svg/Dawg';
import {ButtonBaseWithLink, Logo, LogoWrapper} from '../../components/SharedStyles';
import { white } from '../../utils/constants';
import { IWalk, IActiveWalk } from '../../utils/types';
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
  const [ activeWalk, setActiveWalk ] = useLocalStorage<IActiveWalk | undefined>('activeWalk', undefined); 
  const handleClick = () => {
    activeWalk.finishTime = Date.now()
    activeWalk.walkTime = 5 * 60 * 1000; // fix this with timeleft
    return setHistory(activeWalk);
  };
  
  const { walkGrade } = useParams();
  const walkTime = sessionTime(walkGrade);
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