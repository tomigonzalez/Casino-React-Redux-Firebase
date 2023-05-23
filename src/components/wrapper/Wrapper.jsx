import React from "react";
import styled from "styled-components";

const WrapperStyled = styled.div`
  display: flex;
  max-width: 1100px;
  width: 90%;
  margin: 0 auto;
  justify-content: center;
`;

const Wrapper = ({ children }) => {
  return <WrapperStyled> {children} </WrapperStyled>;
};

export default Wrapper;
