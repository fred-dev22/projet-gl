import styled from '@emotion/styled'
import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
            margin: 0px;
        }
    }

`

export const Div_Inscription = () => {
    return (
        <Div_Inscriptions>
            <div className='conteneur'>
                <br /><br /><br /><br /><br />
                <div className='final'>
                    <div className='gauche'>
                        <h1>Sign up</h1>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control placeholder="Your name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control placeholder="6XXXXXXXXX" />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Region</Form.Label>
                                    <Form.Select defaultValue="Ouest">
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
                <br /><br /><br /><br /><br /><br /><br />
            </div>
        </Div_Inscriptions>
    )
}