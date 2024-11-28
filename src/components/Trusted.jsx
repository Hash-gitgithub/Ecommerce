import React from 'react'
import styled from 'styled-components'

function Trusted() {
  return (
    <Wrapper className="brand-section">
        <h3>Trusted By 500+ Companies</h3>
      <div className="container">
        <div className="brand-section-slider">
          <div className="slide-track">
          {/* my 1st img  */}
          <div className="slide">
            <img
              src="images/trusted1.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="images/trusted2.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="images/trusted3.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="images/trusted4.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="images/trusted5.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="images/trusted6.png"
              alt="trusted-brands"
            />
          </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
    .container{
    display:flex;
    align-items: center;
    justify-content: center;
    height:25vh;
    }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  // img {
  //   min-width: 10rem;
  //   height: 10rem;
  // }

 .brand-section-slider {
  margin-top: 3.2rem;
  // overflow: hidden;
  position: relative;
  width: 96%;
}

.brand-section-slider .slide-track {
  // animation: scroll 20s linear infinite;
  display: flex;
  width: calc(250px * 14);
}

.brand-section-slider .slide {
  height: 100px;
  width: 200px;
}

.brand-section-slider .slide img {
  width: 80%;
  height: 100px;
  /* Add hardware acceleration if necessary */
  will-change: transform;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    h3 {
    margin-top: -42px;
    margin-bottom: 11%;
    text-align: center;
    text-transform: capitalize;
    color: white;
    font-size: 2rem;
    font-weight: bold;
}
     .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 23vh;
}
    .brand-section-slider .slide-track {
    display: contents;
    width: 30%;
}
    .brand-section-slider .slide {
    height: 95px;
    width: 173px;
}
    .brand-section-slider .slide img {
    width: 59%;
    height: 82px;
    will-change: transform;
}
    .brand-section-slider {
      margin-top: 5.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted