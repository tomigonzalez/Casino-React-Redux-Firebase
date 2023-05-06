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
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/slots">SLOTS</NavLink>
          <NavLink to="/deportes">DEPORTES</NavLink>
          <NavLink to="/casino">CASINOS EN VIVO</NavLink>
        </LinkContainerStyled>

        <LinkContainerStyled>
          <Monedas></Monedas>
        </LinkContainerStyled>

        <LinkContainerStyled>
          <Button>
            <NavLink to="/register">REGISTER</NavLink>
          </Button>

          <Button secondary>
            <NavLink to="/login">LOGIN</NavLink>
          </Button>
        </LinkContainerStyled>
      </NavbarContainerStyled>
    </>
  );
};

export default Navbar;
