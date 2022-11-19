import { Box, Text } from "@chakra-ui/react";

export default function Header({ pl }: any) {
  return (
    <>
      <Box w="100%" h="60px" shadow="md" bg="white" pl={pl}>
        <Box p={5}>
          <Text>Header content</Text>
        </Box>
      </Box>
    </>
  );
}
