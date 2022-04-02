import React from "react";
import { Container } from "./styles";

const StartStopButton: React.FC = ({ children }) => {
  return (
    <Container>
      <button>{children}</button>
    </Container>
  );
};

export default StartStopButton;
