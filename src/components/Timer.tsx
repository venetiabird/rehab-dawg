import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import {ResumeWalk} from '../assets/svg/Resume';
import {PauseWalk} from '../assets/svg/Pause';
import {timeLeftInMilliseconds, formatTimeLeft} from '../utils/timeFormatter';
import { darkgreen, orange } from '../utils/constants';

const CountDownDawg = styled.div`
  height: 10px;
  font-size: 28px;
  font: courier;
  font-weight: 800; 
  text-align: center;
  display: flex;
`;
const PauseResumeContainer = styled.div`
  display: flex;
`;
interface Props {
  walkTime: number;
}

export const Timer: React.FC<Props> = ({ walkTime = 0 }) => {
  const walkTimeMilli = walkTime * 60 * 1000;
  const [timeLeft, setTimeLeft] = useState(timeLeftInMilliseconds(walkTimeMilli));
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(() => timeLeftInMilliseconds(timeLeft));
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <>
      <CountDownDawg>
        {formatTimeLeft(timeLeft)}
      </CountDownDawg>
      <PauseResumeContainer>
        <PauseWalk fill={orange} handleClick={() => alert('Pausing!')}/>
        <ResumeWalk fill={darkgreen} handleClick={() => alert('Resuming')}/>
      </PauseResumeContainer>
    </>
  );
};

export default Timer;