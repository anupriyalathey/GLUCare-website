import { Flex, Spacer, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";

const Services = () => {
  const [isLargerThanLG] = useMediaQuery("(min-width: 62em)");

  return (
    <Flex
      width="full"
      minHeight="70vh"
      alignItems="center"
      px={isLargerThanLG ? "16" : "6"}
      py="16"
      justifyContent="center"
      flexDirection={isLargerThanLG ? "row" : "column"}
    >
      <Spacer />
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
