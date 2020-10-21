import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import {Page} from '../../components/Page';
import {Timer} from '../../components/Timer';
import {DoneWalk} from '../../assets/svg/Done';
import {RehabDawg} from '../../assets/svg/Dawg';
import {ButtonBaseWithLink, Logo, LogoWrapper, DawgContainer } from '../../components/SharedStyles';
import { white } from '../../utils/constants';
import { IWalk, WalkName } from '../../utils/types';
import { gradeMap } from '../../utils/constants';

const DoneButton = styled(ButtonBaseWithLink)`
  background: black;
  width: 25%;
`;

const sessionTime = (walkName: WalkName): number => {
  return gradeMap[walkName];
};

interface IProps {
  setWalkHistory: (walk: React.Dispatch<IWalk[]>) => void
  setWalkTimeStamps: (walkTimeStamp: React.Dispatch<number[]> | number[]) => void
  walkTimeStamps: number[]
}

export const ActiveWalk: React.FC<IProps> = ({ setWalkHistory, walkTimeStamps, setWalkTimeStamps }) => {
  const { grade } = useParams();
  const walkTime = sessionTime(grade);
  const handleClickOnDone = (): void => {
    let currentWalk: IWalk = {
      walkName: grade,
      walkTimeStamps: [...walkTimeStamps, Date.now()]
    }
    setWalkHistory((history: IWalk[]): IWalk[] => [...history, currentWalk]);
  };
  
  return (
    <>
      <Page heading={''}>
        <LogoWrapper>
          <Logo>
            Walk Session
            <DawgContainer>
              <RehabDawg fill={grade}/>
            </DawgContainer>
          </Logo>
        </LogoWrapper>
        <Timer walkTime={walkTime} walkTimeStamps={walkTimeStamps} setWalkTimeStamps={setWalkTimeStamps} />
        <DoneButton to="/progress" onClick={handleClickOnDone}>
          <DoneWalk fill={white} />
            Done
          <DoneWalk fill={white} />
        </DoneButton>
      </Page>
    </>
  );
};