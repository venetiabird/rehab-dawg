import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import {Page} from '../../components/Page';
import {Timer} from '../../components/Timer';
import {PauseWalk} from '../../assets/svg/Pause';
import {DoneWalk} from '../../assets/svg/Done';
import {ResumeWalk} from '../../assets/svg/Resume';
import {RehabDawg} from '../../assets/svg/Dawg';
import {ButtonBaseWithLink} from '../../components/SharedStyles';
import { white, darkgreen, orange } from '../../utils/constants';

const PauseResumeContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 100px;
`;

const DoneButton = styled(ButtonBaseWithLink)`
  background: black;
  height: 80px;
  width: 120px;
`;

type Walk = 'green' | 'blue' | 'red'

const walkMap = {
  'green': 5,
  'blue': 10,
  'red': 15
};

const sessionTime = (walkName: Walk): number => {
  return walkMap[walkName];
};

export const ActiveWalk: React.FC = () => {
  const [ history, setHistory ] = useState({}); 
  const { walkGrade } = useParams();
  const walkTime = sessionTime(walkGrade);
  return (
    <>
      <Page heading={'Walk Session'}>
        <RehabDawg fill={walkGrade}/>
        <Timer walkTime={walkTime} />
        <PauseResumeContainer>
          <PauseWalk fill={orange} handleClick={() => alert('Pausing!')}/>
          <ResumeWalk fill={darkgreen} handleClick={() => alert('Resuming')}/>
        </PauseResumeContainer>
        {/* <DoneWalk fill={lightblue}>Done</DoneWalk> */}
        <DoneButton to="/home">
          <DoneWalk fill={white}>
          Done!
          </DoneWalk>
        </DoneButton>
        {/* <button onClick={() => setCount(count + 1)}>
          Count
        </button>
        {count} */}
      </Page>
    </>
  );
};