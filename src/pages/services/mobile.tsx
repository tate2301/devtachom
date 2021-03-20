import { Box, Button, Divider, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react"
import Head from "next/head";
import CapabilitiesSection from "../../components/sections/CapabilitesSection";

export default function Websites() {
  return(
    <Box>
      <Head>
        <title>Mobile Applications | Tachom</title>
        <script dangerouslySetInnerHTML={{ __html: `{{
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Mobile Applications",
            "description": "We develop fast, snappy mobile apps that users love.",
            "provider": {
              "@type": "Organization",
              "name": "Tachom",
            }
          }}`}} />
      </Head>
      <Flex 
            color="gray.900"
            px={4} 
            backgroundColor={"blue.100"}
            style={{height: "100vh"}}>
            <Grid templateColumns={{base:"repeat(1, 1fr)", md: "repeat(2, 1fr)"}} maxWidth={1280} w="full" marginX="auto" marginY={"auto"} h="auto">
                <Box mt={{base: 16, md: 0}} pr={{base: 0, lg: 12}}>
                    <Text my={4} fontWeight="semibold">MOBILE APPLICATIONS</Text>
                    <Heading
                        as="h1"
                        fontWeight="bold"
                        fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                        >
                            Create something customers love
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
                    <Image h="full" w="full" objectFit="cover" objectPosition="top" marginX="auto" src="https://cdn.dribbble.com/users/1998175/screenshots/14454257/media/8a155e2e9e853b868663fcf57cca38f5.jpg?compress=1&resize=800x600" />
                  </Box>
                </Flex>
            </Grid>
        </Flex>
      <Box  maxWidth={1280} marginX="auto" p={4}>
          <Box rounded={"lg"} my={16}>
          <Grid templateColumns={{base:"repeat(1, 1fr)", md: "repeat(2, 1fr)"}} gap={12} mt={8}>
                <Box>
                  <Box>
                    <Image
                      width={"100%"}
                      marginY={"auto"}
                      rounded={"md"}
                      src={"https://cdn.dribbble.com/users/79914/screenshots/15211115/media/33b764acc1635d9dce83533a810b5eda.jpg?compress=1&resize=800x600"}/>
                  </Box>
                  <Box fontSize={"lg"} marginY={"auto"} mt={8}>
                    <Text as={"h1"} fontSize={"2xl"} fontWeight="medium" mt={2}>iOS Apps</Text>
                    <Text color="gray.600">Swift, SwiftUI, React Native and Expo</Text>
                  </Box>
                </Box>

                <Box>
                  <Box>
                    <Image
                      width={"100%"}
                      marginY={"auto"}
                      rounded={"md"}
                      src={"https://cdn.dribbble.com/users/348942/screenshots/14746228/media/f4c1effe2ad71a7a47434168a8d9fad0.png?compress=1&resize=800x600"}/>
                  </Box>
                  <Box fontSize={"lg"} marginY={"auto"} mt={8}>
                    <Text as={"h1"} fontSize={"2xl"} fontWeight="medium" mt={2}>Android Apps</Text>
                    <Text color="gray.600">Kotlin, Jetpack Tools, Flutter and React Native</Text>
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
            <Image h={96} w="full" objectFit="cover" src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          </Box>
        </Box>
        <Box fontSize="lg">
          <Divider my={32} />
            <Heading as="h1" fontSize="3xl">Product Strategy</Heading>
            <Text mt={4} maxWidth={500}>
              Design has a huge impact on whether people will enjoy using an app. It’s about finding the perfect balance 
              between being visually engaging and highly functional.
            </Text>

            <Grid templateColumns={{base:"repeat(1, 1fr)", md: "repeat(2, 1fr)"}} gap={12} mt={8}>
              <Box>
                <Box>
                  <Image
                    width={"100%"}
                    marginY={"auto"}
                    rounded={"md"}
                    src={"https://images.pexels.com/photos/3182765/pexels-photo-3182765.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}/>
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
                    src={"https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}/>
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
                    src={"https://cdn.dribbble.com/users/127419/screenshots/9023267/media/26ab7fe1986d0ad5ee2dc712c5045e5d.jpg?compress=1&resize=800x600"}/>
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
                    src={"https://cdn.dribbble.com/users/38195/screenshots/2938292/attachments/610287/google-play.png?compress=1&resize=800x600"}/>
                </Box>
                <Box fontSize={"lg"} marginY={"auto"} mt={8}>
                  <Text as={"h1"} fontSize={"2xl"} fontWeight="medium" mt={2}>Launch</Text>
                  <Text color="gray.600">Uploading to App stores</Text>
                  <Text my={4}>
                    Getting an app live on the web or submitting an app to the App Store can be a tricky process, but we 
                    will help you along the way to get your app published, so you can start monetizing.
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
                  src={"https://cdn.dribbble.com/users/1998175/screenshots/14454257/media/8a155e2e9e853b868663fcf57cca38f5.jpg?compress=1&resize=800x600"}/>
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
            <Grid templateColumns={{base:"repeat(1, 1fr)", md: "repeat(2, 1fr)", xl: "repeat(6, 1fr)"}} gap={8} my={16}>
              <Box p={8} h="auto">
                <Image marginY="auto" src={"https://developer.apple.com/assets/elements/icons/xcode-12/xcode-12-96x96.png"} />
              </Box>
              <Box p={8} h="auto">
                <Image marginY="auto" src={"https://developer.android.com/images/kotlin/optimized-for-kotlin/android-studio_72.png"} />
              </Box>
              <Box p={8}>
                <Image src={"https://developer.android.com/images/kotlin/kotlin-hero.svg"} />
              </Box>
              <Box p={8}>
                <Image src={"https://devimages-cdn.apple.com/wwdc-services/articles/images/65934949-67DA-47BB-A590-E5C84FA26FB8/256.png"} />
              </Box>
              <Box p={8}>
                <Image src={"https://reactnative.dev/img/header_logo.svg"} />
              </Box>
              <Box p={8}>
                <Image src={"/img/firebase-logo.svg"} />
              </Box>
            </Grid>
          <Divider my={32} />
        </Box>
        <CapabilitiesSection />
      </Box>
      
    </Box>
  )
}