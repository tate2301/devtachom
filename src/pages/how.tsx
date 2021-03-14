import { Box, Text, Grid } from "@chakra-ui/react";
import { Image, Flex, ListItem, UnorderedList, Heading } from "@chakra-ui/react"
import Head from "next/head";
import HeadingSection from "../components/sections/HeadingSection";

export default function Process(props: any) {
  return(
    <Box marginX="auto" {...props}>
      <Head>
        <title>Our Process | Tachom</title>
      </Head>
      <Flex maxWidth={720} h={400} marginX="auto" mb={16}>
        <Box marginY="auto" textAlign="center">
          <Heading as="h1" fontSize={{base:"3xl", md: "5xl"}}>We empower brands for true digital transformation</Heading>
          <Text fontSize={"xl"}>
            We work with clients end-to-end, from defining and enabling the vision, to ensuring ongoing market relevance.
          </Text>
        </Box>
      </Flex>
      <Grid maxWidth={1280} p={4} marginX="auto" templateColumns={{base:"repeat(1, 1fr)", md: "repeat(3, 1fr)"}} gap={{base: 8, md: 16}} my={32}>
        <Box>
          <Box h={400} marginY="auto">
            <Image
              h="full"
              w="full"
              objectFit="cover"
              width={"100%"}
              marginY={"auto"}
              rounded={"md"}
              src={"https://www.bluelabellabs.com/wp-content/uploads/2018/08/img-process1.jpg"}/>
          </Box>
          <Box fontSize={"md"} marginY={"auto"}>
            <Heading as={"h1"} fontSize={"2xl"} my={8} >Design Sprints</Heading>
            <Text>
              Inspired by the now-famous Google Ventures methodology, each project starts with an intense,
              5-day discovery process that ends with empirical validation with real clients.
            </Text>
          </Box>
      
        </Box>  
        <Box>
          <Box h={400} marginY="auto">
            <Image
              h="full"
              w="full"
              objectFit="cover"
              width={"100%"}
              marginY={"auto"}
              rounded={"md"}
              src={"https://www.bluelabellabs.com/wp-content/uploads/2018/08/img-process3.jpg"}/>
          </Box>
          <Box fontSize={"md"} marginY={"auto"}>
            <Heading as={"h1"} fontSize={"2xl"} my={8}>Develop & Test</Heading>
            <Text>
              Our scrum-based Agile development methodology ensures
              frequent builds and gives you plenty of time to test and adjust.
            </Text>
          </Box>
      
        </Box>  
        <Box>
          <Box h={400} marginY="auto">
            <Image
              h="full"
              w="full"
              objectFit="cover"
              width={"100%"}
              marginY={"auto"}
              rounded={"md"}
              src={"https://www.bluelabellabs.com/wp-content/uploads/2018/08/img-process3.jpg"}/>
          </Box>
          <Box fontSize={"md"} marginY={"auto"}>
            <Heading as={"h1"} fontSize={"2xl"} my={8}>Product Launch</Heading>
            <Text>
              Getting an app live on the web or submitting an app to the App Store can be a tricky process,
              but we will help you along the way to get your app published, so you can start monetizing.
            </Text>
          </Box>
      
        </Box>  
      
      </Grid>
      <Flex backgroundColor="gray.800" color="white" h={400}>
        <Box maxWidth={1280} marginX="auto" marginY="auto" p={4}>
          <Heading as="h1" fontSize={"4xl"}>Everything you need to be everywhere you want.</Heading>
          <Text fontSize={"lg"}>From email campaigns to Yelp listings, Digital Marketing Suite has everything your business needs to keep customers informed and engaged.</Text>
        </Box>
      </Flex>
    </Box>
  )
}