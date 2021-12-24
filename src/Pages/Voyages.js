import React from 'react'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import Div_Filter from '../components/voyages-components/Div_Filter'
import Div_Voyages from '../components/voyages-components/Div_Voyages'
import styled from '@emotion/styled'

const Voyage = styled.div`
    background-color: #F8F8F8;
    height: auto;
`

export const Voyages = () => {
    return (
        <>
            <Navbar />
            <Voyage>
                <div className='principal'>
                    <Div_Filter />
                    <Div_Voyages />
                </div>
            </Voyage>
            <Footer />
        </>
    )
}