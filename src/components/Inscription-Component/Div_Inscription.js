import styled from '@emotion/styled'
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';




const Div_Inscriptions = styled.div`
    
    .conteneur{
        background-color: #F8F8F8;
        height: auto;
    }
    .final{
        color: black;
        height: auto;
        display: flex;
        background-color: white;
        margin-left: 17%;
        margin-right: 17%;
        border-radius: 20px;
        box-shadow: 0px 0px 2px black;
    }
    .gauche{
        height: auto;
        width: 60%;
        padding: 75px 15px;
    }
    .droite{
        height: 500px;
        width: 40%;
        padding-top:70px;
        padding-left: 20px;
    }
    img{
        width: 90%;
        height: 80%;
    }
    h1{
        color: #222222;
        font: 46px Poppins;
        font-weight: bold;
    }
    @media (max-width: 768px){
        .final{
            margin: 3px;
    
        }
        .droite{
            width: 0px;
        }
        .gauche{
            width: 100%
        }
    }

`

export const Div_Inscription = () => {
    const [Nom, setNom] = useState('');
    const [Prenom, setPrenom] = useState('');
    const [Email, setEmail] = useState('');
    const [NumeroTelephone, setNumeroTelephone] = useState('');
    const [Id, setId] = useState('');
    const [Password, setPassword] = useState('');
    const [DateInscription, setDateInscription] = useState('');
    const [NumCNI, setNumCNI] = useState('');



    const handleChangeNom = event => {
        setNom({ name: event.target.value });
    }
    const handleChangePrenom = event => {
        setPrenom({ name: event.target.value });
    }
    // const handleChangeAdresse = event => {
    //     set({ name: event.target.value });
    // }
    const handleChangeNumeroTelephone = event => {
        setNumeroTelephone({ name: event.target.value });
    }
    const handleChangeEmail = event => {
        setEmail({ name: event.target.value });
    }
    const handleChangeId = event => {
        setEmail({ name: event.target.value });
    }
    const handleChangePassword = event => {
        setPassword({ name: event.target.value });
    }
    const handleChangeDateInscription = event => {
        setDateInscription({ name: event.target.value });
    }
    const handleChangeNumCNI = event => {
        setNumCNI({ name: event.target.value });
    }

    const handleSubmit = event => {
        event.preventDefault();

        const user = {
            Nom: Nom,
            Prenom: Prenom,
            NumeroTelephone: NumeroTelephone,
            Email: Email,
            Id: Id,
            Password: Password,
            DateInscription: DateInscription,
            NumCNI: NumCNI
        };
        console.log(user);

        axios.post(`https://localhost:5001/create_client`,  user )
            .then(res => {
                console.log(res);
                console.log(res.data);
                console.log("formulaire envoyer !!!");
            })
    }


    return (
        <Div_Inscriptions>
            <div className='conteneur'>
                <br />
                <div className='final'>
                    <div className='gauche'>
                        <h1>S'inscrire'</h1>
                        <Form onSubmit={handleSubmit}>
                            <h1>S'inscrire</h1>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail" >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Entrer l'email" onChange={handleChangeEmail} />
                                </Form.Group>


                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Mot de passe</Form.Label>
                                    <Form.Control type="password" placeholder="Mot de passe" onChange={handleChangePassword} />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Nom</Form.Label>
                                <Form.Control placeholder="votre Nom" onChange={handleChangeNom} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Numero de telephone</Form.Label>
                                <Form.Control placeholder="6XXXXXXXXX" onChange={handleChangeNumeroTelephone} />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Numero CNI</Form.Label>
                                    <Form.Control onChange={handleChangeNumCNI} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Region</Form.Label>
                                    <Form.Select defaultValue="Ouest" >  // avons nous vraiment besoint de cette information l'ors d'une inscription??
                                        <option>Nord</option>
                                        <option>Sud</option>
                                        <option>EST</option>
                                        <option>Ouest</option>
                                        <option>Centre</option>
                                        <option>Littoral</option>
                                        <option>Adamaoua</option>
                                        <option>Nord Ouest</option>
                                        <option>Extreme Nord</option>
                                        <option>Sud Ouest</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Ville</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                S'inscrire
                            </Button>
                        </Form>

                    </div>
                    <div className='droite'>
                        <img src="/images/inscription.jpg" />
                    </div>
                </div>
                <br />
            </div>
        </Div_Inscriptions>
    )
}