import React from 'react';

interface IProps {
  walksPerPage: number;
  totalWalks: number;
  paginate: (pageNumber: number) => void;
}

export const Pagination: React.FC<IProps> = ({ walksPerPage, totalWalks, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalWalks / walksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number}>
            <a onClick={() => paginate(number)} href='!#'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;