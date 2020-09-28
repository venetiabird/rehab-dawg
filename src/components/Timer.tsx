import React from 'react';
import styled from 'styled-components';

const CountDownDawg = styled.div`
  height: 60px;
  width: 60px;
  font: courier;
`;
interface Props {
  walkTimer: number;
}

export const Timer: React.FC<Props> = ({ walkTimer = 0 }) => {
  return (
    <>
      <p>This is my timer component</p>
      <CountDownDawg>
        {walkTimer} minutes
      </CountDownDawg>
    </>
  );
};

export default Timer;