import React from 'react';
import Footer from '../components/Footer';
import { Navbar } from '../components/Navbar';
import styled from "@emotion/styled";

const style1=styled.div`
        img{
            height: 50px;
            width: 10%;
        }

        .texte{
                text-align: center;
        }

`


const Apropos=()=> {
    return (
        <div>
            <Navbar/>
            <style1>
                    <img src="/images/voiture1.jpg" alt="logo" className="img" />
                    <p id="texte">
                        Guide Travel est une plate-fome creer en 2021 par les etudians de l'université<br/>
                        de Dschang. Cette plate-forme voir le jour dans l'optique d'aider toute personne desirant voyager<br/>
                        quelque soit sa destination au Cameroun. Cette possibilité de rendre les voyages faciles se fait a travers<br/>
                        l'achat  ou  la reservation de billet via cette plate-forme.src="/images/voiture1.jpg"
                    </p>
            </style1>
            
            <Footer/>
        </div>
    );
}

export default Apropos;