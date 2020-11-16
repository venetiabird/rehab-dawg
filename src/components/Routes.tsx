import React from 'react';
import styled from 'styled-components';
import {useLocation, Route, Switch } from 'react-router-dom'; // read up on this

// import { appMaxWidth } from '../utils/constants';
import { HomePage } from '../pages/HomePage';
import { ActiveWalk } from '../pages/ActiveWalk';
import { Caveletti } from '../pages/Caveletti';
import { ProgressReport } from '../pages/ProgressReport';
import { IActivity } from '../utils/types';
import { useLocalStorage } from '../hooks/useLocalStorage';

const MaxWidthContainer = styled.div`
  margin: 0 auto;
`;


const Routes: React.FC = () => {
  const location = useLocation();
  const [ walkHistory, setWalkHistory ] = useLocalStorage<IActivity[]>('walkHistory', []);
  const [ cavalettiHistory, setCavalettiHistory ] = useLocalStorage<IActivity[]>('cavalettiHistory', []);
  const [ activityTimeStamps, setActivityTimeStamps ] = useLocalStorage<number[]>('activityTimeStamps', []);
  return (
    <MaxWidthContainer>
      <Switch location={location}>
        <Route path="/" exact>
          <HomePage setActivityTimeStamps={setActivityTimeStamps} activityTimeStamps={activityTimeStamps} />
        </Route>
        <Route path="/home" exact render={() => <HomePage setActivityTimeStamps={setActivityTimeStamps} activityTimeStamps={activityTimeStamps} />} />
        <Route path="/walks/:grade/" exact>
          <ActiveWalk setWalkHistory={setWalkHistory} activityTimeStamps={activityTimeStamps} setActivityTimeStamps={setActivityTimeStamps}/>

        </Route>
        {/* Below is a different style of adding a route */}
        <Route path="/cavaletti/:grade/" exact>
          <Caveletti setCavalettiHistory={setCavalettiHistory} activityTimeStamps={activityTimeStamps} setActivityTimeStamps={setActivityTimeStamps} />
        </Route>
        <Route path="/progress" exact>
          <ProgressReport walkHistory={walkHistory} cavalettiHistory={cavalettiHistory}/>
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