import React from 'react';
import styled from 'styled-components';

import { Page } from '../components/Page';
import { ButtonBaseWithLink, LogoWrapper, Logo, DawgContainer } from '../components/SharedStyles';
import { ColouredPaw, ColouredHat } from '../assets/svg/ColouredShapes';
import { colors, gutterWidth } from '../utils/constants';
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
align-items: left;
justify-content: space-around;
border: 0px solid ${colors.red};
margin: 0px 0 20px;
padding: 0px ${gutterWidth}px 40px 0px;
`;

const HeadingContainer = styled.h3`
font-family: 'Muli', 'Helvetica Neue', Helvetica, Arial, sans-serif;
font-weight: 600;
align-items: left
font-size: 1.5em;
border-radius: 0;
text-align: left;
border: 0px solid ${colors.blue};
flex-direction: row
`

const ActivityContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
`;

interface IProps {
  setActivityTimeStamps: (activityTimeStamp: React.Dispatch<number[]> | number[]) => void;
  activityTimeStamps: number[];
};

export const HomePage: React.FC<IProps> = ({ setActivityTimeStamps, activityTimeStamps }) => {
  const handleStartActivityButtonClick = () => setActivityTimeStamps([Date.now()]);
  return (
    <>
      <Page heading={''}>
        <LogoWrapper>
          <Logo>
            Rehab Dawg
            <DawgContainer>
              <RehabDawg fill={colors.green}/>
              <RehabDawg fill={colors.blue}/>
              <RehabDawg fill={colors.red}/>
            </DawgContainer>
          </Logo>
        </LogoWrapper>
        <RehabActivityContainer>
          <HeadingContainer>
            Walks
          </HeadingContainer>
          <ActivityContainer>
            <StartButton to="/walks/green" onClick={handleStartActivityButtonClick}>
              <ColouredPaw fill={colors.green} />
                {GradeMap['green']} mins
            </StartButton>
            <StartButton to="/walks/blue" onClick={handleStartActivityButtonClick}>
              <ColouredPaw fill={colors.blue} />
              {GradeMap['blue']} mins
            </StartButton>
            <StartButton to="/walks/red" onClick={handleStartActivityButtonClick}>
              <ColouredPaw fill={colors.red}/>
              {GradeMap['red']} mins
            </StartButton>
          </ActivityContainer>
          <HeadingContainer>
            Cavaletti
          </HeadingContainer>
          <ActivityContainer>
          <StartButton to="/cavaletti/bronze" onClick={handleStartActivityButtonClick}>
              <ColouredHat fill={colors.bronze}/>
              Rookie
            </StartButton>
            <StartButton to="/cavaletti/silver" onClick={handleStartActivityButtonClick}>
              <ColouredHat fill={colors.silver}/>
              Hot Dawg
            </StartButton>
            <StartButton to="/cavaletti/gold" onClick={handleStartActivityButtonClick}>
              <ColouredHat fill={colors.gold}/>
              Pro Dawg
            </StartButton>
          </ActivityContainer>
        </RehabActivityContainer>
        <Notification activityTimeStamps={activityTimeStamps}/>
      </Page>
    </>
  );
};
