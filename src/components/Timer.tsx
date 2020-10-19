import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


import useSound from 'use-sound';
// import woofSfx from '../assets/sounds/woof.mp3';
import {ResumeWalk} from '../assets/svg/Resume';
import {PauseWalk} from '../assets/svg/Pause';
import {formatTimeLeft} from '../utils/timeFormatter';
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
interface IProps {
  startTime: number;
  walkTime: number;
}



export const Timer: React.FC<IProps> = ({ walkTime, startTime }) => {
  const walkTimeSeconds = walkTime * 60;
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isOn, setIsOn] = useState(true);

  const pauseComponent = () => {
    return <PauseWalk fill={orange} handleClick={() => setIsOn(false)}/>
  }
  const playComponent = () => {
    return <ResumeWalk fill={darkgreen} handleClick={() => setIsOn(true)}/>
  }
  
  useEffect(() => {
    const timer = setTimeout(() => {
      const now = Date.now();
      setTimeElapsed(() => Math.round((now - startTime)/1000));
    }, 1000);
    return () => clearTimeout(timer);
  });
  // const woof = new Audio('../assets/sounds/woof.mp3')
  // woof.load()
  // woof.play()
  // const [play] = useSound('../assets/sounds/woof.mp3', { volume: 0.99 });
  return (
    <>
      <CountDownDawg>
        {/* {play()} */}
        {formatTimeLeft(walkTimeSeconds - timeElapsed)}
        {/* {walkTimeSeconds - timeElapsed === 0? play() : formatTimeLeft(walkTimeSeconds - timeElapsed) } */}
      </CountDownDawg>
      <PauseResumeContainer>
      {isOn ? pauseComponent() : playComponent()}
      </PauseResumeContainer>
    </>
  );
};

export default Timer;