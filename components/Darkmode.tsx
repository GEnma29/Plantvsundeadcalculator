import React from "react";
import { Button, useColorMode } from "@chakra-ui/react";
const Darkmode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button m={2} onClick={toggleColorMode}>
      Toggle {colorMode === "light" ? "Dark" : "Light"}
    </Button>

  );
};

export default Darkmode;
