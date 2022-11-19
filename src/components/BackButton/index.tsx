import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, IconButton } from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Box
      position="fixed"
      top={4}
      left={4}
      zIndex={1}
    >
      <IconButton
        onClick={() => navigate(-1)}
        size="sm"
        icon={<ArrowBackIcon />}
        aria-label="Back"
      />
    </Box>
  );
};
