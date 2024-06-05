import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, Flex, Spacer, Switch, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";
import AddPost from "./pages/AddPost.jsx";

function App() {
  const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <Flex as="nav" p={4} bg={useColorModeValue("gray.100", "gray.900")} color={useColorModeValue("black", "white")}>
        <Box fontWeight="bold">My Blog</Box>
        <Spacer />
        <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      </Flex>
    );
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/add-post" element={<AddPost />} />
      </Routes>
    </Router>
  );
}

export default App;