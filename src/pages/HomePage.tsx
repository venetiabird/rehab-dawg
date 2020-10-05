import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

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

interface IProps {
  setStartDateTime: (aw: number) => void
}

export const HomePage: React.FC<IProps> = ({ setStartDateTime }) => {
  // const [ startDateTime, setStartDateTime ] = useLocalStorage<number>('startDateTime', 0); 
  const handleClick = () => setStartDateTime(Date.now());
  return (
    <>
      <Page>
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
        <Notification />
      </Page>
    </>
  );
};