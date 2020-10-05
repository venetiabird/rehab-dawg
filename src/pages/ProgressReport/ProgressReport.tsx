import React from 'react';

import { Page } from '../../components/Page';
import { IWalk } from '../../utils/types';
import { LogoWrapper, Logo } from '../../components/SharedStyles';
import useLocalStorage from '../../hooks/useLocalStorage';

interface IProps {
  history: IWalk[]
}

export const ProgressReport: React.FC<IProps> = ({ history }) => {
  // const [ history, setHistory] = useLocalStorage<IWalk[]>('history', []); 
  console.log('===> history', history);
  return (
    <>
      <Page>
        <LogoWrapper>
          <Logo>
            Progress Report <br />
            {history}
          </Logo>
        </LogoWrapper>
      </Page>
    </>
  );
};