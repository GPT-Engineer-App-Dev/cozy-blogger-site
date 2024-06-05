import { useState } from "react";
import { Container, Text, VStack, Heading, Box, Image, Link, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useColorModeValue } from "@chakra-ui/react";

const Index = () => {
  const [postToDelete, setPostToDelete] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDeleteClick = (post) => {
    setPostToDelete(post);
    onOpen();
  };

  const confirmDelete = () => {
    // Logic to delete the post from the list
    console.log("Deleting post:", postToDelete);
    onClose();
  };

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
              <Button colorScheme="red" onClick={() => handleDeleteClick("Post Title 1")}>Delete</Button>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">Post Title 2</Heading>
              <Text mt={2}>This is a summary of the second blog post. It gives a brief overview of the content...</Text>
              <Link color="teal.500" href="#">Read more</Link>
              <Button colorScheme="red" onClick={() => handleDeleteClick("Post Title 2")}>Delete</Button>
            </Box>
          </VStack>
        </Box>
        <Box textAlign="center">
          <Text>© 2023 My Blog. All rights reserved.</Text>
        </Box>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Delete</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Are you sure you want to delete this post?
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={confirmDelete}>
              Delete
            </Button>
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Index;