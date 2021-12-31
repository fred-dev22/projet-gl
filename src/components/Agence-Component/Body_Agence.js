import React from "react";
import styled from '@emotion/styled'
import Modal from 'react-bootstrap/Modal'
import { Button } from "react-bootstrap";


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          General Express Voyage
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Agence de Youndé</h4>
        <img src="/images/general.jpg" width={700} height={300}  />
        <p>
          
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


function Main() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Div_Body>
      <Button variant="primary" onClick={() => setModalShow(true)} className="bouton">
        General Express Voyage
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> 
     <Button variant="primary" onClick={() => setModalShow(true)} className="bouton">
        Touristique Express Voyage 
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      
      <Button variant="primary" onClick={() => setModalShow(true)} className="bouton">
        Finex  Voyage 
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <Button variant="primary" onClick={() => setModalShow(true)}className="bouton">
        Avenir  Voyage 
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

     <Button variant="primary" onClick={() => setModalShow(true)}className="bouton">
        Butsis  Voyage 
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <Button variant="primary" onClick={() => setModalShow(true)}className="bouton">
        Garanti express  Voyage 
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />


    </Div_Body>
    

  );
}


  export default Main


  const Div_Body = styled.div`


.bouton{
  display: inline-block;
  margin : auto;
  margin-left: 3%;
  margin-right: 1%;
  padding-top: 1%;
  padding-left: 1%;
  margin-top : 2%;
 
  
}
`
