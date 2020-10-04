import React from 'react';
import styled from 'styled-components';
import {useLocation, Route, Switch } from 'react-router-dom'; // read up on this

import { appMaxWidth } from '../utils/constants';
import { HomePage } from '../pages/HomePage';
import { ActiveWalk } from '../pages/ActiveWalk';
import { ProgressReport } from '../pages/ProgressReport';
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
  const [ startDateTime, setStartDateTime ] = useLocalStorage('startDateTime', 0); 
  console.log('==> AW:', startDateTime);
  return (
    <MaxWidthContainer>
      <Switch location={location}>
        <Route path="/" exact>
          <HomePage setStartDateTime={setStartDateTime} />
        </Route>
        <Route path="/home" exact render={() => <HomePage setStartDateTime={setStartDateTime} />} />
        <Route path="/walks/:walkGrade/" exact component={ActiveWalk} />
        <Route path="/progress" exact>
          <ProgressReport />
        </Route>
      </Switch>
    </MaxWidthContainer>
  );
};
export default Routes;

// read up on react-router-dom
// read up on local storage
// how to store data 
// where does the state live? with regard to the components