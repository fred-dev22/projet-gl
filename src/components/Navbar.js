import React, { useState } from "react";
import styled from '@emotion/styled'
import { NavLink ,useLocation } from "react-router-dom";



export const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);//j'utilise pour determiner si le menus sur telephone est ouvert ou pas
  const navItems = (
    <>
      <nav className={`list_container`}>
        <NavLink to="/" className={location.pathname=="/"?'active-link':'link'}>Accueil</NavLink>
        <NavLink to="/voyages" className={location.pathname=="/voyages"?'active-link':'link'}>Voyages</NavLink>
        <NavLink to="/agences" className={location.pathname=="/agences"?'active-link':'link'}>Agences</NavLink>
        <NavLink to="/a-propos" className={location.pathname=="/a-propos"?'active-link':'link'}>A Propos</NavLink>

      </nav>
      <div className='action-buttons'>
        <NavLink to="/connexion" className={location.pathname=="/connexion"?'active-button-link':'buttonStyle'} > Se Connecter </NavLink>

      </div>
    </>
  )
  return (
    <NavContainer>
      <div className={'top-bar'}>
        <NavLink to="/" className={'logo_container'}>
          <img src="/images/logo.png" alt="logo" width={90} height={70} />
          <div className={'brandName'}>GuideTravel</div>
        </NavLink>
        {navItems}
        <div className='toggle-menu'>
          <PhoneMenuButton onClick={() => setOpen(!open)} />
        </div>
      </div>
      <div className={`phone-menu ${open && 'open'}`}>{navItems}</div>

    </NavContainer>
  )
}
const PhoneMenuButton = ({ onClick }) => {
  return (
    <button onClick={() => onClick()} className='button' >
      <svg
        aria-hidden='true'
        focusable='false'
        data-prefix='fas'
        data-icon='bars'
        style={{ height: '2em' }}
        role='img'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 448 512'
        color="#551a8b"
      >
        <path
          fill='currentColor'
          d='M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z'
        ></path>
      </svg>
    </button>
  );
};
const NavContainer = styled.div`
width: 100%;
top:0;
margin:0px 0 10px 0;
background-color:#6c63ff;
.top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 50px;
    width: 100%;
  }
  .logo_container {
    display: flex;
    text-decoration: none;
    align-items: center;

    .brandName {
      margin-left: 15px;
      font-size: 1.2em;
      letter-spacing: 0.4rem;
      font-weight: 700;
      color:white;
    }
  }
  .list_container {
    word-wrap: break-word;
    margin: 0;
    padding-left: 0;
    .link {
      display: inline-block;
      padding: 10px 15px;
      text-transform: uppercase;
      text-decoration:none;
      color:white;
      
    }
      
    
    
  }
  .action-buttons,
  .list_container {
    display: none;
  }
  .buttonStyle{
    border:solid #551a8b 2px ;
    border-radius:5px;
    padding:5px 15px 5px 15px;
    font-size:12px;
    font-weight:bold;
    background-color:transparent;
    color:#551a8b;
    list-style-type: none;
    text-decoration: none;
    :hover{
      background-color:#551a8b;
      color:white;
    }
  }
  .button {
    background-color: transparent;
    border: none;
  }
  .toggle-menu {
    display: inline-block;
    padding-right:20px;
  }
  .phone-menu {
    transition: ease-in-out max-height 0.5s;
    max-height: 0;
    overflow: hidden;
    &.open {
      max-height: 100vh;
    }
    .list_container,
    .action-buttons {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .active-link{
     background-color:white;
     padding: 10px 15px;
      text-transform: uppercase;
      text-decoration:none;
      color:black;
     border-radius:10px;
  }
  .active-button-link{
    text-decoration:none;
    border:solid white 3px ;
    border-radius:10px;
    padding:5px;
    font-size:15px;
    font-weight:bold;
    background-color:white;
    color:black;
    margin-bottom:10px;
  }
 
  @media (min-width: 768px) {
    .action-buttons,
    .list_container {
      display: unset;
    }
    .toggle-menu,
    .phone-menu {
      display: none;
    }
    .list_container {
      flex: 1;
      width: auto;
        text-align: center;
    }
    .buttonStyle{
      margin-right:30px;
      border:solid white 3px ;
      border-radius:10px;
      padding:10px;
      font-size:15px;
      font-weight:bold;
      background-color:transparent;
      color:white;
    }
    :hover{
      background-color:#551a8b;
      color:white;
    }
  }
  
`