import React, { useState } from 'react';
import styled from 'styled-components';

export const WalksPage: React.FC = () => {
  const [ count, setCount ] = useState(0);
  return (
    <>
    walk session
      <button onClick={() => setCount(count + 1)}>
        Count
      </button>
      {count}
    </>
  );
};