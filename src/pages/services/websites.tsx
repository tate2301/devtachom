import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Divider, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react"
import Head from "next/head";
import CapabilitiesSection from "../../components/sections/CapabilitesSection";
import HeadingSection from "../../components/sections/HeadingSection";

export default function Websites() {
  return(
    <Box>
      <Head>
        <title>Websites | Tachom</title>
        <script
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'UA-195034074-1');
                    gtag('config', 'AW-384017805');  
                    gtag('event', 'conversion', {'send_to': 'AW-384017805/1pXaCPC7wZECEI3LjrcB'});
                  
                `,
            }}
          />
      </Head>
        <Flex 
            color="gray.900"
            px={4} 
            backgroundColor={"green.100"}
            style={{height: "100vh"}}>
            <Grid templateColumns={{base:"repeat(1, 1fr)", md: "repeat(2, 1fr)"}} maxWidth={1280} w="full" marginX="auto" marginY={"auto"} h="auto">
                <Box mt={{base: 16, md: 0}} pr={{base: 0, lg: 12}}>
                    <Text my={4} fontWeight="semibold">WEBSITE DEVELOPMENT</Text>
                    <Heading
                        as="h1"
                        fontWeight="bold"
                        fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                        >
                            Get your business online!
                        </Heading>
                        <Text
                            my={8}
                            fontSize={{ base: 'lg', md: '2xl' }}
                            py={2}>
                                We create websites that are both functional and energising, providing users with 
                                a holistic experience that will make them want to take action.
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
                <Flex mt={{base: 16, md: 0}}>
                  <Box h={400} maxWidth={600} marginX="auto" marginY={"auto"}>
                    <Image h="full" w="full" objectFit="cover" objectPosition="top" marginX="auto" src="https://cdn.dribbble.com/users/1720295/screenshots/14465398/media/4e8044a679f6dcc5a8e646b325b8fb8e.png?compress=1&resize=800x600" />
                  </Box>
                </Flex>
            </Grid>
        </Flex>

      <Box maxWidth={1280} marginX="auto" p={4}>
        
        <Box rounded={"lg"} my={16}>
          <Grid templateColumns={{base:"repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)"}} gap={12} mt={32}>
            <Box>
              <Heading as="h1" fontSize="xl">Performance</Heading>
              <Text mt={4}>
                We build websites using a super modern tech stack and static / server rendering, 
                giving your website unparalleled performance.
              </Text>
            </Box>

            <Box>
              <Heading as="h1" fontSize="xl">Accessibility</Heading>
              <Text mt={4}>
                We use a set of tools during our design and development process to ensure your 
                site is effectively usable by a wide range of people.
              </Text>
            </Box>

            <Box>
              <Heading as="h1" fontSize="xl">SEO</Heading>
              <Text mt={4}>
                We pay particular attention to technical SEO, including things like structured and 
                meta data to keep you ranking high on Google.
              </Text>
            </Box>

            <Box>
              <Heading as="h1" fontSize="xl">SSL</Heading>
              <Text mt={4}>
                Sites deployed using our stack come with free Let’s Encrypt SSL, saving you 
                hundreds of dollars a year.
              </Text>
            </Box>

            <Box>
              <Heading as="h1" fontSize="xl">Continous Deployment</Heading>
              <Text mt={4}>
                Forget copying files to a server. Continuous deployment integrations mean your 
                site will automatically deploy every time you commit.
              </Text>
            </Box>

            <Box>
              <Heading as="h1" fontSize="xl">Content Editing</Heading>
              <Text mt={4}>
                We use a headless CMS, meaning you and your team can edit your content and images 
                on the fly, no coding required.
              </Text>
            </Box>
          </Grid>
        </Box>
        <Box fontSize="lg" my={32}>
          <Box backgroundColor={"gray.900"} color="gray.50" py={16} px={8}>
            <Heading as="h1" fontSize="3xl">Our approach</Heading>
            <Text mt={4}>
              First we define the marketplace pressures, emerging trends and business objectives of 
              your brand. Next we speak with customer and non-customers alike to define opportunities
              to transform your customer experience. Those opportunities quickly transition into 
              holistic design and experience concepts that point the way to the future of your brand. 
              With an eye towards business realities, technical platforms and customer needs, we 
              create an experience roadmap that becomes a digital blueprint for your organization's 
              digital transformation. Then, we design, build and iterate with user testing guiding us 
              along the way.
            </Text>
          </Box>
          <Box h={96}>
            <Image h={96} w="full" objectFit="cover" src="https://images.pexels.com/photos/4939620/pexels-photo-4939620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          </Box>
        </Box>
        <Box fontSize="lg">
          <Divider my={32} />
            <Heading as="h1" fontSize="3xl">Design</Heading>

            <Grid templateColumns={{base:"repeat(1, 1fr)", md: "repeat(2, 1fr)"}} gap={12} mt={8}>
              <Box>
                <Box>
                  <Image
                    width={"100%"}
                    marginY={"auto"}
                    rounded={"md"}
                    src={"https://cdn.dribbble.com/users/127419/screenshots/9023267/media/26ab7fe1986d0ad5ee2dc712c5045e5d.jpg?compress=1&resize=800x600"}/>
                </Box>
                <Box fontSize={"lg"} marginY={"auto"} mt={8}>
                  <Text as={"h1"} fontSize={"2xl"} fontWeight="medium" mt={2}>UI/UX Design</Text>
                  <Text color="gray.600">Defining the user experience</Text>
                  <Text my={4}>
                    We’ll create wireframes that map out the new website experience based on the architecture defined 
                    in your brief and our discussions.
                  </Text>
                </Box>
              </Box>

              <Box>
                <Box>
                  <Image
                    width={"100%"}
                    marginY={"auto"}
                    rounded={"md"}
                    src={"https://cdn.dribbble.com/users/757683/screenshots/10841073/media/5f571b4289c8adcfbf41133e6f383307.jpg?compress=1&resize=800x600"}/>
                </Box>
                <Box fontSize={"lg"} marginY={"auto"} mt={8}>
                  <Text as={"h1"} fontSize={"2xl"} fontWeight="medium" mt={2}>Design Systems</Text>
                  <Text color="gray.600">Structuring our design</Text>
                  <Text my={4}>
                    We’ll design the new site as scalable as possible, starting with a component-based design system 
                    so pages can be built seamlessly.
                  </Text>
                </Box>
              </Box>
            </Grid>
        </Box>
        <Box fontSize="lg">
          <Divider my={32} />
            <Grid templateColumns={{base:"repeat(1, 1fr)", md: "repeat(2, 1fr)"}} gap={8} my={32}>
              <Box p={{base: 0, md: 8}}>
                <Image
                  width={"100%"}
                  marginY={"auto"}
                  rounded={"md"}
                  src={"https://cdn.dribbble.com/users/2125046/screenshots/14991399/media/0ef3071d295d3b44656c903c887e6a27.jpg?compress=1&resize=800x600"}/>
              </Box>
              <Box fontSize={"lg"} marginY={"auto"}>
                <Text color="gray.600">The ultimate deliverable</Text>
                <Heading as={"h1"} fontSize={"3xl"} my={8} >A stunning website</Heading>
                <Text>
                  By the end of our process, you get to share a brand-spanking new, beautiful website you’re 
                  proud of, reflective of who you are and remarkably easy to navigate.
                </Text>
              </Box>
            </Grid>
          <Divider my={32} />
        </Box>
        <Flex justify="center" flexWrap="wrap" fontSize="lg" rounded={"lg"} my={16} p={16} backgroundColor="green.200">
          <Box w="3/4" textAlign="center">
            <Image src={"/img/urban-line-blocks.svg"} h="40" marginX="auto" my={16} />
            <Heading as="h1" fontSize="3xl">Curious about our technology?.</Heading>
            <Button
                mt={8}
                marginX="auto"
                leftIcon={<ArrowForwardIcon />}
                size="sm"
                rounded="full">
                  Find out here
            </Button>
          </Box>
        </Flex>
        <Box fontSize="lg" rounded={"lg"}>
          <Divider my={32} />
            <Heading as="h1" fontSize="3xl">You’re in good company</Heading>
            <Text mt={2}>We use the industry's best tools and platforms.</Text>
            <Grid templateColumns={{base:"repeat(1, 1fr)", md: "repeat(2, 1fr)", xl: "repeat(4, 1fr)"}} gap={8} my={16}>
              <Box p={8}>
                <Image src={"https://jellypepper.com/_next/image?url=%2Fvendors%2Fmailchimp.svg&w=256&q=100"} />
              </Box>
              <Box p={8}>
                <Image src={"https://jellypepper.com/_next/image?url=%2Fvendors%2Fwebflow.svg&w=256&q=100"} />
              </Box>
              <Box p={8}>
                <Image src={"https://jellypepper.com/_next/image?url=%2Fvendors%2Fprismic.svg&w=256&q=100"} />
              </Box>
              <Box p={8}>
                <Image src={"https://jellypepper.com/_next/image?url=%2Fvendors%2Fgatsby.svg&w=256&q=100"} />
              </Box>
            </Grid>
          <Divider my={32} />
        </Box>
        <CapabilitiesSection />
      </Box>
      
    </Box>
  )
}

