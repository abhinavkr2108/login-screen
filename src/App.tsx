import {
  Box,
  Button,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { RxCross1 } from "react-icons/rx";
import { COLORS } from "../constants/Colors.ts";
import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

function App() {
  const [show, setShow] = useState<boolean>(false);
  const handleClick = () => setShow(!show);
  return (
    <Box h="100vh" display="flex" flexDirection="column" alignItems={"center"}>
      <VStack gap={10} align={"start"} w={{ base: "80%", md: "40%" }} pt={10}>
        <RxCross1 size={28} />
        <Text fontSize={"22px"} fontWeight={400}>
          Sign in to Coinbase
        </Text>
      </VStack>

      <Box
        display={"flex"}
        w="100vw"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={3}
        pt={10}
      >
        <VStack align="start" spacing={0} w={{ base: "80%", md: "40%" }}>
          <label htmlFor="email">Email</label>
          <Input type="email" id="email" placeholder="mobbin.cms2@gmail.com" />
        </VStack>
        <VStack align="start" spacing={0} w={{ base: "80%", md: "40%" }}>
          <label htmlFor="password">Password</label>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              id="password"
              placeholder="Password"
            />
            <InputRightElement>
              <IconButton
                onClick={handleClick}
                aria-label="toggle_password_visibility"
                bgColor={"transparent"}
              >
                {show ? <LuEye size={20} /> : <LuEyeOff size={20} />}
              </IconButton>
            </InputRightElement>
          </InputGroup>
        </VStack>
        <HStack
          mt={"32px"}
          justifyContent={"space-between"}
          w={{ base: "80%", md: "40%" }}
        >
          <Text
            fontSize={"14px"}
            fontWeight={400}
            color={COLORS.primary}
            cursor={"pointer"}
          >
            Forgot Password?
          </Text>
          <Text
            fontSize={"14px"}
            fontWeight={400}
            color={COLORS.primary}
            cursor={"pointer"}
          >
            Privacy Policy
          </Text>
        </HStack>
      </Box>
      <Box mt={"32px"} w={{ base: "80%", md: "40%" }}>
        <Button colorScheme="blue" mx={"auto"} w={"100%"}>
          Sign In
        </Button>
      </Box>
    </Box>
  );
}

export default App;
