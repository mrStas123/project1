import React from 'react'
import Section from '../../Section/Section'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data'

const Products = () => {
    return (
        <>
            <Section {...homeObjOne} />
            <Section {...homeObjTwo} />
        </>
    )
}

export default Products
