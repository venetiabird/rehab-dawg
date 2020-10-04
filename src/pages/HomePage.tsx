import React, {useState} from 'react';
import styled from 'styled-components';

import {Page} from '../components/Page';
import {ButtonBaseWithLink, LogoWrapper, Logo} from '../components/SharedStyles';
import {ColouredPaw} from '../assets/svg/ColouredShapes';
import { green, red, blue } from '../utils/constants';
import {RehabDawg} from '../assets/svg/Dawg';
import Notification from '../components/Notification';
import { IActiveWalk } from '../utils/types';
// import useLocalStorage from '../hooks/useLocalStorage';


const StartButton = styled(ButtonBaseWithLink)`
  background: black;
`;

interface Props {
  setActiveWalk: (aw: IActiveWalk) => void
}

export const HomePage: React.FC<Props> = ({ setActiveWalk }) => {
  const handleClick = () => setActiveWalk({ walkName: 'green', startDateTime: Date.now()});
  return (
    <>
      <Page heading={''}>
        <LogoWrapper>
          <Logo>
            Rehab Dawg <br />
            <RehabDawg fill={green}/>
            <RehabDawg fill={blue}/>
            <RehabDawg fill={red}/>
          </Logo>
        </LogoWrapper>
        <StartButton to="/walks/green" onClick={handleClick}>
          <ColouredPaw fill={green} />
          5 minutes
        </StartButton>
        <StartButton to="/walks/blue">
          <ColouredPaw fill={blue} />
          10 minutes
        </StartButton>
        <StartButton to="/walks/red">
          <ColouredPaw fill={red}/>
          15 minutes
        </StartButton>
        {/* <Notification history={history} /> */}
      </Page>
    </>
  );
};