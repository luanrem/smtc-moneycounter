import { Container, Card } from "./styles";

import StartStopButton from "./components/StartStopButton";

import { AiOutlineArrowDown } from "react-icons/ai";

function App() {
  return (
    <Container>
      {/* <div className="Limiter"> */}
      {/* <header>This is a test</header> */}
      <Card>
        <span>
          <AiOutlineArrowDown /> R$ 173.025,00
        </span>
        <StartStopButton>Start</StartStopButton>
      </Card>
      {/* </div> */}
    </Container>
  );
}

export default App;
