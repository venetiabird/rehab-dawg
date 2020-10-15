import React from 'react';
import styled from 'styled-components';

import { Page } from '../components/Page';
import { ButtonBaseWithLink, LogoWrapper, Logo } from '../components/SharedStyles';
import { ColouredPaw, ColouredSquare } from '../assets/svg/ColouredShapes';
import { green, red, blue, gutterWidth } from '../utils/constants';
import { RehabDawg } from '../assets/svg/Dawg';
import Notification from '../components/Notification';
import { IWalk } from '../utils/types';
// import useLocalStorage from '../hooks/useLocalStorage';


const StartButton = styled(ButtonBaseWithLink)`
  background: black;
  margin: 5px
`;

const RehabActivityContainer = styled.div`
flex-direction: column;
display: flex;
align-items: center;
justify-content: space-around;
padding: 0 ${gutterWidth}px;
`;

const HeadingContainer = styled.h3`
font-family: 'Muli', 'Helvetica Neue', Helvetica, Arial, sans-serif;
font-weight: 600;
align-items: left
font-size: 1.5em;
border-radius: 0;
text-align: left;
border: 0px solid ${blue};
flex-direction: row
`

const WalkContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
`

const CavalettiContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
`

interface IProps {
  setWalkTimeStamps: (walkTimeStamp: React.Dispatch<number[]> | number[]) => void;
  walkTimeStamps: number[];
};

export const HomePage: React.FC<IProps> = ({ setWalkTimeStamps, walkTimeStamps }) => {
  const handleClick = () => setWalkTimeStamps([Date.now()]);
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
        <RehabActivityContainer>
          <HeadingContainer>
            Walks
          </HeadingContainer>
          <WalkContainer>
            <StartButton to="/walks/green" onClick={handleClick}>
              <ColouredPaw fill={green} />
              1 mins
            </StartButton>
            <StartButton to="/walks/blue" onClick={handleClick}>
              <ColouredPaw fill={blue} />
              10 mins
            </StartButton>
            <StartButton to="/walks/red" onClick={handleClick}>
              <ColouredPaw fill={red}/>
              15 mins
            </StartButton>
          </WalkContainer>
          <HeadingContainer>
            Cavaletti
          </HeadingContainer>
          <CavalettiContainer>
          <StartButton to="/cavaletti/green" onClick={handleClick}>
              <ColouredSquare fill={red}/>
              15 mins
            </StartButton>
          </CavalettiContainer>
        </RehabActivityContainer>
        <Notification walkTimeStamps={walkTimeStamps}/>
      </Page>
    </>
  );
};