import React from 'react';
import { Guid } from "guid-typescript";

import { IWalk } from '../utils/types';
import { DawgWalkItem } from '../components/DawgWalkItem'; 

interface IProps {
  walks: IWalk[];
  loading: boolean;
}

export const DawgWalks: React.FC<IProps> = ({ walks, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      {walks.map(walk => (
        <DawgWalkItem key={Guid.create().toString()} walk={walk} loading={loading}/>
      ))}
    </>
  )
}

export default DawgWalks;