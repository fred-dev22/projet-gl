import React from "react"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import styled from '@emotion/styled'
import {useState} from 'react'

const Div_f = styled.div`
    .div{
        margin-left: 5%;
        margin-right: 5%;
    }
`

const Div_Filter = () => {
    
    return (
        <Div_f>
            <div className="div">
                <Row className="g-2">
                    <Col md>
                        <FloatingLabel controlId="floatingInputGrid" label="Ville de depart">
                            <Form.Control type="text" placeholder="Ville de depart" />
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel controlId="floatingSelectGrid" label="Ville de darrive">
                            <Form.Control type="text" placeholder="Ville de darrive" />
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel controlId="floatingSelectGrid" label="Nom de l'Agence">
                            <Form.Control type="text" placeholder="Nom de l'Agence" />
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel controlId="floatingSelectGrid" label="Date de depart">
                            <Form.Control type="text" placeholder="Date de depart" />
                        </FloatingLabel>
                    </Col>
                </Row>
            </div>
        </Div_f>
    )
}

export default Div_Filter