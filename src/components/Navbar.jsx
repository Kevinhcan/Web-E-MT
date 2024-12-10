import React from "react";
import styled from "styled-components";
import BurguerButton from "./BurguerButton";

function Navbar() {
  return (
    <>
      <NavContainer>
        <h2>
          Navbar <span>responsive</span>
        </h2>
        <div className="links active">
          <a href="/">Inicio</a>
          <a href="/">Calibraciones acréditadas</a>
          <a href="/">Termometros</a>
          <a href="/">Alcoholimetros</a>
          <a href="/">Detectores de gas</a>
          <a href="/">Medidores ambientales</a>
          <a href="/">Contactanos</a>
        </div>
        <div className="burguer">
          <BurguerButton />
        </div>
      </NavContainer>
    </>
  );
}

export default Navbar;

const NavContainer = styled.nav`
  h2 {
    color: #e8e8e8;
    font-weight: 400;
    span {
      font-weight: bold;
    }
  }
  padding: 2rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: #e8e8e8;
    text-decoration: none;
    margin-right: 1rem;
    font-size: larger;
  }
  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    a{
      color: #000000;
      font-size:2rem;
      display:block;
    }
    @media (min-width: 768px) {
      position: initial;
      margin:0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
    }
  }

  .links.active {
    width: 100%;
    display:block;
    position:absolute;
    margin-left: auto;
    margin-right: auto;
    top:30%;
    left: 0 ;
    right: 0 ;
    text-align:center;
    a{
      color: #000000;
    }
  }

  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
