import React, { useState } from 'react';
import styled from 'styled-components';

import {Page} from '../../components/Page';
import {Timer} from '../../components/Timer';
import {PauseWalk} from '../../assets/svg/Pause';
import {DoneWalk} from '../../assets/svg/Done';
import {ResumeWalk} from '../../assets/svg/Resume';
import {RehabDawg} from '../../assets/svg/Dawg';
import {ButtonBaseWithLink} from '../../components/SharedStyles';
import { green, darkgreen, white, orange } from '../../utils/constants';

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

export const ActiveWalk: React.FC = () => {
  const [ count, setCount ] = useState(0);
  return (
    <>
      <Page heading={'Walk Session'}>
        <RehabDawg fill={green}/>
        <Timer />
        <PauseResumeContainer>
          <PauseWalk fill={orange} />
          <ResumeWalk fill={darkgreen} />
        </PauseResumeContainer>
        {/* <DoneWalk fill={lightblue}>Done</DoneWalk> */}
        <DoneButton to="/home">
          <DoneWalk fill={green}>
          Done!
          </DoneWalk>
        </DoneButton>
        <button onClick={() => setCount(count + 1)}>
          Count
        </button>
        {count}
      </Page>
    </>
  );
};