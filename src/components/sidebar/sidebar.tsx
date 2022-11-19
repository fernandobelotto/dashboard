import { Box } from "@chakra-ui/react";
import SidebarContentDesktop from "./sidebar-content-desktop";
import SidebarContentMobile from "./sidebar-content-mobile";

export default function Sidebar({ width }: any) {
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
        {width === "60px" && <SidebarContentMobile />}
        {width === "300px" && <SidebarContentDesktop />}
      </Box>
    </>
  );
}
