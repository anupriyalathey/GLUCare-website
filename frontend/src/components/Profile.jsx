import {
  Box,
  Flex,
  Image,
  Text,
  useMediaQuery,
  Spacer,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Home/Nav";

const UserProfile = () => {
  const [isLargerThanLG] = useMediaQuery("(min-width: 62em)");
  const navigate = useNavigate();

  const handleNavigateToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <Flex
      direction="column"
      alignItems="center"
      w="full"
      minHeight="90vh"
      position="relative"
    >
      <Nav />

      <Flex
        direction={isLargerThanLG ? "row" : "column"}
        alignItems="center"
        w="full"
        maxW={isLargerThanLG ? "container.lg" : "full"}
        justifyContent="center"
        mt="35"
      >
        <Box
          mr={isLargerThanLG ? "6" : "0"}
          w={isLargerThanLG ? "60%" : "full"}
        >
          <Text
            fontSize={isLargerThanLG ? "5xl" : "4xl"}
            fontWeight="bold"
            mb="4"
          >
            John Doe
          </Text>

          <Text mb="4" fontSize={isLargerThanLG ? "3xl" : "2xl"} opacity={0.7}>
            Age: 29
          </Text>
          <Text mb="4" fontSize={isLargerThanLG ? "3xl" : "2xl"} opacity={0.7}>
            Sex: Male
          </Text>
          <Text mb="4" fontSize={isLargerThanLG ? "3xl" : "2xl"} opacity={0.7}>
            BMI: 22.5
          </Text>
          <Text fontSize={isLargerThanLG ? "3xl" : "2xl"} opacity={0.7}>
            Email: johndoe@example.com
          </Text>
        </Box>
        <Spacer />
        <Flex
          alignItems="center"
          justifyContent="center"
          w={isLargerThanLG ? "40%" : "full"}
          mt={isLargerThanLG ? "0" : "8"}
        >
          <Image
            borderRadius="full"
            boxSize="150px"
            src="https://via.placeholder.com/150"
            alt="User Profile Picture"
          />
        </Flex>
      </Flex>

      <Button
        position="absolute"
        bottom="16"
        left="50%"
        transform="translateX(-50%)"
        colorScheme="blue"
        onClick={handleNavigateToDashboard}
      >
        Go to Dashboard
      </Button>
    </Flex>
  );
};

export default UserProfile;
