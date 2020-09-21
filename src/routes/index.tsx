import React from 'react';
import styled from 'styled-components';
import {useLocation, Route, Switch} from 'react-router-dom';

import { appMaxWidth } from '../utils/constants';
import {LandingSplash} from '../pages/LandingSplash';

const MaxWidthContainer = styled.div`
  max-width: ${appMaxWidth}px;
  margin: 0 auto;
`;

const Routes: React.FC = () => {
  const location = useLocation();

  return (
    <MaxWidthContainer>
      <Switch location={location}>
        <Route path="/" exact component={LandingSplash} />
      </Switch>
    </MaxWidthContainer>
  );
};
export default Routes;