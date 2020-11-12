import React from 'react';
import styled from 'styled-components';
import {useLocation, Route, Switch } from 'react-router-dom'; // read up on this

// import { appMaxWidth } from '../utils/constants';
import { HomePage } from '../pages/HomePage';
import { ActiveWalk } from '../pages/ActiveWalk';
import { Caveletti } from '../pages/Caveletti';
import { ProgressReport } from '../pages/ProgressReport';
import { IWalk, ICavaletti } from '../utils/types';
import { useLocalStorage } from '../hooks/useLocalStorage';

const MaxWidthContainer = styled.div`
  margin: 0 auto;
`;


const Routes: React.FC = () => {
  const location = useLocation();
  const [ walkHistory, setWalkHistory ] = useLocalStorage<IWalk[]>('walkHistory', []); 
  const [ cavalettiHistory, setCavalettiHistory ] = useLocalStorage<ICavaletti[]>('cavalettiHistory', []); 
  const [ cavalettiTimeStamps, setCavalettiStamps ] = useLocalStorage<[number, number]>('cavalettiTimeStamps', [0, 0]); 
  const [ walkTimeStamps, setWalkTimeStamps ] = useLocalStorage<number[]>('walkTimeStamps', []); 
  return (
    <MaxWidthContainer>
      <Switch location={location}>
        <Route path="/" exact>
          <HomePage setWalkTimeStamps={setWalkTimeStamps} walkTimeStamps={walkTimeStamps} cavalettiTimeStamps={cavalettiTimeStamps} />
        </Route>
        <Route path="/home" exact render={() => <HomePage setWalkTimeStamps={setWalkTimeStamps} walkTimeStamps={walkTimeStamps} cavalettiTimeStamps={cavalettiTimeStamps}/>} />
        <Route path="/walks/:grade/" exact>
          <ActiveWalk setWalkHistory={setWalkHistory} walkTimeStamps={walkTimeStamps} setWalkTimeStamps={setWalkTimeStamps}/>

        </Route>
        {/* Below is a different style of adding a route */}
        <Route path="/cavaletti/:grade/" exact component={Caveletti} setCavalettiStamps={setCavalettiStamps} /> 
        <Route path="/progress" exact>
          <ProgressReport walkHistory={walkHistory} />
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