import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Divider, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react"
import Head from "next/head";
import CapabilitiesSection from "../../components/sections/CapabilitesSection";

export default function Websites() {
  return(
    <Box>
      <Head>
        <title>Enterprise Software | Tachom</title>
      </Head>
      <Flex 
            color="gray.900"
            px={4} 
            style={{height: "100vh"}}>
            <Grid templateColumns={{base:"repeat(1, 1fr)", md: "repeat(2, 1fr)"}} maxWidth={1280} w="full" marginX="auto" marginY={"auto"} h="auto">
                <Box mt={{base: 16, md: 0}} pr={{base: 0, lg: 12}}>
                    <Text my={4} fontWeight="semibold">ENTERPRISE SOFTWARE</Text>
                    <Heading
                        as="h1"
                        fontWeight="bold"
                        fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                        >
                            Manage your business like a boss
                        </Heading>
                        <Text
                            my={8}
                            fontSize={{ base: 'lg', md: '2xl' }}
                            py={2}>
                                We design and build robust digital platforms and apps that reflect your vision and 
                                turn every interaction into a lovable experience.
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
                    <Image h="full" w="full" objectFit="cover" objectPosition="top" marginX="auto" src="https://jellypepper.com/_next/image?url=%2Fimages%2Fproduct-deliverable.png&w=1920&q=100" />
                  </Box>
                </Flex>
            </Grid>
        </Flex>
      
      <Box maxWidth={1280} marginX="auto" p={4}>
        <Box rounded={"lg"} my={16}>
          <Grid templateColumns={{base:"repeat(1, 1fr)", md: "repeat(2, 1fr)"}} gap={12} mt={8}>
                <Box>
                  <Box>
                    <Image
                      width={"100%"}
                      marginY={"auto"}
                      rounded={"md"}
                      src={"https://cdn.dribbble.com/users/31829/screenshots/14898521/media/09413f2f02fe45f27dfc1e0031a100e3.png?compress=1&resize=800x600"}/>
                  </Box>
                  <Box fontSize={"lg"} marginY={"auto"} mt={8}>
                    <Text as={"h1"} fontSize={"2xl"} fontWeight="medium" mt={2}>Desktop Apps</Text>
                    <Text color="gray.600">.NET, Java, React and Next</Text>
                    <Text my={4}>
                      For responsive web applications, we build Progressive Web Applications (PWAs) with Next.js. Building on 
                      React, Next PWAs are able to handle internationalisation, image optimisation, incremental static generation, 
                      code-splitting and more
                    </Text>
                  </Box>
                </Box>

                <Box>
                  <Box>
                    <Image
                      width={"100%"}
                      marginY={"auto"}
                      rounded={"md"}
                      src={"https://cdn.dribbble.com/users/115364/screenshots/13974339/media/e2e94d3482daf829079ed5182d8bba2e.jpg?compress=1&resize=800x600"}/>
                  </Box>
                  <Box fontSize={"lg"} marginY={"auto"} mt={8}>
                    <Text as={"h1"} fontSize={"2xl"} fontWeight="medium" mt={2}>Mobile Apps</Text>
                    <Text color="gray.600">Kotlin, Android Jetpack, SwitftUI, React Native</Text>
                    <Text my={4}>
                      Rather than building and maintaining two codebases using different languages, we use React Native to 
                      create native apps for Android and iOS using React. We combine this with Expo, a platform to assist 
                      with the build process.
                    </Text>
                  </Box>
              </Box>
            </Grid>  
        </Box>
        <Box fontSize="lg" my={32}>
          <Box backgroundColor={"gray.900"} color="gray.50" py={16} px={8}>
            <Heading as="h1" fontSize="3xl">Our approach</Heading>
            <Text mt={4}>
              We approach technology solutions with multiple dimensions of collaboration. First and foremost, 
              we partner with you to create the best solution to your business. We also collaborate seamlessly 
              with our Design team, ensuring the technology solution reflects your brand’s promise and experience. 
              We use Agile best practices such as Sprint-based development and quick releases of functionality. 
              In short, we’re iterative, transparent, and believe the simplest solution is usually the best.
            </Text>
          </Box>
          <Box h={96}>
            <Image h={96} w="full" objectFit="cover" src="https://images.pexels.com/photos/5727892/pexels-photo-5727892.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          </Box>
        </Box>
        <Box fontSize="lg">
          <Divider my={32} />
            <Heading as="h1" fontSize="3xl">Product Strategy</Heading>
            <Text mt={4} maxWidth={500}>
              A good product strategy helps you turn your vision into a roadmap. It lays out the foundations for the 
              design and development phases. We have two key approaches...
            </Text>

            <Grid templateColumns={{base:"repeat(1, 1fr)", md: "repeat(2, 1fr)"}} gap={12} mt={8}>
              <Box>
                <Box>
                  <Image
                    width={"100%"}
                    marginY={"auto"}
                    rounded={"md"}
                    src={"https://jellypepper.com/_next/image?url=%2Fimages%2Fproduct-strategy-thinking.png&w=1920&q=100"}/>
                </Box>
                <Box fontSize={"lg"} marginY={"auto"} mt={8}>
                  <Text as={"h1"} fontSize={"2xl"} fontWeight="medium" mt={2}>Design Thinking Workshops</Text>
                  <Text color="gray.600">For big, abstract ideas or new products</Text>
                  <Text my={4}>
                    Design Thinking workshops consist of employing logic, imagination, intuition and systemic reasoning 
                    to solve tricky problems. We explore things like the product vision, user personas, user journeys 
                    and a roadmap to get it up and running.
                  </Text>
                </Box>
              </Box>

              <Box>
                <Box>
                  <Image
                    width={"100%"}
                    marginY={"auto"}
                    rounded={"md"}
                    src={"https://jellypepper.com/_next/image?url=%2Fimages%2Fproduct-strategy-sprints.png&w=1920&q=100"}/>
                </Box>
                <Box fontSize={"lg"} marginY={"auto"} mt={8}>
                  <Text as={"h1"} fontSize={"2xl"} fontWeight="medium" mt={2}>Design Sprints</Text>
                  <Text color="gray.600">For focused and directed ideation</Text>
                  <Text my={4}>
                    Design Sprints take traditional design thinking methodologies and compress them into a five-day 
                    process to answer critical business questions with sketching, prototyping and testing. Learn more 
                    about how Design Sprints work.
                  </Text>
                </Box>
              </Box>
            </Grid>

            <Grid templateColumns={{base:"repeat(1, 1fr)", md: "repeat(2, 1fr)"}} gap={12} mt={8}>
              <Box>
                <Box>
                  <Image
                    width={"100%"}
                    marginY={"auto"}
                    rounded={"md"}
                    src={"https://jellypepper.com/_next/image?url=%2Fimages%2Fproduct-design-ux.png&w=1920&q=100"}/>
                </Box>
                <Box fontSize={"lg"} marginY={"auto"} mt={8}>
                  <Text as={"h1"} fontSize={"2xl"} fontWeight="medium" mt={2}>UX Design</Text>
                  <Text color="gray.600">Designing the experience</Text>
                  <Text my={4}>
                    We’ll create wireframes that map out the new app experience based on the user journeys and key flows 
                    developed during the strategy phase.
                  </Text>
                </Box>
              </Box>

              <Box>
                <Box>
                  <Image
                    width={"100%"}
                    marginY={"auto"}
                    rounded={"md"}
                    src={"https://jellypepper.com/_next/image?url=%2Fimages%2Fbrand-identity-moodboards.png&w=1920&q=100"}/>
                </Box>
                <Box fontSize={"lg"} marginY={"auto"} mt={8}>
                  <Text as={"h1"} fontSize={"2xl"} fontWeight="medium" mt={2}>Moodboards</Text>
                  <Text color="gray.600">Exploring the look and feel</Text>
                  <Text my={4}>
                    We’ll assemble three distinct routes with art direction for the new app. This will help set the overall 
                    tone of the new product and assist in the design stage.
                  </Text>
                </Box>
              </Box>
            </Grid>
        </Box>

        <Box fontSize="lg">
          <Divider my={32} />
            <Grid templateColumns={{base:"repeat(1, 1fr)", md: "repeat(2, 1fr)"}} gap={12} my={32}>
              <Box p={{base: 0, md: 8}}>
                <Image
                  width={"100%"}
                  marginY={"auto"}
                  rounded={"md"}
                  src={"https://jellypepper.com/_next/image?url=%2Fimages%2Fproduct-deliverable.png&w=1920&q=100"}/>
              </Box>
              <Box fontSize={"lg"} marginY={"auto"}>
                <Text color="gray.600">The ultimate deliverable</Text>
                <Heading as={"h1"} fontSize={"3xl"} my={8} >A product people love</Heading>
                <Text>
                  Et voilà. By the end of the process, you get a digital product that matches your vision and 
                  that your audience will absolutely love using.
                </Text>
              </Box>
            </Grid>
            
        </Box>
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

export const config = { amp: true }
