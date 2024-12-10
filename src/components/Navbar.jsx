import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <>
      <NavContainer>
        <h2>
          Navbar <span>responsive</span>
        </h2>
        <div>
          <a href="/">Inicio</a>
          <a href="/">Calibraciones acréditadas</a>
          <a href="/">Termometros</a>
          <a href="/">Alcoholimetros</a>
          <a href="/">Detectores de gas</a>
          <a href="/">Medidores ambientales</a>
          <a href="/">Contactanos</a>
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
    font-size:larger
  }
`;
