import {
    Box,
  Flex,
    Grid,
    Text
  } from '@chakra-ui/react';
import HeadingSection from './HeadingSection';


  export default function Feature() {
    return (
      <Flex maxWidth={1280} marginX="auto" h={"70vh"} px={4} my={16}>
        <Grid marginY="auto" templateColumns={{base:"repeat(1, 1fr)", md: "repeat(1, 1fr)"}} gap={8}>
          <Box>
            <Text fontSize={{base: "lg", md: "3xl"}}>
              We build digital products that get attention. We are a young,
              fast-paced creative agency that brings the finest minds together
              to build brands and digital products. Our team
              has all the know-how and ambition to mobilize businesses and
              transform their goals into unforgettable end results.
            </Text>
          </Box>
        </Grid>
      </Flex>
    );
}