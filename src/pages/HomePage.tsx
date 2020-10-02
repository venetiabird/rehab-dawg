import React, {useState} from 'react';
import styled from 'styled-components';

import {Page} from '../components/Page';
import {ButtonBaseWithLink, LogoWrapper, Logo} from '../components/SharedStyles';
import {ColouredPaw} from '../assets/svg/ColouredShapes';
import { green, red, blue } from '../utils/constants';
import {RehabDawg} from '../assets/svg/Dawg';
import Navigation from '../components/Navigation';
import Notification from '../components/Notification';
import { Walk } from '../utils/types';
import useLocalStorage from '../hooks/useLocalStorage';


const StartButton = styled(ButtonBaseWithLink)`
  background: black;
`;

export const HomePage: React.FC = () => {
  const [ history, setHistory ] = useLocalStorage<Walk[]>('history', []); 
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
        <StartButton to="/walks/green" onClick={() => {
          history.push({ walkName: 'green', startDateTime: Date.now()});
          setHistory(history);
        }}>
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
        <Notification history={history} />
      </Page>
      <Navigation />
    </>
  );
};