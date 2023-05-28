import React from "react";
import { AnimatePresence } from "framer-motion";
import * as userActions from "../../../redux/user/user-action";

import {
  ContenedorButton,
  HrStyled,
  ModalContainerStyled,
  UsernameStyled,
} from "./ModelUserStyles";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../../firebase/firebase-utils";
import Button from "../../UI/button/Button";

const ModalUser = () => {
  const { currentUser, hiddenMenu } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <AnimatePresence>
      {!hiddenMenu && (
        <ModalContainerStyled
          initial={{ translateX: 600 }}
          animate={{ translateX: 0 }}
          exit={{ translateX: 600 }}
          transition={{ duration: 0.5 }}
          key="cart-user"
        >
          <UsernameStyled>{`Hola ${currentUser?.displayName}!!!`}</UsernameStyled>
          <HrStyled />
          <ContenedorButton>
            <Button secondary={true}>DEPOSITAR</Button>
            <Button secondary={false}>RETIRAR</Button>
          </ContenedorButton>
          <span
            onClick={() =>
              auth
                .signOut()
                .then(() => dispatch(userActions.toggleMenuHidden()))
            }
          >
            {" "}
            Cerrar Sesion{" "}
          </span>
        </ModalContainerStyled>
      )}
    </AnimatePresence>
  );
};

export default ModalUser;
