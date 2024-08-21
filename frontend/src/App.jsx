import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Box minH={"100vh"} bg={useColorModeValue("#FFFFFF","#333333")}>
        {/* Navbar */}
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route />
        </Routes>
      </Box>
    </>
  );
}

export default App;