import { ChakraProvider } from "@chakra-ui/provider";

import NumberFormat from "react-number-format";

import { AiOutlineArrowDown } from "react-icons/ai";
import { MdLocalFireDepartment } from "react-icons/md";
import { MdRefresh } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { theme } from "./theme";
import {
  Button,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ScaleFade,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

function App() {
  const [initialMoney, setInitialMoney] = useState(100000);
  const [money, setMoney] = useState(initialMoney);
  const [isStarted, setIsStarted] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

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
    setIsStarted(!isStarted);
  };

  const handleReload = () => {
    setMoney(100000.0);
  };

  const handleChange = () => {
    console.log("test");
    onClose();
  };

  return (
    <ChakraProvider theme={theme}>
      <Flex
        flexDir="column"
        w="100vw"
        h="100vh"
        align="center"
        justify="center"
      >
        <Heading alignContent="flex-start" w={[300, 400, 800]}>
          <Image
            margin="2rem 0 0 2rem"
            h="3rem"
            objectFit="cover"
            src="./logo_rocketseat.png"
            alt="rocketseatLogo"
          />
          <Text
            margin="0 0 2rem 2rem"
            color="blackAlpha.700"
            fontFamily="Encode Sans Expanded"
            fontSize={{ base: "4xl", lg: "6xl" }}
          >
            Money Counter
          </Text>
        </Heading>
        <Flex
          w="100%"
          // h="20rem"
          h={{ base: "18rem", lg: "20rem" }}
          // maxWidth="50rem"
          maxWidth={{ base: "90%", md: "80%", lg: "50rem" }}
          bg="whiteAlpha.900"
          borderRadius={8}
          flexDir="column"
          justify="space-between"
        >
          <Flex color="gray.600" justifyContent="flex-end" h="2rem" w="auto">
            <Button onClick={handleReload} colorScheme="gray" variant="link">
              <MdRefresh size="1.5rem" />
            </Button>
            <Button onClick={onOpen} colorScheme="gray" variant="link">
              <IoMdSettings size="1.5rem" />
            </Button>
          </Flex>
          <Flex
            color="red.500"
            // fontSize="5rem"
            fontSize={{ base: "3rem", lg: "5rem" }}
            align="center"
            borderRadius={8}
            justify="space-evenly"
            flexWrap="wrap"
          >
            <AiOutlineArrowDown />
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
          <Flex h="2rem" />
        </Flex>
      </Flex>

      <ScaleFade initialScale={0.9} in={isOpen}>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent color="gray.700">
            <ModalHeader>Counter Configuration</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <h1>This is a test</h1>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button onClick={handleChange} variant="ghost">
                Change
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </ScaleFade>
    </ChakraProvider>
  );
}

export default App;
