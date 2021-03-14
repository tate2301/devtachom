import { Box, Button, Flex, Heading, Image, Tag, Text } from "@chakra-ui/react";

export default function Jumbotron(props: any) {
    return (
        <Flex 
            color="gray.900"
            px={4} 
            {...props} 
            backgroundColor={"yellow.500"}
            style={{height: "90vh"}}>
            <Box maxWidth={1280} w="full" marginX="auto" marginY={"auto"} h="auto">
                <Box maxWidth={550}>
                    <Heading
                        as="h1"
                        fontWeight="bold"
                        fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
                        >
                            We've got the oomph!
                        </Heading>
                        <Text
                            my={8}
                            fontSize={{ base: 'lg', md: '2xl' }}
                            py={2}>
                                Tachom helps small businesses do big things, with the 
                                right tools and guidance every step of the way.
                        </Text>
                        <Button 
                            colorScheme={"white"} 
                            size="lg"
                            backgroundColor={"gray.900"}
                            rounded="none"
                            px={8}
                            >
                                Let's talk --&gt;
                        </Button>
                </Box>
            </Box>
        </Flex>
    )
}