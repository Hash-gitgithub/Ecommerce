import React, { useContext } from 'react'
import HeroSection from './components/HeroSection'
import { useProductContext } from './context/Productcontext'
import Faq from './components/Faq'

function About() {
  const {myName} = useProductContext()

  return (
    <>
    {myName}
    <HeroSection myData="Digital-Depot"/>
    <Faq/>
    </>
  )
}

export default About