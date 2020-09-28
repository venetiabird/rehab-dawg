import React, {useState} from 'react';
import styled from 'styled-components';

import {ButtonBaseWithLink} from '../components/SharedStyles';
import {ColouredPaw} from '../assets/svg/ColouredShapes';
import { gutterWidth, green, red, blue, orange } from '../utils/constants';
import {RehabDawg} from '../assets/svg/Dawg';
import Navigation from '../components/Navigation';
import Notification from '../components/Notification';
import { Walk } from '../utils/types';
// import useLocalStorage from '../hooks/useLocalStorage';


const LogoWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-family: 'Muli', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 900;
  font-size: 2em;
  border-radius: 0;
  padding: 0;
  margin-left: 8px;
  color: black;
`;

const StartButton = styled(ButtonBaseWithLink)`
  background: black;
`;

const Page = styled.div`
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 0 ${gutterWidth}px;
`;

// const Banner = styled.div`
//   height: ${bannerHeight}px;
//   display: flex;
//   align-items: center;
//   width: 100%;
// `;

export const HomePage: React.FC = () => {
  const [ history, setHistory ] = useState({}); 
  // const [ history, setHistory ] = useLocalStorage<Walk[]>('history', []); 
  return (
    <>
      <Page>
        {/* <Banner>
          
        </Banner> */}
        <LogoWrapper>
          <Logo>
            Rehab Dawg <br />
            <RehabDawg fill={green}/>
            <RehabDawg fill={blue}/>
            <RehabDawg fill={red}/>
          </Logo>
        </LogoWrapper>
        <StartButton to="/walks/green" onClick={() => setHistory({ name: 'short', date: Date.now(), startTime: Date.now()})}>
          <ColouredPaw fill={green} />
          5 minutes
        </StartButton>
        <StartButton to="/walks/blue">
          <ColouredPaw fill={blue} />
          10 minutes
        </StartButton>
        <StartButton to="/walks/red">
          <ColouredPaw fill={red}/>
          20 minutes
        </StartButton>
        <Notification history={history} />
      </Page>
      <Navigation />
    </>
  );
};