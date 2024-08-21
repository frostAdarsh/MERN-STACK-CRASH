import { Button, Container, Flex, HStack, Text, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

function Navbar() {
  const {colorMode,toggleColorMode} = useColorMode();
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"Center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r,#8338E3, blue.500)"}
          bgClip={"text"}
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <CiCirclePlus />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
           {colorMode === "light" ? <FaRegMoon />:<MdSunny />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
}

export default Navbar;
