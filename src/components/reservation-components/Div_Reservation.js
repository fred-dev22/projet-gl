import React from "react";
import styled from '@emotion/styled'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from "react";
import { Un_voyage } from "../voyages-components/Div_Voyages";
import { useParams } from "react-router";
import { voyagesData } from "../voyages-components/Div_Voyages";
import axios from 'axios';


export const Div_Reservation = (props) => {
    const [validated, setValidated] = useState(false);
    const id = useParams().id
    let villeDepart
    let villeArrive
    let Date
    let HeureDepart
    let Prix
    let Agences

    let a = voyagesData.map(
        item => {
            if (item.id === id) {
                villeDepart = item.vile_depart
                villeArrive = item.vile_arrive
                Date = item.date_depart
                HeureDepart = item.Heure_depart
                Prix = item.prix
                Agences = item.Nom_Agence
            }
        }
    )
    const [ID, setID] = useState('');
    const [Nom, setNom] = useState('');
    const [Prenom, setPrenom] = useState('');
    const [NumTelephone, setNumTelephone] = useState('');
    const [NumTelephoneDeDepot, setNumTelephoneDeDepot] = useState('');
    const [NumCNI, setNumCNI] = useState('');
    const [VilleDeDepart, setVilleDeDepart] = useState(villeDepart);
    const [VilleArriver, setVilleArriver] = useState(villeArrive);
    const [DateDepart, setDateDepart] = useState(Date);
    const [HeureDeDepart, setHeureDeDepart] = useState(HeureDepart);
    const [NombreDePlace, setNombreDePlace] = useState('');
    const [PrixUnitaire, setPrixUnitaire] = useState(Prix);
    const [ListeSiege, setListeSiege] = useState('0,1');
    const [Agence, setAgence] = useState(Agences);

    const handleChangeNom = event => {
        setNom({ name: event.target.value });
    }

    const handleChangePrenom = event => {
        setPrenom({ name: event.target.value });
    }

    const handleChangeNumTelephone = event => {
        setNumTelephone({ name: event.target.value });
    }

    const handleChangeNumTelephoneDeDepot = event => {
        setNumTelephoneDeDepot({ name: event.target.value });
    }

    const handleChangeNumCNI = event => {
        setNumCNI({ name: event.target.value });
    }


    const handleChangeNombreDePlace = event => {
        setNombreDePlace({ name: event.target.value });
    }


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);

        const user = {
            nom: Nom.name,
            prenom: Prenom.name,
            dateReservetion: "2022-01-01T11:58:03.393Z",
            nomAgence: Agence,
            villeDeDepart: VilleDeDepart,
            villeArriver: VilleArriver,
            prixUnitaire: PrixUnitaire,
            nombreDePlace: NombreDePlace.name,
            listNumerosDeSiege: ListeSiege,
            numeroDeTelephone: NumTelephone.name,
            numeroDeTelephonePourDepot: NumTelephoneDeDepot.name,
            numCNI: NumCNI.name,
            DateDeDepart: DateDepart,
            heureDeDepart: HeureDeDepart,
        };
        console.log('je suis là ' + VilleDeDepart);

        console.log(user);
        axios.post(`https://localhost:5001/create_reservation`, {
           
            "nom": Nom.name,
            "prenom": Prenom.name,
            "nomAgence": Agence,
            "dateDeDepart": DateDepart,
            "villeDeDepart": VilleDeDepart,
            "villeArriver": VilleArriver,
            "prixUnitaire": PrixUnitaire,
            "nombreDePlace": NombreDePlace.name,
            "listNumerosDeSiege": ListeSiege,
            "numeroDeTelephone": NumTelephone.name,
            "numeroDeTelephonePourDepot": NumTelephoneDeDepot.name,
            "numCNI": NumCNI.name,
            "heureDeDepart": HeureDeDepart,

           
        })
            .then(res => {
                console.log('je suis là ');
                console.log(res);
                console.log(res.data);
                console.log("formulaire envoyer !!!");
            })
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
                                onChange={handleChangeNom}

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
                                onChange={handleChangePrenom}

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
                                    onChange={handleChangeNumTelephone}
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
                                <Form.Control type="text" placeholder="Numero CNI" required onChange={handleChangeNumCNI} />
                                <Form.Control.Feedback type="invalid">
                                    Veuillez saisir un numero de CNI valide.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom04">
                            <Form.Label>Ville de Depart</Form.Label>
                            <Form.Control type="text" placeholder="Ville de Depart" value={villeDepart} disabled />
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom05">
                            <Form.Label>Ville d'arrive</Form.Label>
                            <Form.Control type="text" placeholder="Ville d'arrive" value={villeArrive} disabled />
                        </Form.Group>
                    </Row>
                    <Row className="mb-4">
                        <Form.Group as={Col} md="4" controlId="validationCustom03">
                            <Form.Label>Date de depart</Form.Label>
                            <Form.Control type="text" placeholder="Date de depart" value={Date} disabled />
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom04">
                            <Form.Label>Heure de Depart</Form.Label>
                            <Form.Control type="text" placeholder="Heure de Depart" value={HeureDepart} disabled />
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom05">
                            <Form.Label>Nombre de paces</Form.Label>
                            <Form.Control type="text" placeholder="Nombre de paces" required onChange={handleChangeNombreDePlace} />
                            <Form.Control.Feedback type="invalid">
                                entrer un nombre de places valide.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-4">
                        <Form.Group as={Col} md="4" controlId="validationCustom03">
                            <Form.Label>Prix</Form.Label>
                            <Form.Control type="text" placeholder="Prix" value={Prix} disabled />
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom04">
                            <Form.Label>Agence</Form.Label>
                            <Form.Control type="text" placeholder="Agence" value={Agences} disabled />
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
                                    onChange={handleChangeNumTelephoneDeDepot}
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