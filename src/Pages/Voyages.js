import React from 'react';
import Footer from '../components/Footer';
import { Navbar } from '../components/Navbar';
import Div_Voyages from '../components/voyages-components/Div_Voyages';
import Div_Filter from  '../components/voyages-components/Div_Filter';

const Voyages=()=> {
    return (
        <div>
            <Navbar/>
            <Div_Voyages />
            <Footer/>
        </div>
    );
}

export default Voyages;
