import React from "react";
import { Navbar } from "../components/Navbar";
import { Image } from "../components/compte_components/Image";
import { Div_Body } from "../components/compte_components/Div_Body";
import Footer from '../components/Footer'

class Mon_compte extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Image/>
                <Div_Body/>
                <Footer/>
            </div>
        )
    }
}


export default Mon_compte 