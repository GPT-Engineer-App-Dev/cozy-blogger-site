import { Container, Text, VStack, Heading, Box, Image, Link, HStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10} bg={useColorModeValue("white", "gray.800")} color={useColorModeValue("black", "white")}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>Welcome to My Blog</Heading>
          <Box textAlign="center" mt={4}>
            <Link as={RouterLink} to="/add-post" color="teal.500" fontSize="lg">
              Add New Post
            </Link>
          </Box>
          <Text fontSize="lg">A place where I share my thoughts and experiences.</Text>
        </Box>
        <Box>
          <Image src="/images/blog-image.jpg" alt="Blog Image" borderRadius="md" />
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>Latest Posts</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">Post Title 1</Heading>
              <Text mt={2}>This is a summary of the first blog post. It gives a brief overview of the content...</Text>
              <Link color="teal.500" href="#">Read more</Link>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">Post Title 2</Heading>
              <Text mt={2}>This is a summary of the second blog post. It gives a brief overview of the content...</Text>
              <Link color="teal.500" href="#">Read more</Link>
            </Box>
          </VStack>
        </Box>
        <Box textAlign="center">
          <Text>© 2023 My Blog. All rights reserved.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;