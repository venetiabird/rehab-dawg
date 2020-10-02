import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import {Page} from '../../components/Page';
import {Timer} from '../../components/Timer';
import {DoneWalk} from '../../assets/svg/Done';
import {RehabDawg} from '../../assets/svg/Dawg';
import {ButtonBaseWithLink, Logo, LogoWrapper} from '../../components/SharedStyles';
import { white } from '../../utils/constants';

const DoneButton = styled(ButtonBaseWithLink)`
  background: black;
  width: 25%;
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
      <Page heading={''}>
        <LogoWrapper>
          <Logo>
            Walk Session <br />
            <RehabDawg fill={walkGrade}/>
          </Logo>
        </LogoWrapper>
        <Timer walkTime={walkTime} />
        {/* <DoneWalk fill={'lightblue'}>Done</DoneWalk> */}
        <DoneButton to="/home">
          <DoneWalk fill={white} />
          Done
          <DoneWalk fill={white} />
        </DoneButton>
        {/* <button onClick={() => setCount(count + 1)}>
          Count
        </button>
        {count} */}
      </Page>
    </>
  );
};