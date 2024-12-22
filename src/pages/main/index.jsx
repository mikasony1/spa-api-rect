import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Box, Container } from "@mui/material";

export default function Main() {
  return (
    <Container sx={{ m: "0 auto" }} maxWidth="md">
      <Header />
      <Box sx={{ my: "20px" }}>
        <Outlet />
      </Box>
      <Footer />
    </Container>
  );
}
