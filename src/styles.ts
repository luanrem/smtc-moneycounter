import styled from "styled-components";

export const Container = styled.div`
  /* Created with https://www.css-gradient.com */
  background: #4f36b7;
  background: -webkit-linear-gradient(top left, #4f36b7, #ea25c5);
  background: -moz-linear-gradient(top left, #4f36b7, #ea25c5);
  background: linear-gradient(to bottom right, #4f36b7, #ea25c5);

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  /* .Limiter {
    background-color: blue;
    width: 60%;
  } */
`;

export const Card = styled.div`
  background-color: #e5e5e0;
  width: 60%;
  height: 250px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  span {
    color: red;
    font-size: 4rem;
  }

  button {
  }
`;
