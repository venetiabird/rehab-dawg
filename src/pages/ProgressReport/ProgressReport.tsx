import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { Page } from '../../components/Page';
import { DawgWalks } from '../../components/DawgWalks';
import { Pagination } from '../../components/Pagination';
import { ProgressNotification } from '../../components/ProgressNotification';
import { IWalk } from '../../utils/types';
import { LogoWrapper, Logo } from '../../components/SharedStyles';
import { red } from '../../utils/constants';
import { calculateWeeklyActivityTime } from '../../utils/timeCalculation';

const ReportContainer = styled.div`
  padding: 1
  border: 3px solid ${red};
  height: 350px;
  width: 75%;
  alignment-baseline: baseline
`;

interface IProps {
  walkHistory: IWalk[]
}
export const ProgressReport: React.FC<IProps> = ({ walkHistory }) => {
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [walksPerPage, setWalksPerPage] = useState(5);

  // Get current walks
  const indexOfLastWalk = currentPage * walksPerPage;
  const indexOfFirstWalk = indexOfLastWalk - walksPerPage;
  const currentWalks = walkHistory.slice(indexOfFirstWalk, indexOfLastWalk);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const totalActivityTime = calculateWeeklyActivityTime(walkHistory) * 1000;
  return (
    <>
      <Page heading={''}>
        <LogoWrapper>
          <Logo>
            Progress Report <br />
          </Logo>
        </LogoWrapper>
        <ReportContainer>
          <ProgressNotification totalActivityTime={totalActivityTime}/>
          <DawgWalks walks={currentWalks} loading={loading}/>
          <Pagination
            walksPerPage={walksPerPage}
            totalWalks={walkHistory.length}
            paginate={paginate} />
        </ReportContainer>
      </Page>
    </>
  );
};
