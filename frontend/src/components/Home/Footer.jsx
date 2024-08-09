import { Flex, Text, Spacer } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Flex
      w="full"
      bg="blackAlpha.50"
      minHeight="15vh"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      justifyContent="center"
      marginBottom={4}
      paddingTop={4}
      paddingBottom={4}
    >
      <Text>Build with ❤️ by</Text>
      <Spacer />
      <Text opacity="0.5">Anupriya Lathey (102103373)</Text>
      <Text opacity="0.5">Nitleen Kaur (102103377)</Text>
      <Text opacity="0.5">Pia Gupta (102103394)</Text>
      <Text opacity="0.5">Riddhi Garg (102103282)</Text>
      <Text opacity="0.5">Stuti Mittal (102103485)</Text>
    </Flex>
  );
};

export default Footer;
