import {
  Box,
  Flex,
  Text,
  useMediaQuery,
  Spacer,
  VStack,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useNavigate } from "react-router-dom";
import Nav from "./Home/Nav";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [isLargerThanLG] = useMediaQuery("(min-width: 62em)");
  const navigate = useNavigate();

  const data = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Glucose Levels (mg/dL)",
        data: [95, 110, 105, 98, 112, 99, 102],
        backgroundColor: "#4FD1C5",
        borderColor: "#319795",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Weekly Glucose Levels",
      },
    },
    scales: {
      x: {
        type: "category",
        title: {
          display: true,
          text: "Days of the Week",
        },
      },
      y: {
        type: "linear",
        beginAtZero: true,
        title: {
          display: true,
          text: "Glucose Levels (mg/dL)",
        },
        suggestedMax: 150,
      },
    },
  };

  const handleNavigateToProfile = () => {
    navigate("/profile");
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
        direction="row"
        alignItems="center"
        w="full"
        maxW="container.lg"
        justifyContent="center"
        mb="16"
        mt="35"
      >
        <Box mr="6" w="60%">
          <Text fontSize="5xl" fontWeight="bold" mb="4">
            Glucose Levels Dashboard
          </Text>

          <Text mb="6" fontSize="3xl" opacity={0.7}>
            Track your glucose levels over time.
          </Text>

          <VStack align="start">
            <Text fontSize="2xl" opacity={0.7}>
              Date Range: Aug 1, 2024 - Aug 7, 2024
            </Text>
            <Text fontSize="2xl" opacity={0.7}>
              Average Glucose Level: 102 mg/dL
            </Text>
          </VStack>
        </Box>
        <Spacer />
        <Flex alignItems="center" justifyContent="center" w="40%" mt="0">
          <Box w="full">
            <Bar data={data} options={options} />
          </Box>
        </Flex>
      </Flex>

      <Button
        position="fixed"
        bottom="16"
        left="50%"
        // transform="translateX(-50%)"
        colorScheme="blue"
        onClick={handleNavigateToProfile}
      >
        Go to Profile
      </Button>
    </Flex>
  );
};

export default Dashboard;
