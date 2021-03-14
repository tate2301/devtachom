import {
    Box,
  Flex,
  Grid,
    Heading,
    Text
  } from '@chakra-ui/react';
import HeadingSection from './HeadingSection';


  export default function Feature() {
    return (
      <Box maxWidth={1280} marginX="auto" px={4} my={16}>
        <HeadingSection 
          title={"We’re a full-service agency for disruptive companies and startups"} 
          tagline="" />
        <Grid templateColumns={{base:"repeat(1, 1fr)", md: "repeat(2, 1fr)"}} gap={8}>
          <Box>
            <Text fontSize={{base: "lg", md: "xl"}}>
              We’re a team of designers and developers who spend our time 
              solving problems and telling the stories of great companies. 
              We help you think more deeply about what you’re offering 
              people through your brand, products and services.
            </Text>
            <Text fontSize={{base: "lg", md: "xl"}} mt={8}>
              Our mission is to work with companies who want to change the 
              game. We want to help amazing tech startups get from zero to 
              one and create beautiful things that make life better.
            </Text>
          </Box>
          <Box>
            <Text fontSize={{base: "lg", md: "xl"}}>
              Once you have a brilliant idea, we can work with you on a gameplan 
              (strategy), create a gorgeous logo and styleguide (branding), design 
              a beautiful, functional app (product design), turn it into 
              high-performance code (development) and then help people find out 
              about it (motion design).
            </Text>
          </Box>
        </Grid>
      </Box>
    );
}