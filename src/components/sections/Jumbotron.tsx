import { Box, Button, Fade, Flex, Grid, Heading, Image, Tag, Text } from "@chakra-ui/react";

export default function Jumbotron(props: any) {
    return (
        <Flex
            color="gray.900"
            backgroundColor="brand.gray_background"
            px={4}
            style={{height: "120vh"}}>
            <Grid textAlign="center" templateColumns={{base:"repeat(1, 1fr)"}} maxWidth={720} w="full" marginX="auto" marginY={"auto"}>
                <Box mt={{base: 16, md: 0}} pr={{base: 0, lg: 12}}>
                    <Text my={4} fontSize="sm" fontWeight="semibold">TACHOM DEVELOPERS</Text>
                    <Fade in={true}>
                        <Heading
                            as="h1"
                            fontWeight="bold"
                            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                        >
                          Digital Products You'll Love!
                        </Heading>
                    </Fade>
                    <Fade in={true}>
                        <Text
                            my={8}
                            fontSize={{ base: 'lg', md: '2xl' }}
                            py={2}>
                                We are a hybrid team of designers, developers, project managers, and strategists - that likes to code while we design.
                        </Text>
                    </Fade>

                    <Fade in={true}>
                        <Button
                            colorScheme={"yellow"}
                            size="lg"
                            rounded="full"
                            px={8}
                            >
                                Let's talk --&gt;
                        </Button>
                    </Fade>
                </Box>

            </Grid>
        </Flex>
    )
}