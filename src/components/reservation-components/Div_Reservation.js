import React from "react";
import styled from '@emotion/styled'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from "react";
import { Un_voyage } from "../voyages-components/Div_Voyages";

export const Div_Reservation = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <Style_form>
            <div className="principal">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Nom"

                            />
                            <Form.Control.Feedback type="invalid">
                                Veuillez saisir un nom valide.
                            </Form.Control.Feedback>
                            <Form.Control.Feedback>Correct !</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Prenom</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Prenom"

                            />
                            <Form.Control.Feedback type="invalid">
                                Veuillez saisir un prenon valide.
                            </Form.Control.Feedback>
                            <Form.Control.Feedback>Correct!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                            <Form.Label>Telephone</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">+237</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="Telephone"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Veuillez saisir un numero valide.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom03">
                            <Form.Label>Numero CNI</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">CNI</InputGroup.Text>
                                <Form.Control type="text" placeholder="Numero CNI" required />
                                <Form.Control.Feedback type="invalid">
                                    Veuillez saisir un numero de CNI valide.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom04">
                            <Form.Label>Ville de Depart</Form.Label>
                            <Form.Control type="text" placeholder="Ville de Depart" disabled />
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom05">
                            <Form.Label>Ville d'arrive</Form.Label>
                            <Form.Control type="text" placeholder="Ville d'arrive" disabled />
                        </Form.Group>
                    </Row>
                    <Row className="mb-4">
                        <Form.Group as={Col} md="4" controlId="validationCustom03">
                            <Form.Label>Date de depart</Form.Label>
                            <Form.Control type="Date" placeholder="Date de depart" disabled />
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom04">
                            <Form.Label>Heure de Depart</Form.Label>
                            <Form.Control type="text" placeholder="Heure de Depart" disabled />
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom05">
                            <Form.Label>Nombre de paces</Form.Label>
                            <Form.Control type="text" placeholder="Nombre de paces" required />
                            <Form.Control.Feedback type="invalid">
                                entrer un nombre de places valide.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-4">
                        <Form.Group as={Col} md="4" controlId="validationCustom03">
                            <Form.Label>Prix</Form.Label>
                            <Form.Control type="text" placeholder="Prix" disabled />
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom04">
                            <Form.Label>Agence</Form.Label>
                            <Form.Control type="text" placeholder="Agence" disabled />
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom05">
                            <Form.Label>Nombre de depot</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">+237</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="Nombre de depot"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Veuillez saisir un numero valide.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                        />
                    </Form.Group>
                    <Button type="submit">Payer la reservation</Button>
                </Form>
            </div>
        </Style_form>
    )
}

const Style_form = styled.div` 

    .principal{
        margin-left: 8%;
        margin-right: 8%;
        margin-top: 70px;
        margin-bottom: 70px;
        box-shadow: 0px 0px 20px 1px;
        border-radius: 10px;
        padding: 2%;
    }
`