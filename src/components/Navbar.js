import React from "react";
import styled from '@emotion/styled'

const NavContainer = styled.div`
width: 100%;
top:0;
margin:20px 0 10px 0;
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
    }
  }

`

export const Navbar=()=>{
    const navItems=(
        <>
        <nav className={`list_container`}>
			<a href="" className={'link'}>Accueil</a>
			<a href="" className={'link'}>Guide</a>
			<a href="" className={'link'}>A propos</a>
			<a href="" className={'link'}>Contact</a>

        </nav>
        <div>
            <button> Se Connecter </button>
        </div>
        </>
    )
return(
    <NavContainer>
        <div className={'top-bar'}>
            <a href="\" className={'logo_container'}>
                <img src="/images/logo.png" alt="logo"  width={90} height={70}/>
                <div className={'brandName'}>GuideTravel</div>
            </a>
            {navItems}
        </div>
    </NavContainer>
)
}