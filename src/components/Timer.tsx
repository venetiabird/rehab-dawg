import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CountDownDawg = styled.div`
  height: 80px;
  font-size: 28px;
  font: courier;
  font-weight: 800; 
  text-align: center;
  display: flex;
`;
interface Props {
  walkTime: number;
}

interface Dictionary<T> {
  [key: string]: T;
}

const timeLeftInMilliseconds = (walkTimeMilliSeconds: number): number => {
  const difference = walkTimeMilliSeconds  - 1000;
  if (difference > 0) {
    return difference;
  }
  return 0;
};

const formatTimeLeft = (difference: number): Dictionary<number> | string => {
  if (difference > 0) {
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);
    return `${pad(minutes)}:${pad(seconds)}`;
  } 
  return 'All done!';
};

const pad = (input: number): string => input.toString().padStart(2, '0');

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
    </>
  );
};

export default Timer;