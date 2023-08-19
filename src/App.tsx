import { Button } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <>
      <Stack spacing={4} direction="row" align="center">
        <Button colorScheme="teal" size="xs">
          Button
        </Button>
        <Button colorScheme="teal" size="sm">
          Button
        </Button>
        <Button colorScheme="teal" size="md">
          Button
        </Button>
        <Button colorScheme="teal" size="lg">
          Button
        </Button>
      </Stack>
    </>
  );
}

export default App;
