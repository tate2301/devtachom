import { Box, Button, Flex, Grid, Heading, Image, Tag, Text } from "@chakra-ui/react";

export default function Jumbotron(props: any) {
    return (
        <Flex 
            color="gray.900"
            px={4} 
            style={{height: "100vh"}}>
            <Grid textAlign="center" templateColumns={{base:"repeat(1, 1fr)"}} maxWidth={720} w="full" marginX="auto" marginY={"auto"}>
                <Box mt={{base: 16, md: 0}} pr={{base: 0, lg: 12}}>
                    <Text my={4} fontSize="sm" fontWeight="semibold">TACHOM DEVELOPERS</Text>
                    <Heading
                        as="h1"
                        fontWeight="bold"
                        fontSize={{ base: '3xl', sm: '4xl', md: '7xl' }}
                        >
                          We drive digital transformation.</Heading>
                        <Text
                            my={8}
                            fontSize={{ base: 'lg', md: '2xl' }}
                            py={2}>
                                We work with clients end-to-end, from defining and enabling the vision, 
                                to ensuring ongoing market relevance. Our diverse teams lead with empathy, data and creativity—always in service of the experience.
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

            </Grid>
        </Flex>
    )
}