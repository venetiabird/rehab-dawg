import React, { useState } from 'react';
import styled from 'styled-components';

import {ButtonBaseWithLink} from '../components/SharedStyles';
import {ColouredPaw} from '../assets/svg/ColouredShapes';
import { gutterWidth, bannerHeight, green, red, blue } from '../utils/constants';
import {RehabDawg} from '../assets/svg/Dawg';


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

const Banner = styled.div`
  height: ${bannerHeight}px;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const HomePage: React.FC = () => {
  // const [ count, setCount ] = useState(0);
  return (
    <Page>
      <Banner>
      </Banner>
      <LogoWrapper>
        <Logo>
          Rehab Dawg <br />
          <RehabDawg fill={green}/>
          <RehabDawg fill={blue}/>
          <RehabDawg fill={red}/>
        </Logo>
      </LogoWrapper>
      <StartButton to="/walks/">
        <ColouredPaw fill={green} />
        5 minutes
      </StartButton>
      <StartButton to="/walks/">
        <ColouredPaw fill={blue} />
        10 minutes
      </StartButton>
      <StartButton to="/walks/">
        <ColouredPaw fill={red}/>
        15 minutes
      </StartButton>
      {/* <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        Count
      </button> */}
    </Page>
  );
};