import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { blue } from '../utils/constants'; 

const paginationButtonStyle = `
  border: none;
  font-size: 12px;
  font-weight: 400;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
  height: 12px;
`;

export const PaginationButton = styled(Link)`
${paginationButtonStyle}
  color: ${blue};
  border: 1px solid ${blue};
  margin: 2px;
`;

interface IProps {
  walksPerPage: number;
  totalWalks: number;
  paginate: (pageNumber: number) => void;
}

export const Pagination: React.FC<IProps> = ({ walksPerPage, totalWalks, paginate }) => {
  const pageNumbers = [];

  const totalPageNumbers = Math.ceil(totalWalks / walksPerPage);
  for (let i = 1; i <= totalPageNumbers; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => ( // how to implement prev / next instead
          <PaginationButton key={number} to="/progress" onClick={() => paginate(number)}>
            {number} 
          </PaginationButton>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;