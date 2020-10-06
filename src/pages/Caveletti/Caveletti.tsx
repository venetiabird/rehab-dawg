import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import {Page} from '../../components/Page';
import {Timer} from '../../components/Timer';
import {DoneWalk} from '../../assets/svg/Done';
import {RehabDawg} from '../../assets/svg/Dawg';
import {ButtonBaseWithLink, Logo, LogoWrapper} from '../../components/SharedStyles';
import { white } from '../../utils/constants';
import { IWalk, WalkName } from '../../utils/types';
import { formatTimeLeft } from '../../utils/timeFormatter';
import useLocalStorage from '../../hooks/useLocalStorage';;

export const Caveletti: React.FC = () => {
  return (
    <>
      <Page heading={''}>
        <LogoWrapper>
          <Logo>
            Caveletti <br />
          </Logo>
        </LogoWrapper>
        {/* <Timer walkTime={walkTime} />
        <DoneButton to="/home" onClick={handleClick}>
          <DoneWalk fill={white} />
          Done
          <DoneWalk fill={white} />
        </DoneButton> */}
      </Page>
    </>
  );
};