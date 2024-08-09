import {
  Box,
  Button,
  Flex,
  Image,
  Spacer,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import Med_Pic from "../../assets/med_pic.png";
const Hero = () => {
  const [isLargerThanLG] = useMediaQuery("(min-width: 62em)");
  return (
    <Flex
      id="top"
      alignItems="center"
      w="full"
      px={isLargerThanLG ? "16" : "6"}
      py="16"
      minHeight="90vh"
      justifyContent="space-between"
      flexDirection={isLargerThanLG ? "row" : "column"}
    >
      <Box mr={isLargerThanLG ? "6" : "0"} w={isLargerThanLG ? "60%" : "full"}>
        <Text
          fontSize={isLargerThanLG ? "5xl" : "4xl"}
          fontWeight="bold"
          mb="4"
        >
          {" "}
          GLUCare
        </Text>

        <Text mb="6" fontSize={isLargerThanLG ? "3xl" : "2xl"} opacity={0.7}>
          An Advanced Non-Invasive Glucose Monitoring System using NIR
          Spectroscopy.
        </Text>
      </Box>
      <Spacer />
      <Flex
        w={isLargerThanLG ? "40%" : "full"}
        alignItems="center"
        justifyContent="center"
      >
        <Image src={Med_Pic} alt="Sales" />
      </Flex>
    </Flex>
  );
};

export default Hero;
