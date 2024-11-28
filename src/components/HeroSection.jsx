import React from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom"
import { Button } from '../styles/Button';
import { TbShoppingBagHeart } from "react-icons/tb";

function HeroSection({ myData }) {

  return (
    <Wrapper>
      <div className='container main'>
        <div className='grid grid-two-column'>
          <div className="hero-section-data">
            <p className="intro-data">welcome to</p>
            <h1>{myData}</h1>
            <p>
             Whether you're looking for Stylish clothing and accessories for every occasion or High-quality, trendy pieces at affordable prices, we've got you covered.

              Explore our curated collection of men's wear, women's wear, accessories, electronics and many more. We offer Premium Quality,Exclusive Designs, and Sustainable products.
            </p>
            <div className="button">
            <NavLink to='/products'>
              <Button>shop <TbShoppingBagHeart /> now</Button>
            </NavLink>
            </div>
          </div>
          <div className="hero-section-image">
            <figure>
              <img src="images/main.png" alt="" className='img-style' />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 12rem 0;
  .container {
    max-width: 152rem;
    margin: 0 auto;
}

  img {
    min-width: 10rem;
    height: 10rem;
    // background: rgb(131,58,180);
    // background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 65%, rgba(252,176,69,1) 100%);
    position: relative; /* Necessary for absolute positioning */
  }

img::before {
  content: "";
  position: absolute;
  background-color:rgb(131,58,180);
}
  .main{
    margin-top: -120px;
    background: rgb(131,58,180);
    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 65%, rgba(252,176,69,1) 100%);
    padding: 92px; /* Adjust padding as needed */
  }  

  .hero-section-data {
    p {
      margin: 2rem 0;
      color:white;
      font-weight: bold;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    // &::after {
    //   content: "";
    //   width: 60%;
    //   height: 80%;
    //   // background-color: rgba(81, 56, 238, 0.4);
    //   position: absolute;
    //   left: 50%;
    //   top: -4rem;
    //   z-index: -1;
    // }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    // .grid {
    //   gap: 10rem;
    // }
    .button{
      margin-right: -36px;
    }
      .main{
      margin-top:-191px;
      }
 .hero-section-data {
      margin-left: -65px;

    p {
        font-size: 13px;
        margin: 2rem -2px;
        color: white;
        font-weight: bold;
    }

    h1 {
      font-size: 4rem;
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }
    .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
    .img-style {
    width: 126%;
    height: auto;
  }
    // .grid-two-column{
    //   display:flex;
    // }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      // background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;
export default HeroSection