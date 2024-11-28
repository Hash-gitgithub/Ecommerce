import React, { useState } from "react";
import {Outlet ,NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { MdMenuOpen } from "react-icons/md";
import { CgMenu, CgClose } from "react-icons/cg";
import { useCartContext } from "../context/cart_context";
import { Button } from "../styles/Button";
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState();
  const { total_item } = useCartContext();

  const Nav = styled.nav`
      .navbar-lists {
        display: flex;
        gap: 4.8rem;
        align-items: center;
  
        .navbar-link {
          &:link,
          &:visited {
            display: inline-block;
            text-decoration: none;
            font-size: 1.8rem;
            font-weight: 500;
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors.white};
            // color: ${({ theme }) => theme.colors.black};
            transition: color 0.3s linear;
          }
  
          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
          }
        }
      }
  
      .mobile-navbar-btn {
        display: none;
        background-color: transparent;
        cursor: pointer;
        border: none;
      }
  
      .mobile-nav-icon[name="close-outline"] {
        display: none;
      }
  
      .close-outline {
        display: none;
      }
  
      .cart-trolley--link {
        position: relative;
  
        .cart-trolley {
          position: relative;
          font-size: 3.2rem;
        }
  
        .cart-total--item {
          width: 2.4rem;
          height: 2.4rem;
          position: absolute;
          background-color: #000;
          color: #000;
          border-radius: 50%;
          display: grid;
          place-items: center;
          top: -20%;
          left: 70%;
          background-color: ${({ theme }) => theme.colors.helper};
        }
      }
  
      .user-login--name {
        text-transform: capitalize;
      }
  
      .user-logout,
      .user-login {
        font-size: 1.4rem;
        padding: 0.8rem 1.4rem;
      }
       navbar-list a.active {
           color: rgb(34 197 94);
}
  
      @media (max-width: ${({ theme }) => theme.media.mobile}) {
        .mobile-navbar-btn {
          display: inline-block;
          z-index: 9999;
          border: ${({ theme }) => theme.colors.black};
          color:white;
  
          .mobile-nav-icon {
            font-size: 4.2rem;
            color: ${({ theme }) => theme.colors.white};
          }
        }
  
        .active .mobile-nav-icon {
          display: none;
          font-size: 4.2rem;
          position: absolute;
          top: 30%;
          right: 10%;
          color: ${({ theme }) => theme.colors.white};
          z-index: 9999;
        }
  
        .active .close-outline {
          margin-right: -20px;
          display: inline-block;
          color: black;
        }
  
        .navbar-lists {
        margin-right: 22%;
        width: 56vw;
        height: 72vh;
        position: absolute;
        top: 3px;
        left: 50%;
        background-color: #fff;
  
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
  
          visibility: hidden;
          opacity: 0;
          transform: translateX(100%);
          /* transform-origin: top; */
          transition: all 3s linear;
        }
  
        .active .navbar-lists {
          visibility: visible;
          opacity: 1;
          transform: translateX(0);
          z-index: 999;
          transform-origin: right;
          transition: all 3s linear;
  
          .navbar-link {
            font-size: 2.2rem;
            color:black;
          }
        }
        .cart-trolley--link {
          position: relative;
  
          .cart-trolley {
            position: relative;
            font-size: 5.2rem;
          }
  
          .cart-total--item {
            width: 4.2rem;
            height: 4.2rem;
            font-size: 2rem;
          }
        }
  
        .user-logout,
        .user-login {
          font-size: 2.2rem;
          padding: 0.8rem 1.4rem;
        }
      }
    `;
    useGSAP(()=>{
      gsap.from("li", {
        // color: "black",
        opacity: 0,
        duration: 1,
        // x: 30,
        y: 22,
        delay: 1,
        stagger: 0.5,
    })
    })

  return (
    <Nav>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink to='/' className='navbar-link home-link' style={({ isActive }) => {
                  return isActive ? { color: "rgb(243 68 84)" } : {};
                }}
              onClick={() => setMenuIcon(false)}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about' className='navbar-link' style={({ isActive }) => {
                  return isActive ? { color: "rgb(243 68 84)" } : {};
                }} 
              onClick={() => setMenuIcon(false)}>About</NavLink>
          </li>
          <li>
            <NavLink to='/products' className='navbar-link' style={({ isActive }) => {
                  return isActive ? { color: "rgb(243 68 84)" } : {};
                }}
              onClick={() => setMenuIcon(false)}>Products</NavLink>
          </li>
          <li>
            <NavLink to='/contact' className='navbar-link' style={({ isActive }) => {
                  return isActive ? { color: "rgb(243 68 84)" } : {};
                }}
              onClick={() => setMenuIcon(false)}>Contact</NavLink>
          </li>

          <li>
            <NavLink to='/cart' className='navbar-link cart-trolley--link'
              onClick={() => setMenuIcon(false)}>
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item">{total_item}</span>
            </NavLink>
          </li>
        </ul>

        {/* 2 btn */}
        <div className="mobile-navbar-btn">
          <MdMenuOpen name="menu-outline" className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)} />
          <CgClose name="close-outline" className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)} />
        </div>

      </div>
      <Outlet/>
    </Nav>
  )
};

export default Nav