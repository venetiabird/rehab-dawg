import React, { useState } from 'react';
import styled from 'styled-components';

import {ButtonBaseWithLink} from '../components/SharedStyles';
import {ColouredSquare} from '../assets/svg/ColouredDot';
import { gutterWidth, bannerHeight, blue } from '../utils/constants';
import {ThreeBars} from '../assets/svg/ThreeBars';

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
  const [ count, setCount ] = useState(0);
  return (
    <Page>
      <Banner>
      </Banner>
      <LogoWrapper>
        <ThreeBars style={{ margin: '0.9em', transform: 'rotate(deg)' }}/>
        <Logo>
          Billie Dawg Way
        </Logo>
        <ThreeBars style={{ margin: '0.9em', transform: 'rotate(90deg)' }}/>
      </LogoWrapper>
      <p>The Little Dawg is getting back her mobility, her passport back to <strong>FUN</strong></p>
      <StartButton to="/workouts/">
        <ColouredSquare fill={blue} />
        Start a rehab session
      </StartButton>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        Count
      </button>
    </Page>
  );
};