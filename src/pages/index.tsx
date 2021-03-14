import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import Feature from "../components/sections/Feature";
import HeadingSection from "../components/sections/HeadingSection";
import Jumbotron from "../components/sections/Jumbotron";
import ReportBanner from "../components/sections/ReportBanner";


const Home = () => {
  return (
    <Box mb={8} w="full">
      <Jumbotron />
      <ReportBanner />
      
      <Feature />

      <Box px={4} maxWidth={1280} marginX="auto">
        <Flex my={16} bg={"gray.900"} color="white" p={{base: 4, md: 12}}>
            <Box py={8} maxWidth={600}>
              <Heading as={"h1"} fontSize={"3xl"}>Give your business a headstart</Heading>
              <Text my={8} fontSize={"xl"}>
                Give your brand a home with a custom domain. Then create a website with built-in marketing tools to help you launch it.
              </Text>

              <Link  fontSize="xl" color="yellow.500" href="/services/branding">
                Branding ---&gt;
              </Link>
            </Box>
          </Flex>

        <Flex shadow="md" my={16} bg={"gray.900"} color="white" p={{base: 4, md: 12}}>
          <Box py={8} maxWidth={600}>
            <Heading as={"h1"} fontSize={"3xl"}>Create something customers love</Heading>
            <Text my={8} fontSize={"xl"}>
              Give your brand a home with a custom domain. Then create a website with built-in marketing tools to help you launch it.
            </Text>

            <Text mt={8}>
              <Link  fontSize="xl" color="yellow.500" href="/services/mobile">
                Mobile Applications ---&gt;
              </Link>
            </Text>
          </Box>
        </Flex>

        <Flex my={16} bg={"gray.900"} color="white" p={{base: 4, md: 12}}>
          <Box py={8} maxWidth={600}>
            <Heading as={"h1"} fontSize={"3xl"}>Get your business online</Heading>
            <Text my={8} fontSize={"xl"}>
              Give your brand a home with a custom domain. Then create a website with built-in marketing tools to help you launch it.
            </Text>

            <Text mt={8}>
              <Link  fontSize="xl" color="yellow.500" href="/services/websites">
                Website Development ---&gt;
              </Link>
            </Text>
          </Box>
        </Flex>

        <Flex my={16} bg={"gray.900"} color="white" p={{base: 4, md: 12}}>
          <Box py={8} maxWidth={600}>
            <Heading as={"h1"} fontSize={"3xl"}>Manage your business like a boss</Heading>
            <Text my={8} fontSize={"xl"}>
              Give your brand a home with a custom domain. Then create a website with built-in marketing tools to help you launch it.
            </Text>

            <Text mt={8}>
              <Link  fontSize="xl" color="yellow.500" href="/services/enterprise">
                Enterprise Software ---&gt;
              </Link>
            </Text>
          </Box>
        </Flex>
        
      </Box>
      <Box px={4} maxWidth={1280} marginX="auto">
        <HeadingSection
          title="Our thoughts"
          tagline="Read what our team has been thinking about."
        />
      </Box>      
    </Box>
  );
};

export default Home;
