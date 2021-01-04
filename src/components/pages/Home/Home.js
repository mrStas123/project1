import React from 'react'
import Section from '../../Section/Section'
import Pricing from '../../Pricing/Pricing'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data'

const Home = () => {
  return (
    <>
      <Section {...homeObjThree} />
      <Section {...homeObjOne} />
      <Pricing />
      <Section {...homeObjTwo} />
      <Section {...homeObjFour} />
    </>
  )
}

export default Home
