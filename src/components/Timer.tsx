import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


import useSound from 'use-sound';
// import woofSfx from '../assets/sounds/woof.mp3';
import {ResumeWalk} from '../assets/svg/Resume';
import {PauseWalk} from '../assets/svg/Pause';
import {formatTimeLeft, formatTimeLeftCountUp } from '../utils/timeFormatter';
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
  walkTimeStamps: number[];
  walkTime: number;
  setWalkTimeStamps: (walkTimeStamp: React.Dispatch<number[]> | number[]) => void;
}


const getStartTime = (times: number[]): number => times[times.length - 1];

export const Timer: React.FC<IProps> = ({ walkTime, startTime, walkTimeStamps, setWalkTimeStamps }) => {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [seconds, setSeconds] = useState(0);
  console.log('elapsed ==>', timeElapsed)
  console.log('walkTime ==>', walkTime)
  let walkTimeSeconds = walkTime * 60;
  const [isActive, setIsActive] = useState(true);
  let start = walkTimeStamps[0];// getStartTime(walkTimeStamps);
  
  
  const toggle = (): void => {
    // const x = timeElapsed;
    // I think the start time can be replaced with the first item in walkTimeStamps array, and the its the even index
    // console.log('isActive1 ==>', isActive)
    setIsActive(!isActive);
    // console.log('isActive2 ==>', isActive)
    // walkTimeSeconds = walkTimeSeconds;
    setWalkTimeStamps((x: number[]) => {
      const result: number[] = [...x, Date.now()];
      // start = getStartTime(walkTimeStamps);
      return result;
      })
  }

  const pauseComponent = () => {
    return <PauseWalk fill={orange} handleClick={toggle} />;
  }
  
  const playComponent = () => {
    return <ResumeWalk fill={darkgreen} handleClick={toggle} />;
  }
  
  useEffect(() => {
    // let timer = 0;
    let interval = 0;
    // let pausedTime: number | null = null;
    if(isActive) {
      console.log('isActive3 ==>', isActive)
      // timer = setTimeout(() => {
      //   const now = pausedTime || Date.now();
      //   setTimeElapsed(() => Math.round((now - start)/1000));
      // }, 1000);
      interval = setInterval(() => {
        const now = Date.now();
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0){
      console.log('isActive4 ==>', isActive)
      // clearTimeout(timer);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);
  // const woof = new Audio('../assets/sounds/woof.mp3')
  // woof.load()
  // woof.play()
  // const [play] = useSound('../assets/sounds/woof.mp3', { volume: 0.99 });
  return (
    <>
      <CountDownDawg>
        {formatTimeLeft(walkTimeSeconds - seconds)}
        {/* {formatTimeLeftCountUp(seconds, walkTimeSeconds)} */}
      </CountDownDawg>
      <PauseResumeContainer>
        {isActive ? pauseComponent() : playComponent()}
      </PauseResumeContainer>
    </>
  );
};

export default Timer;