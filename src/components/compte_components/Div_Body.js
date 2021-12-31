import React from "react";
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import { NavLink } from "react-router-dom";


export const Div_Body = () => {
        return (
            <div> <p>  Bienvenue dans votre espace perosonnel  </p>
                <Container id="droite ">
                    <Row>
                        <Col lg={4}>
                            <Card style={{ width: '18rem' }} className="mb-3" border="primary" style={{ width: '18rem' }} >
                                <Card.Img variant="top" src="/images/infos.png" />
                                <Card.Body>
                                    <Card.Title>Données Personnelles </Card.Title>
                                    <Card.Text>
                                        <p> Accedez à toutes vos informations personnelles tels que Noms, Prenoms et.c et
                                            les paramètres de écutité de votre compte utilisateur.
                                        </p>
                                    </Card.Text>
                                    <NavLink to='/donnees-personnelles'>
                                    <Button variant="primary">Voir Mes Informations </Button>
                                    </NavLink>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Card style={{ width: '18rem' }} className="mb-3" border="primary" style={{ width: '18rem' }} >
                                <Card.Img variant="top" src="/images/recherche.png" />
                                <Card.Body>
                                    <Card.Title>Devis </Card.Title>
                                    <Card.Text>
                                        <p>  Vous trouverez ici toutes les recherches de voyages que vous avez
                                            enregistrées afin que vous puissiez recommencer le processus
                                            de réservation plus tard.
                                        </p>
                                    </Card.Text>
                                    <Button variant="primary">Voir Devis</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Card style={{ width: '18rem' }} className="mb-3" border="primary" style={{ width: '18rem' }}  >
                                <Card.Img variant="top" src="/images/reservation.png" />
                                <Card.Body>
                                    <Card.Title>Réservations </Card.Title>
                                    <Card.Text>
                                        <p> Accédez à toutes vos Réservations pour pouvoir traiter celles qui sont en attente de paiement,
                                            accéder à nouveau à la documentation, annuler volontairement.
                                        </p>
                                    </Card.Text>
                                    <Button variant="primary">Voir Réservations</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Card style={{ width: '18rem' }} className="mb-3" border="primary" style={{ width: '18rem' }} >
                                <Card.Img variant="top" src="/images/portemonaie.png" />
                                <Card.Body>
                                    <Card.Title>Porte-Monnaie </Card.Title>
                                    <Card.Text>
                                        <p> Vérifiez l'argent qur vous avez dans votre porte-feuille .
                                            Vous pouvez également activer vos cartes cadeaux.
                                        </p>
                                    </Card.Text>
                                    <Button variant="primary">Mon porte Monnaie </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Card style={{ width: '18rem' }} className="mb-3" border="primary" style={{ width: '18rem' }} >
                                <Card.Img variant="top" src="/images/voyages.png" />
                                <Card.Body>
                                    <Card.Title>Bon Voyage </Card.Title>
                                    <Card.Text>
                                        <p> Parcourez votre liste de bons voyage et l'historique des
                                            actions réalisées avec ceux-ci.
                                        </p>
                                    </Card.Text>
                                    <Button variant="primary" >Consulter les Voyages </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <aside id="gauche">

                </aside>
            </div>
        )
}