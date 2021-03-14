import { Box, Grid, Heading, Link, Text } from "@chakra-ui/react";
import ServicesCard from "../cards/ServicesCard";

export default function Services() {
    return(
        <Box maxWidth={1280} marginX="auto" mt={12} mb={32}>
            <Box textAlign="center" my={32}>
                <Heading 
                    fontSize={{ base: '3xl', md: '4xl' }}
                >Brilliant web design, simplified</Heading>
                <Text fontSize="xl" my={4}>
                    Launch a website that brings your unique vision to life—no design experience required.
                </Text>
            </Box>
            <Grid templateColumns={"repeat(1, 1fr)"} gap={8}>
                    <ServicesCard
                        title="Branding"
                        link="/services/branding"
                        linkText="Kickstart your business"
                        description="Logos and wordmarks, colour palettes, typography, copywriting."
                        thumbnail="https://cdn.dribbble.com/users/1161944/screenshots/14716218/media/6a46b0d252684831976019754c40e361.png?compress=1&resize=800x600"
                        />
                    <ServicesCard
                        title="Websites"
                        link= "/services/websites"
                        linkText="Start working online"
                        isLarge={true}
                        description="The way your company interacts with the outside world."
                        thumbnail="/img/urban-line-web.svg"
                        />
            </Grid>
            <Grid mt={8} templateColumns={{base:"repeat(1, 1fr)"}} gap={4}>
                    <ServicesCard
                        title="Mobile Applications"
                        link="/services/mobile"
                        linkText="Build for customers"
                        description="Cross platform native and hybrid mobile apps for Android & iOS."
                        thumbnail="/img/urban-line-apps.svg"
                        />
                    <ServicesCard
                        title="Enteprise Software"
                        link="/services/enterprise"
                        linkText="Manage like a boss"
                        description="High performance software and design systems."
                        thumbnail="/img/urban-urban-line.svg"
                        isLarge={true}
                        />
                    
            </Grid>
        </Box>
    )
}