import React from 'react';
import styled from 'styled-components';

import { Page } from '../components/Page';
import { ButtonBaseWithLink, LogoWrapper, Logo, DawgContainer } from '../components/SharedStyles';
import { ColouredPaw } from '../assets/svg/ColouredShapes';
import { green, red, blue, gutterWidth } from '../utils/constants';
import { RehabDawg } from '../assets/svg/Dawg';
import Notification from '../components/Notification';
import { GradeMap } from '../utils/constants';


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

const ActivityContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
`

interface IProps {
  setWalkTimeStamps: (walkTimeStamp: React.Dispatch<number[]> | number[]) => void;
  walkTimeStamps: number[];
};

export const HomePage: React.FC<IProps> = ({ setWalkTimeStamps, walkTimeStamps }) => {
  const handleStartButtonClick = () => setWalkTimeStamps([Date.now()]);
  return (
    <>
      <Page heading={''}>
        <LogoWrapper>
          <Logo>
            Rehab Dawg
            <DawgContainer>
              <RehabDawg fill={green}/>
              <RehabDawg fill={blue}/>
              <RehabDawg fill={red}/>
            </DawgContainer>
          </Logo>
        </LogoWrapper>
        <RehabActivityContainer>
          <HeadingContainer>
            Walks
          </HeadingContainer>
          <ActivityContainer>
            <StartButton to="/walks/green" onClick={handleStartButtonClick}>
              <ColouredPaw fill={green} />
                {GradeMap['green']} mins
            </StartButton>
            <StartButton to="/walks/blue" onClick={handleStartButtonClick}>
              <ColouredPaw fill={blue} />
              {GradeMap['blue']} mins
            </StartButton>
            <StartButton to="/walks/red" onClick={handleStartButtonClick}>
              <ColouredPaw fill={red}/>
              {GradeMap['red']} mins
            </StartButton>
          </ActivityContainer>
          {/* <HeadingContainer>
            Cavaletti
          </HeadingContainer> */}
          {/* <ActivityContainer>
          <StartButton to="/cavaletti/green" onClick={handleStartButtonClick}>
              <ColouredSquare fill={red}/>
              15 mins
            </StartButton>
          </ActivityContainer> */}
        </RehabActivityContainer>
        <Notification walkTimeStamps={walkTimeStamps}/>
      </Page>
    </>
  );
};