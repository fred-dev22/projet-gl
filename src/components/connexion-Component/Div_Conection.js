import styled from '@emotion/styled'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react"
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import axios from 'axios';



const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

export const Div_Conection = (props) => {
   
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
    const handleChangeEmail = event => {
        setEmail({ name: event.target.value });
    };
    const handleChangePassword = event => {
        setPassword({ name: event.target.value });
    };

    const history= useNavigate()
    const Redirection= () =>{  
        history("/compte")
    }
    const handleSubmit = event => {
        event.preventDefault();

         
        axios.post(`https://localhost:5001/connect_client`, { 
            "email": email.name,
            "motDePasse": password.name,

        })
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
                    <div className='droite'>
                        <img src="/images/conection.jpg" />
                    </div>
                    <div className='gauche'>
                        <h1>Se connecter</h1>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Addresse Email / numero de telephone </Form.Label>
                                <Form.Control type="email" placeholder="adresse mail ou numero  "  onChange={handleChangeEmail} />
                                <Form.Text className="text-muted">
                                    Ne communiquez jamais votre adress mail à quelqu'un.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Mot de passe</Form.Label>
                                <Form.Control type="password" placeholder="Mot de passe"   onChange={handleChangePassword} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={Redirection} >
                                Se Connecter
                            </Button> 
                            <div className='sincr'><span className='si'>vous n'avez pas de compte?</span> <NavLink to="/inscription" className="link">S'inscrire</NavLink></div>
                        </Form>

                    </div>
                </div>
                <br />
            </div>
        </Div_Inscriptions>
    )
}



















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
.link{
    text-decoration: none;
    padding-top: 10px;
    padding-left: 10px;
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
.sincr{
    display: flex;
}
.si{
    padding-top: 9px;
}
@media (max-width: 768px){
.final{
    margin-left: 2%;
    margin-right: 2%;

}
.gauche{
    width: 100%;
    
}
.droite{
    width: 0px;
    
}
}

`