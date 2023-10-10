import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  VStack,
  Button,
} from "@chakra-ui/react";
import { InputRightElement } from "@chakra-ui/input";
import { useState } from "react";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [pic, setPic] = useState();

  const handleClick = () => {
    setShow(!show);
  };

  const submitHandler = (e) => {};

  return (
    <VStack spacing="10px">
      <FormControl id="full-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          // placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          // placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            // placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button width="100%" style={{ marginTop: 15 }} onClick={submitHandler}>
        Sign Up
      </Button>
    </VStack>
  );
};

export default SignUp;
