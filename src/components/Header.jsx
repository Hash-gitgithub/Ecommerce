import React from 'react'
import styled from 'styled-components';
import {NavLink} from "react-router-dom"
import Nav from './Nav';

function Header() {
  return (
    <MainHeader>
        <NavLink to='/'>
          <img src="./images/logo10.png" alt="" />
           {/* <div className='text'>fashion</div> */}
        </NavLink>
        <Nav/>
    </MainHeader>
  )
}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 9rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 9rem;
  }
  img {
    height: 10rem;
  }
    .text{
    display:flex;
    color: white;
    justify-content: center;
    margin-left:100%;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      img{
      margin-left:-37px;
      }
}
`;

export default Header