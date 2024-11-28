import React from 'react'
import styled from 'styled-components'
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Trusted from './components/Trusted';

function Home() {

  return (
    <>
    <HeroSection myData = "Digital-Depot"/>
    <Services/>
    <Trusted/>
    </>
  )
}


export default Home