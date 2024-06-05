import { useState } from "react";
import { Container, VStack, Heading, Box, Input, Textarea, Button, FormControl, FormLabel, FormErrorMessage, Image, useToast, useColorModeValue } from "@chakra-ui/react";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});
  const toast = useToast();

  const validateForm = () => {
    let formErrors = {};
    if (!title) formErrors.title = "Title is required";
    if (!content) formErrors.content = "Content is required";
    if (!image) formErrors.image = "Image is required";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically handle the form submission, e.g., send the data to a server
      toast({
        title: "Post created.",
        description: "Your blog post has been successfully created.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setTitle("");
      setContent("");
      setImage(null);
    }
  };

  return (
    <Container centerContent maxW="container.md" py={10} bg={useColorModeValue("white", "gray.800")} color={useColorModeValue("black", "white")}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>Add New Post</Heading>
        </Box>
        <Box as="form" onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <FormControl isInvalid={errors.title}>
              <FormLabel htmlFor="title">Title</FormLabel>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <FormErrorMessage>{errors.title}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.content}>
              <FormLabel htmlFor="content">Content</FormLabel>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <FormErrorMessage>{errors.content}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.image}>
              <FormLabel htmlFor="image">Image</FormLabel>
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />
              {image && (
                <Image
                  src={URL.createObjectURL(image)}
                  alt="Selected Image"
                  borderRadius="md"
                  mt={4}
                />
              )}
              <FormErrorMessage>{errors.image}</FormErrorMessage>
            </FormControl>
            <Button type="submit" colorScheme="teal" size="lg" width="full">
              Submit
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default AddPost;