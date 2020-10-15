import React from 'react';
import styled from 'styled-components';
import {useLocation, Route, Switch } from 'react-router-dom'; // read up on this

// import { appMaxWidth } from '../utils/constants';
import { HomePage } from '../pages/HomePage';
import { ActiveWalk } from '../pages/ActiveWalk';
import { Caveletti } from '../pages/Caveletti';
import { ProgressReport } from '../pages/ProgressReport';
import { IWalk } from '../utils/types';
import useLocalStorage from '../hooks/useLocalStorage';

const MaxWidthContainer = styled.div`
  margin: 0 auto;
`;

const Routes: React.FC = () => {
  const location = useLocation();
  const [ walkHistory, setWalkHistory ] = useLocalStorage<IWalk[]>('walkHistory', []); 
  const [ walkTimeStamps, setWalkTimeStamps ] = useLocalStorage<number[]>('walkTimeStamps', []); 
  return (
    <MaxWidthContainer>
      <Switch location={location}>
        <Route path="/" exact>
          <HomePage setWalkTimeStamps={setWalkTimeStamps} walkTimeStamps={walkTimeStamps}/>
        </Route>
        <Route path="/home" exact render={() => <HomePage setWalkTimeStamps={setWalkTimeStamps} walkTimeStamps={walkTimeStamps}/>} />
        <Route path="/walks/:grade/" exact>
          <ActiveWalk setWalkHistory={setWalkHistory} walkTimeStamps={walkTimeStamps} setWalkTimeStamps={setWalkTimeStamps}/>

        </Route>
        <Route path="/cavaletti/:grade/" exact component={Caveletti} setWalkHistory={setWalkHistory} />
        <Route path="/progress" exact>
          <ProgressReport walkHistory={walkHistory}/>
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