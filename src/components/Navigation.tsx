import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HomeSmile } from '@styled-icons/boxicons-regular/HomeSmile';

// import { RehabHome } from '../assets/svg/Home';
// import { RehabProgress } from '../assets/svg/Progress';
import { LineChart } from '@styled-icons/boxicons-regular/LineChart';

import { white, appMaxWidth,  navBarHeight} from '../utils/constants';


// const NavigationIcon = styled(HomeSmile)`
//   max-width: 36px
// `;

const NavIconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  border-top: solid 2px ${white};
  padding: 12px 0;
  flex-grow: 0;
  flex-basis: 50px;
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: ${appMaxWidth}px;
  justify-content: space-around;
  // add an extra 0.5 to the height to account for the 0.5px border
  min-height: ${navBarHeight}.5px;
  background-color: white;
  color: black;
  box-sizing: border-box;
  align-items: center;
  padding-bottom: env(safe-area-inset-bottom); // this is for the IPhoneX notch
`;

const NavLink = styled(Link)`
  fill: purple;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  padding: 14px;
`;

// const NavigationIcon = styled.img`
//     max-width: 36px;
// `;


export const Navigation: React.FC = () => {
  return (
    <>
      <NavIconContainer>
        <NavLink to='/'>
          <HomeSmile />
        </NavLink>
        <NavLink to='/progress'>
          <LineChart />
        </NavLink>
      </NavIconContainer>
    </>
  );
};
export default Navigation;

