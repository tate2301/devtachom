import { Button } from "@chakra-ui/button";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/layout";

export default function LetsWorkTogether() {
    return(
        <Flex backgroundColor="gray.100" mt={32} h={600}>
            <Box textAlign="center" maxWidth={1080} marginX="auto" marginY="auto" py={16}>
                <Heading fontSize={"4xl"} my={4}>Have a project in mind?</Heading>
                <Text fontSize={"2xl"}>Let's work together</Text>
                    <Button
                        as="a"
                        href="https://ojn1yd5k2bm.typeform.com/to/nA3tGPK2"
                        marginX="auto"
                        mt={8}
                        leftIcon={<ArrowForwardIcon />}
                        colorScheme="green"
                        rounded="full">
                            Start a project
                    </Button>
            </Box>
        </Flex>
    )
}