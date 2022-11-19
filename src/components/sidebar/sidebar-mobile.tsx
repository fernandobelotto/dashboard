import { Box, Heading, Text } from "@chakra-ui/react";

export default function SidebarMobile({ width }: any) {
  return (
    <>
      <Box
        position="absolute"
        left="0"
        top="0"
        h="100%"
        w={width}
        bg="gray.300"
        shadow="md"
      >
        <Box p={5}>
          <Text>Sidebar content</Text>
        </Box>
      </Box>
    </>
  );
}
