import { Box, Button, Divider, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react"
import Head from "next/head";
import CapabilitiesSection from "../../components/sections/CapabilitesSection";

export default function Branding() {
  return(
    <Box>
      <Head>
        <title>Branding | Tachom</title>
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
            style={{height: "100vh"}}>
            <Grid templateColumns={{base:"repeat(1, 1fr)", md: "repeat(2, 1fr)"}} maxWidth={1280} w="full" marginX="auto" marginY={"auto"} h="auto">
                <Box mt={{base: 16, md: 0}} pr={{base: 0, lg: 12}}>
                    <Text my={4} fontWeight="semibold">BRANDING</Text>
                    <Heading
                        as="h1"
                        fontWeight="bold"
                        fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                        >
                            Give your business a headstart
                        </Heading>
                        <Text
                            my={8}
                            fontSize={{ base: 'lg', md: '2xl' }}
                            py={2}>
                                The process of refreshing an existing brand identity or creating one from scratch is a 
                                rare opportunity to step back from the day-to-day and do some big picture thinking.
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
                    <Image h="full" w="full" objectFit="cover" objectPosition="top" marginX="auto" src="https://cdn.dribbble.com/users/958859/screenshots/14329344/media/64629c2f801ec69accdce8b302af8e56.jpg?compress=1&resize=800x600" />
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
                      src={"https://cdn.dribbble.com/users/1161944/screenshots/14716218/media/6a46b0d252684831976019754c40e361.png?compress=1&resize=800x600"}/>
                  </Box>
                  <Box fontSize={"lg"} marginY={"auto"} mt={8}>
                    <Text as={"h1"} fontSize={"2xl"} fontWeight="medium" mt={2}>Visual Identity</Text>
                    <Text my={4}>
                      Once we have a narrower field to play within, it’s time for us to suggest colours, typography, patterns, 
                      illustration and photography styles. This is where the direction starts to become more refined.
                    </Text>
                  </Box>
                </Box>

                <Box>
                  <Box>
                    <Image
                      width={"100%"}
                      marginY={"auto"}
                      rounded={"md"}
                      src={"https://cdn.dribbble.com/users/25514/screenshots/15186749/media/4b885580710b864171831f50682c8e3c.png?compress=1&resize=800x600"}/>
                  </Box>
                  <Box fontSize={"lg"} marginY={"auto"} mt={8}>
                    <Text as={"h1"} fontSize={"2xl"} fontWeight="medium" mt={2}>Visual Guidelines</Text>
                    <Text my={4}>
                      We wrap things up by finalising all visual elements and gathering everything into clear, easy-to-use guidelines 
                      with usage guidelines, do’s and dont’s that you can pass along to your team.
                    </Text>
                  </Box>
              </Box>
            </Grid>  
        </Box>
        <Box fontSize="lg" my={32}>
          <Box backgroundColor={"gray.900"} color="gray.50" py={16} px={8}>
            <Heading as="h1" fontSize="3xl">Our approach</Heading>
            <Text mt={4}>
              First we define the marketplace pressures, emerging trends and business objectives of your brand. Next we speak 
              with customer and non-customers alike to define opportunities to transform your customer experience. Those 
              opportunities quickly transition into holistic design and experience concepts that point the way to the 
              future of your brand. With an eye towards business realities, technical platforms and customer needs, we 
              create an experience roadmap that becomes a digital blueprint for your organization's digital transformation. 
              Then, we design, build and iterate with user testing guiding us along the way.
            </Text>
          </Box>
          <Box h={96}>
            <Image h={96} w="full" objectFit="cover" src="https://images.pexels.com/photos/3817644/pexels-photo-3817644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          </Box>
        </Box>
        <Box fontSize="lg">
          <Divider my={32} />
            <Heading as="h1" fontSize="3xl">Brand Strategy</Heading>
            <Text mt={4} maxWidth={500}>
              A brand strategy guides how your brand should speak, behave and feel like. It creates strong foundations 
              on which everything else is built, including your identity.
            </Text>

            <Grid templateColumns={{base:"repeat(1, 1fr)", md: "repeat(2, 1fr)"}} gap={12} mt={8}>
              <Box>
                <Box>
                  <Image
                    width={"100%"}
                    marginY={"auto"}
                    rounded={"md"}
                    src={"https://jellypepper.com/_next/image?url=%2Fimages%2Fbrand-strategy-research.png&w=1920&q=100"}/>
                </Box>
                <Box fontSize={"lg"} marginY={"auto"} mt={8}>
                  <Text as={"h1"} fontSize={"2xl"} fontWeight="medium" mt={2}>Research</Text>
                  <Text my={2}>
                    We typically start by doing tons of research. We conduct interviews, workshops and desk research 
                    to get to know everything about your business, your industry and your audiences.
                  </Text>
                </Box>
              </Box>

              <Box>
                <Box>
                  <Image
                    width={"100%"}
                    marginY={"auto"}
                    rounded={"md"}
                    src={"https://jellypepper.com/_next/image?url=%2Fimages%2Fbrand-strategy-recommendations.png&w=1920&q=100"}/>
                </Box>
                <Box fontSize={"lg"} marginY={"auto"} mt={8}>
                  <Text as={"h1"} fontSize={"2xl"} fontWeight="medium" mt={2}>Recommendations</Text>
                  <Text my={2}>
                    Following the report, we provide recommendations for a brand strategy consisting of your new tagline, edge, 
                    personality, vision, values and so on.
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
                    src={"https://jellypepper.com/_next/image?url=%2Fimages%2Fbrand-strategy-report.png&w=1920&q=100"}/>
                </Box>
                <Box fontSize={"lg"} marginY={"auto"} mt={8}>
                  <Text as={"h1"} fontSize={"2xl"} fontWeight="medium" mt={2}>Report</Text>
                  <Text my={2}>
                    We then deliver a thorough and insightful research report that provides a comprehensive analysis of the 
                    situation. It shines a light on the path forward and the opportunities to grasp.
                  </Text>
                </Box>
              </Box>

              <Box>
                <Box>
                  <Image
                    width={"100%"}
                    marginY={"auto"}
                    rounded={"md"}
                    src={"https://jellypepper.com/_next/image?url=%2Fimages%2Fbrand-strategy-synthesis.png&w=1920&q=100"}/>
                </Box>
                <Box fontSize={"lg"} marginY={"auto"} mt={8}>
                  <Text as={"h1"} fontSize={"2xl"} fontWeight="medium" mt={2}>Synthesis</Text>
                  <Text my={2}>
                    Once we’re armed with data, we synthesise it into insights and create three key takeaways to drive 
                    the new directino of your brand strategy.
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
                  src={"https://cdn.dribbble.com/users/958859/screenshots/14329344/media/64629c2f801ec69accdce8b302af8e56.jpg?compress=1&resize=800x600"}/>
              </Box>
              <Box fontSize={"lg"} marginY={"auto"}>
                <Text color="gray.600">The ultimate deliverable</Text>
                <Heading as={"h1"} fontSize={"3xl"} my={8}>Your brand book</Heading>
                <Text>
                  Once we have defined the essentials, we collate everything into a beautiful and concise brand book 
                  which covers everything you’re about - in both words and in visuals.
                </Text>
              </Box>
            </Grid>          
        </Box>
        <Box fontSize="lg" rounded={"lg"}>
          <Divider my={32} />
            <Heading as="h1" fontSize="3xl">You’re in good company</Heading>
            <Text mt={2}>We use the industry's best tools and platforms.</Text>
            <Grid templateColumns={{base:"repeat(2, 1fr)", md: "repeat(3, 1fr)", xl: "repeat(6, 1fr)"}} gap={8} my={16}>
              <Box p={8}>
                <Image h={32} src={"https://www.adobe.com/content/dam/cc/icons/indesign.svg"} />
              </Box>
              <Box p={8}>
                <Image h={32} src={"https://www.adobe.com/content/dam/cc/us/en/creativecloud/max2020/mnemonics/illustrator.svg"} />
              </Box>
              <Box p={8}>
                <Image h={32} src={"https://www.adobe.com/content/dam/cc/us/en/creativecloud/max2020/mnemonics/photoshop.svg"} />
              </Box>
              <Box p={8}>
                <Image h={32} src={"https://www.adobe.com/content/dam/cc/icons/incopy.svg"} />
              </Box>
              <Box p={8}>
                <Image h={32} src={"https://www.adobe.com/content/dam/shared/images/product-icons/svg/premiere.svg"} />
              </Box>
              <Box p={8}>
                <Image h={32} src={"https://www.adobe.com/content/dam/cc/us/en/creativecloud/max2020/mnemonics/dimension.svg"} />
              </Box>
            </Grid>
          <Divider my={32} />
        </Box>
        <CapabilitiesSection />
      </Box>
      
    </Box>
  )
}

