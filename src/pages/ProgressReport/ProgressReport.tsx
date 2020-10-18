import React, { useState } from 'react';
import styled from 'styled-components';
// import Pagination from "react-js-pagination";

import { Page } from '../../components/Page';
import { DawgWalks } from '../../components/DawgWalks';
import { Pagination } from '../../components/Pagination';
import { IWalk } from '../../utils/types';
import { LogoWrapper, Logo } from '../../components/SharedStyles';
import { red } from '../../utils/constants';

const ReportContainer = styled.div`
  padding: 1
  border: 3px solid ${red};
  height: 350px;
  // min-height: 100vh;
  width: 75%;
`;

interface IProps {
  walkHistory: IWalk[]
}
export const ProgressReport: React.FC<IProps> = ({ walkHistory }) => {
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [walksPerPage, setWalksPerPage] = useState(8);

  // Get current walks
  const indexOfLastWalk = currentPage * walksPerPage;
  const indexOfFirstWalk = indexOfLastWalk - walksPerPage;
  const currentWalks = walkHistory.slice(indexOfFirstWalk, indexOfLastWalk);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <>
      <Page heading={''}>
        <LogoWrapper>
          <Logo>
            Progress Report <br />
          </Logo>
        </LogoWrapper>
        <ReportContainer>
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
