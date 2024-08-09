import { Flex, Spacer, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";

const Services = () => {
  const [isLargerThanLG] = useMediaQuery("(min-width: 62em)");

  return (
    <Flex
      id="about"
      width="full"
      minHeight="70vh"
      alignItems="center"
      px={isLargerThanLG ? "16" : "6"}
      py="16"
      justifyContent="center"
      flexDirection={isLargerThanLG ? "column" : "column"}
    >
      <Spacer />
      <Text fontSize={isLargerThanLG ? "3xl" : "2 xl"} mb="4">
        {" "}
        About GLUCare
      </Text>
      <Text mb="6" fontSize={isLargerThanLG ? "lg" : "base"} opacity={0.8}>
        The existing challenge in non-invasive glucose detection lies in the
        limited commercialization of NIR devices due to issues related to
        accuracy. Current research suggests that NIR spectroscopy is a promising
        method for glucose monitoring, but its widespread adoption is hindered
        by a lack of precision. Our project addresses this gap by enhancing
        accuracy and reliability through the incorporation of clinical
        parameters. By considering individual variations in physiology, our goal
        is to make NIR-based glucose detection more robust, thereby paving the
        way for the successful commercialization of non-invasive glucose
        monitoring solutions.
      </Text>
      {/* <Flex
        w={isLargerThanLG ? "60%" : "full"}
        flexDirection="column"
        // ml={isLargerThanLG ? "7" : "0"}
      >
        <Text fontSize={isLargerThanLG ? "2xl" : "xl"}>
          The concept behind our Smart healthcare device is to provide an
          efficient and painless alternative to the traditional finger-pricking
          method of measuring blood glucose levels, which causes people
          discomfort.{" "}
        </Text>

        <Text mb="6" opacity="0.8">
          Predict your sales and revenue with the help of our data analytics.
        </Text>
      </Flex> */}
    </Flex>
  );
};

export default Services;
