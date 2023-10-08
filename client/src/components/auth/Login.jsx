import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  VStack,
  Button,
  Text,
} from "@chakra-ui/react";
import { InputRightElement } from "@chakra-ui/input";
import { useState } from "react";

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleClick = () => {
    setShow(!show);
  };

  const submitHandler = () => {};

  return (
    <VStack spacing="10px">
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input onChange={(e) => setEmail(e.target.value)} />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Text style={{ cursor: "pointer" }} fontSize="xs" color="tomato">
        Get guest user credentials!
      </Text>
      <Button width="100%" style={{ marginTop: 15 }} onClick={submitHandler}>
        Login
      </Button>
    </VStack>
  );
};

export default Login;
