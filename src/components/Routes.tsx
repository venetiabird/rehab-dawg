import React from 'react';
import styled from 'styled-components';
import {useLocation, Route, Switch } from 'react-router-dom'; // read up on this

import { appMaxWidth } from '../utils/constants';
import { HomePage } from '../pages/HomePage';
import { ActiveWalk } from '../pages/ActiveWalk';
import { IWalk } from '../utils/types';
import { IActiveWalk } from '../utils/types';
import useLocalStorage from '../hooks/useLocalStorage';

const MaxWidthContainer = styled.div`
  max-width: ${appMaxWidth}px;
  margin: 0 auto;
`;

const Routes: React.FC = () => {
  const location = useLocation();
  const [ history, setHistory ] = useLocalStorage<IWalk[]>('history', []); 
  const [ activeWalk, setaActiveWalk ] = useLocalStorage<IActiveWalk | undefined>('activeWalk', undefined); 
  console.log('==> AW:', activeWalk);
  return (
    <MaxWidthContainer>
      <Switch location={location}>
        <Route path="/" exact>
          <HomePage setActiveWalk={setaActiveWalk} />
        </Route>
        <Route path="/home" exact render={() => <HomePage setActiveWalk={setaActiveWalk} />} />
        <Route path="/walks/:walkGrade/" exact component={ActiveWalk} />
      </Switch>
    </MaxWidthContainer>
  );
};
export default Routes;

// read up on react-router-dom
// read up on local storage
// how to store data 
// where does the state live? with regard to the components