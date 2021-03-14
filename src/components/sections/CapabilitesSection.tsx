import { Box, Divider, Flex, Grid, Heading, Spacer, Text } from "@chakra-ui/layout";
import HeadingSection from "./HeadingSection";

export default function CapabilitiesSection() {
    return(
        <>
            <Heading as="h1" fontSize="3xl">Our capabilities</Heading>
            <Text fontSize="xl" mt={2}>
                As a full service digital agency, Tachom uniquely provides our clients with integrated multidisciplinary teams across these threee areas.
            </Text>

            <Grid fontSize={"lg"} my={8} templateColumns={{base:"repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)"}} gap={4}>
                <Flex 
                    h={280} 
                    flexDirection="column" 
                    justifyContent="between" 
                    backgroundColor={"green.500"} 
                    color="white" p={8}>
                        <Box>
                            <Heading fontSize={"xl"}>Strategy</Heading>
                        </Box>
                        <Divider my={4} />
                        <Box>
                            <Text>
                                Competition Analysis <br/>
                                Adjacent Industry <br/>
                                Product & Service Innovation <br/>
                                Service Design <br/>
                                Data Science <br/>

                            </Text>
                        </Box>
                </Flex>
                <Flex 
                    h={280} 
                    flexDirection="column" 
                    justifyContent="between" 
                    backgroundColor={"green.500"} 
                    color="white" p={8}>
                        <Box>
                            <Heading fontSize={"xl"}>Design</Heading>
                        </Box>
                        <Divider my={4} />
                        <Box>
                            <Text>
                                Experience Design <br/>
                                UI Design <br/>
                                Moodboards <br/>
                                Design Systems <br/>
                                Information Architecture <br/>

                            </Text>
                        </Box>
                </Flex>
                <Flex 
                    h={280} 
                    flexDirection="column" 
                    justifyContent="between" 
                    backgroundColor={"green.500"} 
                    color="white" p={8}>
                        <Box>
                            <Heading fontSize={"xl"}>Engineering</Heading>
                        </Box>
                        <Divider my={4} />
                        <Box>
                            <Text>
                                Custom Enteprise Software <br/>
                                Enterprise Resource Planning <br/>
                                Mobile Applications <br/>
                                Customer Management Systems <br/>
                                Conversational UI & Bots

                            </Text>
                        </Box>
                </Flex>
            </Grid>
        </>
    )
}

