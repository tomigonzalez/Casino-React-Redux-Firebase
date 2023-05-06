import styled from "styled-components";

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ gridLength }) => `repeat(${gridLength}, 1fr)`};
  gap: 20px;
  padding: 1rem;

  overflow: scroll;
`;
export const Cards = styled.div`
  display: flex;
  height: 150px;
  border-radius: 20px;
  background-color: #34384a;
`;
export const CardImg = styled.img`
  width: 50%;
  height: 100%;
  border-radius: 16px;
  object-fit: cover;
`;
export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 220px;
`;
export const CardId = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 220px;
`;
export const CardTitle = styled.h2`
  margin: 0;
  margin-bottom: 5px;
  font-weight: 500;
  letter-spacing: 0.05rem;
`;
export const CardPrice = styled.span`
  font-weight: 800;
  font-size: 1.5rem;
  background: linear-gradient(83deg, #ffa100, #fb103d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
