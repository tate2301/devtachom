import { Box, Heading, Text } from "@chakra-ui/react";

export default function HeadingSection({title, tagline}: any) {
    return(
        <Box marginX="auto" py={4} mt={16}>
            <Heading as="h1" fontSize={"4xl"} fontWeight="bold">
                {title}
            </Heading>
            <Text fontSize={{base: "xl", md: "2xl"}} mt={2}>
                {tagline}
            </Text>
        </Box>
    );
}