import React, { useState } from "react";
import {
  Text,
  Flex,
  Button,
  Link,
  Spacer,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Nav = () => {
  const [scroll, setScroll] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const navBg = useColorModeValue("white", "#1A212D");

  const changeScroll = () =>
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ? setScroll(true)
      : setScroll(false);

  window.addEventListener("scroll", changeScroll);

  return (
    <Flex
      h="10vh"
      alignItems="center"
      p="6"
      boxShadow={scroll ? "base" : "none"}
      position="sticky"
      top="0"
      zIndex="sticky"
      w="full"
      bg={navBg}
    >
      <Text fontSize="xl" fontWeight="bold">
        <Link href="#top">GLUCare</Link>
      </Text>

      <Spacer />
      <Flex alignItems="center">
        <Button mx={2}>
          <Link target="_blank" rel="noreferrer" href="/blogs" fontSize="md">
            Blogs
          </Link>
        </Button>
        <Button mx={2}>
          <Link href="#about" fontSize="md">
            About Us
          </Link>
        </Button>

        <Button mx={2}>
          <Link href="#contact" fontSize="md">
            Contact Us
          </Link>
        </Button>
        <Button mx={2}>
          <Link target="_blank" rel="noreferrer" href="/signin" fontSize="md">
            Login
          </Link>
        </Button>
        <IconButton
          mx={2}
          w={6}
          h={6}
          p={5}
          onClick={toggleColorMode}
          aria-label="Toggle color mode"
        >
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </IconButton>
      </Flex>
    </Flex>
  );
};

export default Nav;
