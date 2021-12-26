import styled from "@emotion/styled"
import React from "react"
import Button from 'react-bootstrap/Button';
import { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel"


const voyagesData = [
    { id: '1', vile_depart: 'Baffoussam', vile_arrive: 'Bamenda', Heure_depart: '2h', duree: '2h', date_depart: '24 juin 2021', Nom_Agence: 'avenir', image: 'reserver.png', type_voyage: 'vip', prix: '4000 Fr' },
    { id: '2', vile_depart: 'Yaounde', vile_arrive: 'Douala', Heure_depart: '20h', duree: '4h', date_depart: '25 juin 2021', Nom_Agence: 'general', image: 'reserver.png', type_voyage: 'vip', prix: '4000 Fr' },
    { id: '3', vile_depart: 'Douala', vile_arrive: 'Mbouda', Heure_depart: '6h', duree: '4h', date_depart: '25 juin 2021', Nom_Agence: 'global', image: 'reserver.png', type_voyage: 'vip', prix: '4000 Fr' },
    { id: '4', vile_depart: 'Limbe', vile_arrive: 'Maroua', Heure_depart: '4h', duree: '4h', date_depart: '25 juin 2021', Nom_Agence: 'global', image: 'reserver.png', type_voyage: 'vip', prix: '4000 Fr' },
    { id: '5', vile_depart: 'Kreibi', vile_arrive: 'Adamaoua', Heure_depart: '19h', duree: '4h', date_depart: '25 juin 2021', Nom_Agence: 'global', image: 'reserver.png', type_voyage: 'vip', prix: '4000 Fr' },
    { id: '6', vile_depart: 'Dschang', vile_arrive: 'Yaounde', Heure_depart: '22h', duree: '4h', date_depart: '25 juin 2021', Nom_Agence: 'global', image: 'reserver.png', type_voyage: 'vip', prix: '4000 Fr' },
    { id: '7', vile_depart: 'Edea', vile_arrive: 'Kribi', Heure_depart: '5h', duree: '4h', date_depart: '25 juin 2021', Nom_Agence: 'global', image: 'reserver.png', type_voyage: 'vip', prix: '4000 Fr' },
    { id: '8', vile_depart: 'Bertoua', vile_arrive: 'Yaounde', Heure_depart: '1h', duree: '4h', date_depart: '25 juin 2021', Nom_Agence: 'global', image: 'reserver.png', type_voyage: 'vip', prix: '4000 Fr' }
]


const Un_voyage = ({image,type_voyage, prix, ville_depart, ville_arrive, duree, Heure_depart, date_depart, Nom_Agence }) => {
    return (
        <Div_css>
            <div className="cadre">
                <div className="photo">
                    <img src={'images/'+image} className="image" />
                </div>
                <div className="droite">
                    <div className="deux">
                        <div className="titre center">
                            <br />Depart :   {ville_depart}
                            <br />date depart :   {date_depart}
                            <br />duree :   {duree}
                            <br />type :
                            <br />prix :
                            <br />
                        </div>
                        <div className="reponse center">
                            <br /> Arrivée : {ville_arrive}
                            <br />heure :   {Heure_depart}
                            <br />agence :  {Nom_Agence}
                            <br />{type_voyage}
                            <br />{prix}
                            <br />
                        </div>
                    </div>

                    <div className="bouton">
                        <Button variant="primary btn" >
                            Faire une reservation
                        </Button>
                    </div>

                </div>
            </div>
        </Div_css>
    )
}

const Div_Voyages = () => {

    const [vdepart, setvdepart] = useState("")
    const HandleDepart = (e) => {
        let value_vdepart = e.target.value
        setvdepart(value_vdepart)
    }

    const [vArrive, setArrive] = useState("")
    const HandleArrive = (e) => {
        let value_vArrive = e.target.value
        setArrive(value_vArrive)
    }

    const [Ddepart, setDdepart] = useState("")
    const HandledateDepart = (e) => {
        let value_vArrive = e.target.value
        setDdepart(value_vArrive)
    }

    const [Agence, setAgence] = useState("")
    const HandleAgence = (e) => {
        let value_vArrive = e.target.value
        setAgence(value_vArrive)
    }

    console.log(vArrive)
    return (
        <>
            <Div_f>
                <div className="div">
                    <Row className="g-2">
                        <Col md>
                            <FloatingLabel controlId="floatingInputGrid" label="Ville de depart">
                                <Form.Control type="text" placeholder="Ville de depart" onChange={HandleDepart} />
                            </FloatingLabel>
                        </Col>
                        <Col md>
                            <FloatingLabel controlId="floatingSelectGrid" label="Ville d'arrivée">
                                <Form.Control type="text" placeholder="Ville d'arrivée" onChange={HandleArrive} />
                            </FloatingLabel>
                        </Col>
                        <Col md>
                            <FloatingLabel controlId="floatingSelectGrid" label="Nom de l'Agence">
                                <Form.Control type="text" placeholder="Nom de l'Agence" onChange={HandleAgence} />
                            </FloatingLabel>
                        </Col>
                        <Col md>
                            <FloatingLabel controlId="floatingSelectGrid" label="Date de depart">
                                <Form.Control type="text" placeholder="Date de depart" onChange={HandledateDepart} />
                            </FloatingLabel>
                        </Col>
                    </Row>
                </div>
            </Div_f>
            {voyagesData.filter((task) => {
                return task.vile_depart.toLocaleLowerCase().includes(vdepart) && task.vile_arrive.toLocaleLowerCase().includes(vArrive) && task.date_depart.toLocaleLowerCase().includes(Ddepart) && task.Nom_Agence.toLocaleLowerCase().includes(Agence)
            }).map((task) => <Un_voyage task={task} key={task.id} type_voyage={task.type_voyage} image={task.image} prix={task.prix} Nom_Agence={task.Nom_Agence} date_depart={task.date_depart} Heure_depart={task.Heure_depart} ville_depart={task.vile_depart} ville_arrive={task.vile_arrive} duree={task.duree} />)}
        </>
    )
}

export default Div_Voyages















const Div_f = styled.div`
    .div{
        margin-left: 5%;
        margin-right: 5%;
    }
`

const Div_css = styled.div`

    img{
        height: 300px;
        width: 90%;
    }
    .cadre{
        box-shadow: -1px 1px 5px 1px rgba(0,0,0,0.7), -1px 2px 20px rgba(255,255,255,0.6) inset;
        margin-top: 15px;
        margin-left: 2%;
        margin-right: 2%;
        border-radius: 10px;
        display: flex;
        font-weight:bold;
        animation: apparit 0.8s ease-out;
        
    }
    .cadre:hover{
        transform: scale(1.02);
        transition: 1s;
    }
    .photo{
        width: 40%;
        margin-left: 8px;
    }
    .droite{
        width: 60%;
        display: fex;
        padding-top: 10px;
        font-family:  'Arial Narrow', Arial, sans-serif;
    }
    .deux{
        display: flex;
        width: 70%;
    }
    .titre{
        width: 50%;
    }
    .reponse{
        width: 50%;
    }
    .bouton{
        width: 47%;
    }
    .btn{
        box-shadow:0 0 0 0 #6c63ff;
        animation: pulse 1.7s infinite;
        margin-left: 10%;
        margin-top: 50%;
        height: 50px;
    }
   .center{
        
        text-transform: uppercase;
        font-size: 24px;
    }
    @media (max-width: 768px){
        .photo{
            width: 0px;
        }
        .droite{
            width: 100%;
            padding-left: 5%;
            display: block;
            height: auto;
        }
        .span{
            font-size: 19px;
        }
        .deux{
            width: 100%;
            height: auto;
        }
        .bouton{
            width: 79%;
            margin-top: 0%;
            margin-bottom: 2%;
            padding-top: 0%;
        }
        .btn{
            margin-top: 10%;
            height: 50px;
            margin-left: 38%;
        }
    }
    .green{
        color: green;
    }
    .red{
        color: red;
    }
    .yellow{
        color: yellow;
    }

`