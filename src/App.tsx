import { ChakraProvider } from "@chakra-ui/provider";

import NumberFormat from "react-number-format";

import { AiOutlineArrowDown } from "react-icons/ai";
import { MdLocalFireDepartment } from "react-icons/md";
import { theme } from "./theme";
import { Button, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function App() {
  const [money, setMoney] = useState(10000.0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timer;
    if (isStarted) {
      timer = setInterval(() => setMoney(money - 1000), 1000);
    } else {
      timer = setInterval(() => setMoney(money - 0), 1000);
    }
    return () => clearInterval(timer);
  }, [money, isStarted]);

  const handleStopStart = () => {
    console.log("chegou");
    setIsStarted(!isStarted);
  };

  return (
    <ChakraProvider theme={theme}>
      <Flex w="100vw" h="100vh" align="center" justify="center">
        <Flex
          w="100%"
          h="20rem"
          maxWidth="50rem"
          bg="whiteAlpha.900"
          color="red.500"
          fontSize="5rem"
          align="center"
          borderRadius={8}
          justify="space-evenly"
          flexWrap="wrap"
        >
          <AiOutlineArrowDown />{" "}
          <NumberFormat
            value={money}
            prefix="R$"
            type="text"
            thousandsGroupStyle="thousand"
            decimalSeparator="."
            displayType="text"
            thousandSeparator={true}
            allowNegative={true}
            decimalScale={0}
            fixedDecimalScale={true}
            isNumericString={false}
            allowLeadingZeros={true}
          />
          <Button
            leftIcon={<MdLocalFireDepartment />}
            name="StartOrPause"
            colorScheme="purple"
            variant="outline"
            width="6rem"
            justifyContent="space-between"
            onClick={handleStopStart}
          >
            {isStarted ? "Stop" : "Start"}
          </Button>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
