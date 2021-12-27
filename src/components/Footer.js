import React from 'react';
import styled from "@emotion/styled"
import { NavLink } from 'react-router-dom';




const Footer = () => {
    return (
        <Container>
            <div className='div1'>
                <div className='column'>

                    <span>Services</span>
                    <NavLink to='/' className={'link'}>Web design</NavLink>
                    <NavLink to='/' className={'link'}>Development</NavLink>
                    <NavLink to='/' className={'link'}>Hosting</NavLink>
                </div>
                <div className='column'>
                    <span>A propos</span>
                    <NavLink to='/' className={'link'}>Agences</NavLink>
                    <NavLink to='/' className={'link'}>Voyage</NavLink>
                    <NavLink to='/' className={'link'}>nous contacter</NavLink>
                </div>
                <div className='column'>
                    <span>Newsletter</span>
                    <div className={'newsLetter'}>
                        <input type={'email'} placeholder='entrez votre email' />
                        <button>s'inscrire</button>
                    </div>
                    <div className='icon'>
                        <span className='suivre'>Nous suivre</span>
                        <img src="/images/face.png" width={30} height={30} />
                        <img src="/images/what.png" width={30} height={30} />
                        <img src="/images/inst.png" width={30} height={30} />
                    </div>
                </div>

            </div>
            <div>

            </div>

            <p class="copyright">GuideTravel © 2021</p>
        </Container>
    );
}
const Container = styled.div`
background-color:#282d32;
position:relative;
bottom:0px;
display:flex;
flex-direction:column;
width:100%;
text-align:center;
margin-top:20px;


.row{
    display:flex;
}
.column{
    display:flex;
    flex-direction:column;
}
span{
    color:white;
    font-weight:bold;
    font-size:20px;
    padding-top:10px;
}
.link{
    color:white;
  text-decoration:none;
  opacity:0.6;
  :hover{
    opacity:0.9;
  }
}
.newsLetter{
      padding-top:10px;
  }
input{
    border-top-left-radius:10px;
    border-bottom-left-radius:10px;
    border :solid #551a8b  3px;

}
button{
    border-top-right-radius:10px;
    border-bottom-right-radius:10px;
    border :solid #551a8b  3px;
   font-weight:bold;
   :hover{
       background-color:#551a8b;
       color:white;
   }
}
.icon{
    padding-top:5px;
}
img{
    margin-left:10px;
}
p{
    color:white;
    padding-top:10px;
    font-size:13px;
    margin-bottom:0;

}
.suivre{
    color:white;
    font-weight:200px;
    font-size:15px;
}
@media (min-width: 768px) {
.div1{
display:flex;
flex-direction:row;
justify-content:space-around;
}
.column{
    text-align:left;
}
}
`

export default Footer;