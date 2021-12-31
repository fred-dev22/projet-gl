import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import styled from '@emotion/styled'




class Agence extends React.Component {
    render () {
        return (
          <div>
            <CSS>
                <Carousel>
                    <Carousel.Item>
                      <img
                        className="picture"
                            src="/images/hotel.jpg"
                            alt="First slide"
                        />
                      <Carousel.Caption>
                        <h1>Guide Travel </h1>
                        <p>Voyagez Agréablement partout au Cameroun.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                       <img
                         className="picture"
                         src="/images/image3.jpg"
                        alt="Second slide"
                       />

                       <Carousel.Caption>
                            <h1>Guide Travel </h1>
                            <p>Vous Rend La Vie Simple.</p>
                       </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                       <img
                          className="picture"
                          src="/images/palais.jpg"
                          alt="Third slide"
                        />

                       <Carousel.Caption>
                           <h1>Guide Travel </h1>
                           <p> Voyagez Simplement , Facilement  Et En Toute Sécutité.</p>
                       </Carousel.Caption>
                   </Carousel.Item>
             </Carousel>
            </CSS>

          </div>
        )
    }
}

export default Agence 


const CSS = styled.div`


.picture {
  width : 100%; 
  height : 450px;
 
}
`
