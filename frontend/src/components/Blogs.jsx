import React from "react";
import { Link, Box, Text, AspectRatio, HStack, Button } from "@chakra-ui/react";

function Blogs() {
  return (
    <>
      <Box textAlign="center" paddingTop="40px" paddingBottom="40px">
        <Text fontSize="4xl" fontWeight="bold">
          Sales Forecasting Blogs
        </Text>
      </Box>

      <HStack spacing="24px" margin="18px">
        <Box>
          <Button>
            <Link
              href="https://www.apollodiagnostics.in/blog/category/diabetes"
              target="_blank"
              rel="noopener noreferrer"
            >
              View in Full Screen
            </Link>
          </Button>
          <AspectRatio width="480px" ratio={1}>
            <iframe
              title="1"
              src="https://www.apollodiagnostics.in/blog/category/diabetes"
            />
          </AspectRatio>
        </Box>

        <Box>
          <Button>
            <Link
              href="https://www.pep2dia.com/blog-pep2dia/human-health/managing-your-blood-sugar-and-well-being/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View in Full Screen
            </Link>
          </Button>
          <AspectRatio width="480px" ratio={1}>
            <iframe
              title="1"
              src="https://www.pep2dia.com/blog-pep2dia/human-health/managing-your-blood-sugar-and-well-being/"
            />
          </AspectRatio>
        </Box>

        <Box>
          <Button>
            <Link
              href="https://www.ganeshdiagnostic.com/blog/7-effective-ways-to-manage-your-blood-glucose-level"
              target="_blank"
              rel="noopener noreferrer"
            >
              View in Full Screen
            </Link>
          </Button>
          <AspectRatio width="480px" ratio={1}>
            <iframe
              title="1"
              src="https://www.ganeshdiagnostic.com/blog/7-effective-ways-to-manage-your-blood-glucose-level"
            />
          </AspectRatio>
        </Box>
      </HStack>
    </>
  );
}

export default Blogs;
