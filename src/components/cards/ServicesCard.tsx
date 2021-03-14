import { Box, Heading, Text, Image, Grid, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function ServicesCard({link, title, thumbnail, description, linkText}: any) {
    return(
        <Grid templateColumns={{base:"repeat(1, 1fr)", md: "repeat(2, 1fr)"}} gap={12}
            rounded={"lg"} 
            p={8}>
            <Image
                height={300}
                objectFit="cover"
                src={thumbnail}
                />
            <Flex h="full">
                <Flex my="auto" direction="column">
                    <Box textDecoration="none">
                        <Heading  as={"h1"} fontSize={{ base: 'lg', md: '4xl' }}>
                            {title}
                        </Heading>
                        <Text my={2} fontSize="xl">
                            {description}
                        </Text>
                    </Box>
                    <Link href={link}>
                        <a>
                            <Flex>
                                <Heading my={8} as={"h1"} fontSize={"xl"}>
                                    {linkText} 
                                </Heading> 
                                <Text my={"auto"} ml={2}> ---&gt;</Text>
                            </Flex>
                        </a>
                    </Link>
                </Flex>
            </Flex>
        </Grid>
    );
}