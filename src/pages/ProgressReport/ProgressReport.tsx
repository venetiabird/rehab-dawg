import React from 'react';

import { Page } from '../../components/Page';
import { IWalk } from '../../utils/types';
import { LogoWrapper, Logo } from '../../components/SharedStyles';
import useLocalStorage from '../../hooks/useLocalStorage';


export const ProgressReport: React.FC = () => {
  const [ history, setHistory] = useLocalStorage<IWalk[]>('history', []); 
  console.log('===> history', history);
  return (
    <>
      <Page>
        <LogoWrapper>
          <Logo>
            Progress Report <br />
          </Logo>
        </LogoWrapper>
      </Page>
    </>
  );
};