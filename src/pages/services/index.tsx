import { Box, Flex, Text, Spacer, Grid, Image, Heading, UnorderedList, ListItem, Button } from "@chakra-ui/react";
import Link from "next/link";
import HeadingSection from "../../components/sections/HeadingSection";
import Services from "../../components/sections/Services";

export default function Index() {
  return(
    <Box>
      <Flex 
            color="gray.900"
            px={4} 
            backgroundColor={"blue.100"}
            style={{height: "100vh"}}>
            <Grid textAlign="center" templateColumns={{base:"repeat(1, 1fr)"}} maxWidth={720} w="full" marginX="auto" marginY={"auto"}>
                <Box mt={{base: 16, md: 0}} pr={{base: 0, lg: 12}}>
                    <Text my={4} fontSize="sm" fontWeight="semibold">OUR SERVICES</Text>
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
      <Box maxWidth={1080} marginX="auto" p={4} mb={32}>
        <Services />
      </Box>
      
    </Box>
  )
}

