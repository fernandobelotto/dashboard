import { Box, useBreakpointValue } from "@chakra-ui/react";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";

export default function Layout({ children }: any) {
  const sidebarWidth = useBreakpointValue({ base: "60px", md: "300px" });

  return (
    <>
      <Box h="100vh">
        <Header pl={sidebarWidth} />
        <Sidebar width={sidebarWidth} />
        <Box bg="gray.100" h="calc(100% - 60px)" ml={sidebarWidth} p={5}>
          {children}
        </Box>
      </Box>
    </>
  );
}
