import React from 'react'
import Section from '../../Section/Section'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data'
import Pricing from '../../Pricing/Pricing'

function Services() {
    return (
        <>
            <Pricing />
            <Section {...homeObjOne} />
            <Section {...homeObjThree} />
        </>
    )
}

export default Services
