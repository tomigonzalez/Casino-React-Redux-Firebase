import React from "react";
import {
  BrowserRouter,
  Route,
  Routes as ReactRouterDom,
} from "react-router-dom";
import Home from "../pages/home/Home";
import CasinoVivo from "../pages/casinosvivo/CasinosVivo";
import Deportes from "../pages/deportes/Deportes";
import Slots from "../pages/slots/Slots";
import Layout from "../components/layout/Layout";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Wrapper from "../components/wrapper/Wrapper";

const Routes = () => {
  return (
    <>
      <Wrapper>
        <ReactRouterDom>
          <Route path="/" element={<Home />} />
          <Route path="/casino" element={<CasinoVivo />} />
          <Route path="/deportes" element={<Deportes />} />
          <Route path="/slots" element={<Slots />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </ReactRouterDom>
      </Wrapper>
    </>
  );
};

export default Routes;
