import {
  Text,
  Flex,
  useColorModeValue,
  Stack,
  Heading,
  Link as ChakraLink,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Button,
  Highlight,
  Card,
  CardBody,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          spacing={8}
          mx={"auto"}
          maxW={"lg"}
          py={12}
          px={6}
        >
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text
              fontSize={"lg"}
              color={"gray.600"}
            >
              to enjoy all of our cool{" "}
              <Highlight
                query="features"
                styles={{
                  px: 1,
                  backgroundColor: "blue.200",
                  fontWeight: "500",
                }}
              >
                features
              </Highlight>{" "}
              ✌️
            </Text>
          </Stack>
          <Card p={6}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <ChakraLink
                    as={Link}
                    color={"blue.400"}
                    to="/forget"
                  >
                    Forgot password?
                  </ChakraLink>
                </Stack>
                <Button colorScheme="blue">Sign in</Button>
              </Stack>
            </Stack>
          </Card>
        </Stack>
      </Flex>
    </>
  );
}
