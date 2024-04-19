// Complete the Index page component for a job matching platform
import { Box, Button, Flex, FormControl, FormLabel, Input, Link, Stack, Text, useToast } from "@chakra-ui/react";
import { FaFacebook, FaGoogle, FaLinkedin, FaMapMarkerAlt, FaSearch, FaSignInAlt } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleLogin = () => {
    toast({
      title: "Login Successful",
      description: "You have successfully logged in.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Flex minHeight="100vh" width="full" align="center" justifyContent="center">
      <Box borderWidth={1} px={4} width="full" maxWidth="500px" borderRadius={4} textAlign="center" boxShadow="lg">
        <Box p={4}>
          <Box textAlign="center">
            <Text fontSize="2xl" fontWeight="bold">
              Welcome to JobMatch
            </Text>
          </Box>
          <Box my={8} textAlign="left">
            <form>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Enter your email" />
              </FormControl>
              <FormControl isRequired mt={6}>
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="Enter your password" />
              </FormControl>
              <Button width="full" mt={4} onClick={handleLogin} rightIcon={<FaSignInAlt />}>
                Sign In
              </Button>
              <Flex align="center" justify="center" mt={4}>
                <Text fontSize="sm">Or continue with</Text>
              </Flex>
              <Flex align="center" justify="center" mt={2}>
                <Button mx={1} leftIcon={<FaGoogle />} variant="outline">
                  Google
                </Button>
                <Button mx={1} leftIcon={<FaFacebook />} variant="outline">
                  Facebook
                </Button>
                <Button mx={1} leftIcon={<FaLinkedin />} variant="outline">
                  LinkedIn
                </Button>
              </Flex>
              <Flex align="center" justify="center" mt={4}>
                <Link color="teal.500">Forgot password?</Link>
              </Flex>
              <Flex align="center" justify="center" mt={2}>
                <Text fontSize="sm">Don't have an account?</Text>
                <Link color="teal.500" ml={2}>
                  Sign Up
                </Link>
              </Flex>
            </form>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Index;
