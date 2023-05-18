import React from "react";
import {
  NavbarContainerStyled,
  LogoStyled,
  LinkContainerStyled,
} from "./NavbarStyle";
import { NavLink, useNavigate } from "react-router-dom";
import Monedas from "../monedas/Monedas";
import Button from "../UI/button/Button";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavbarContainerStyled>
        <LogoStyled onClick={() => navigate("/")}>
          <img src="img/logo.png" alt="logo" />
        </LogoStyled>
        <LinkContainerStyled>
          <NavLink to="/">
            <p>HOME</p>
          </NavLink>
          <NavLink to="/slots">
            <p>SLOTS</p>
          </NavLink>
          <NavLink to="/deportes">
            <p>DEPORTES</p>
          </NavLink>
          <NavLink to="/casino">
            <p>CASINOS EN VIVO</p>
          </NavLink>
        </LinkContainerStyled>

        <LinkContainerStyled>
          <Monedas></Monedas>
        </LinkContainerStyled>

        <LinkContainerStyled>
          <Button width={150}>
            <NavLink to="/register">REGISTER</NavLink>
          </Button>

          <Button secondary="true" width={150}>
            <NavLink to="/login">LOGIN</NavLink>
          </Button>
        </LinkContainerStyled>
      </NavbarContainerStyled>
    </>
  );
};

export default Navbar;
