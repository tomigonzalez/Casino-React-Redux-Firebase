import React from "react";
import {
  NavbarContainerStyled,
  LogoStyled,
  LinkContainerStyled,
  BiDownArrowIcon,
} from "./NavbarStyle";
import { useNavigate } from "react-router-dom";
import Monedas from "../monedas/Monedas";
import * as userAction from "../../redux/user/user-action";
import LinkContainer from "./linkcontainer/LinkContainer";
import { useDispatch, useSelector } from "react-redux";
import LinkContainerButton from "./linkcontainerbutton/LinkContainerButton";
import Button from "../UI/button/Button";
import ModalUser from "./modaluser/ModalUser";

const Navbar = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  return (
    <>
      <NavbarContainerStyled>
        <ModalUser />
        <LogoStyled onClick={() => navigate("/")}>
          <img src="img/logo.png" alt="logo" />
        </LogoStyled>
        <LinkContainer></LinkContainer>

        <LinkContainerStyled>
          <Monedas></Monedas>
        </LinkContainerStyled>

        <LinkContainerStyled
          onClick={() =>
            currentUser
              ? dispatch(userAction.toggleMenuHidden())
              : navigate("/register")
          }
        >
          {currentUser ? (
            <Button width={100}>
              {currentUser.displayName}
              <BiDownArrowIcon />
            </Button>
          ) : (
            <LinkContainerButton />
          )}
        </LinkContainerStyled>
      </NavbarContainerStyled>
    </>
  );
};

export default Navbar;
