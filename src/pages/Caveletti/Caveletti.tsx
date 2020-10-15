import React from 'react';

import {Page} from '../../components/Page';
import {Logo, LogoWrapper} from '../../components/SharedStyles';

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