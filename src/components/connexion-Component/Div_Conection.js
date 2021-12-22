import styled from '@emotion/styled'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



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

export const Div_Conection = () => {
    return (
        <Div_Inscriptions>
            <div className='conteneur'>
                <br /><br /><br /><br /><br />
                <div className='final'>
                    <div className='droite'>
                        <img src="/images/conection.jpg" />
                    </div>
                    <div className='gauche'>
                    <h1>Sign in</h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
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