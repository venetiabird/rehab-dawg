import React from 'react';
// import {useSelector} from 'react-redux';
import { RouteProps } from 'react-router-dom';
// import { RehabCard } from './RehabCard';
// import {State} from '../../utils/types';
import { Page } from '../../components/Page';

type Props = RouteProps

export const Rehab: React.FC<Props> = () => {
  // const {
  //   workouts: {allWorkIds, byId},
  // } = useSelector((state: State) => state);

  // const mappedRehab = allWorkIds.map(id => byId(id));
  // const rehab = mappedRehab
  //   .filter(w => w.id === rehabId)
  //   .pop();

  return (
    <Page heading={'Rehab Sessions'}>
      <h2>Start a Session</h2>
      {/* <RehabCard key={rehab.id} workout={rehab} /> */}
    </Page>
  )
}