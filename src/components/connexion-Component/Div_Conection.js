import styled from '@emotion/styled'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react"



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
height: 500px;
width: 50%;
padding: 75px 10px;
}
.droite{
height: 500px;
width: 50%;
padding-top:70px;
padding-left: 70px;
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

const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

export const Div_Conection = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailErr, setEmailErr] = useState(false);
    const [pwdError, setPwdError] = useState(false);
    const validate = () => {
        if (!validEmail.test(email)) {
            setEmailErr(true);
        }
        if (!validPassword.test(password)) {
            setPwdError(true);
        }
    };


    return (
        <Div_Inscriptions>
            <div className='conteneur'>
                <br /><br /><br /><br /><br />
                <div className='final'>
                    <div className='droite'>
                        <img src="/images/conection.jpg" />
                    </div>
                    <div className='gauche'>
                        <h1>Se connecter</h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Addresse Email / numero de telephone </Form.Label>
                                <Form.Control type="email" placeholder="adresse mail ou numero  " value={email} onChange={(e) => setEmail(e.target.value)} />
                                <Form.Text className="text-muted">
                                    Ne communiquez jamais votre adress mail à quelqu'un.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Mot de passe</Form.Label>
                                <Form.Control type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={validate} >
                                Se Connecter
                            </Button> 
                            
                            
                        </Form>

                    </div>
                </div>
                <br /><br /><br /><br /><br /><br /><br />
            </div>
        </Div_Inscriptions>
    )
}