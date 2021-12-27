import React from 'react';
import Footer from '../components/Footer';
import { Navbar } from '../components/Navbar';
import styled from "@emotion/styled";


 const styleTexte={
     textAlign:'center',
     fontSize:'1.5em',
    fontFamily:  'Georgia, serif',
    fontWeight: '900',
    borderRadius: '30px',
    width: '25em',
    height: '21em',
    backgroundColor:'#7e7c82',
    boxShadow: '3px 3px 25px black',
    opacity:'0.9',
    position: 'relative',
    left: '9.5em',
    top:'5.5px',
 }

 const styleImage={
    width: '32em',
    height: '32.5em',
    boxShadow: '3px 3px 20px black',
    opacity:'0.8'
 }

 const stylelement={
    
        display: 'flex',
        flexDirection:'row',
        backgroundImage: ' url("/images/voiture.jpg")'
 }

const Apropos=()=> {
    return (
    
            <>
                <Navbar/>
                <div style={stylelement}>
                    <img src="/images/voiture1.jpg" alt="logo" style={styleImage} />

                    <p style={styleTexte}>
                        Guide Travel est une plate-fome créee en 2021 par les Etudians de l'université
                        de Dschang. Cette plate-forme voir le jour dans l'optique d'aider toute personne desirant voyager
                        quelque soit sa destination au Cameroun. Cette possibilité de rendre les voyages faciles se fait à travers
                        l'achat  ou  la reservation de billet via cette plate-forme. Notre souci primordiale est de rendre votre rêve <br/>
                        de voyager aussi réel et simple en un clique.Guide Travel; vous satisfaire est notre priorité.
                    </p>
            
                </div>
                    
                <Footer/>
            </>
    );
}

export default Apropos;