import React, { Component } from 'react';
import { Navbar } from '../components/Navbar';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { Card } from 'react-bootstrap';



class A_propos extends Component {
    render() {
        return (
            <>
                <Navbar/>
                    <Card className='mb-3, sticky-sm-top,position-absolute top-0 start-0' style={{color:"black"}}>
                        <Card.Img src="/images/voiture1.jpg"/>
                    </Card>

                    <p className=''>
                        Voyagez partous au Cameroun est une plate-fome creer en 2021 par les etudians de l'université<br/>
                        de Dschang. Cette plate-forme voir le jour dans l'optique d'aider toute personne desirant voyager<br/>
                        quelque soit sa destination au Cameroun. Cette possibilité de rendre les voyages faciles se fait a travers<br/>
                        l'achat  ou  la reservation de billet via cette plate-forme.
                    </p>

            </>
        );
    }
}

export default A_propos;