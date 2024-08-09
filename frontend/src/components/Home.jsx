import React, { useRef } from "react";
import { Box } from "@chakra-ui/react";
import ContactUs from "./Home/ContactUs";
import Footer from "./Home/Footer";
import Hero from "./Home/Hero";
import Nav from "./Home/Nav";
import About from "./Home/About";

export default function Home() {
  const btnRef = useRef();
  return (
    <Box>
      <Nav ref={btnRef} />
      <Hero />
      <About />
      <ContactUs />
      <Footer />
    </Box>
  );
}
