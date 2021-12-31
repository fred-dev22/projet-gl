import React from 'react';
import Footer from '../components/Footer';
import { Navbar } from '../components/Navbar';
import Agence from '../components/Agence-Component/Header_Agences';
import Main from '../components/Agence-Component/Body_Agence';
const Agences=()=> {
    return (
        <div>
             <Navbar/>
             <Agence/>
             <Main/>
             <Footer/>
        </div>
    );
}

export default Agences;