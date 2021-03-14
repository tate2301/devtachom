import { Box, Grid, Heading, Link, Text } from "@chakra-ui/react";
import Head from "next/head";
import HeadingSection from "../components/sections/HeadingSection";

export default function Services() {
    return(
        <Box maxWidth={1280} marginX="auto" mt={12} mb={32} p={4}>
            <Head>
                <title>Terms of Service | Tachom</title>
            </Head>
            <HeadingSection
                title="Terms of Service"
                tagline={`By accessing our website, you are agreeing to be bound by these terms of service, 
                    all applicable laws and regulations, and agree that you are responsible for compliance 
                    with any applicable local laws.`}
            />
            <Box maxWidth={720}>
                <Box my={16}>
                    <Heading as="h1" fontSize="3xl" fontWeight="bold">
                        Terms
                    </Heading>
                    <Text my={4}>
                        If you do not agree with any of these terms, you are prohibited from using or accessing 
                        this site. The materials contained in this website are protected by applicable copyright 
                        and trademark law.
                    </Text>
                </Box>
                <Box my={16}>
                    <Heading as="h1" fontSize="3xl" fontWeight="bold">
                        Disclaimer
                    </Heading>
                    <Text my={4}>
                        The materials on Tachom's website are provided on an 'as is' basis. Tachom makes 
                        no warranties, expressed or implied, and hereby disclaims and negates all other warranties 
                        including, without limitation, implied warranties or conditions of merchantability, fitness 
                        for a particular purpose, or non-infringement of intellectual property or other violation 
                        of rights.
                    </Text>
                    <Text my={4}>
                        Further, Tachom does not warrant or make any representations concerning the accuracy, 
                        likely results, or reliability of the use of the materials on its website or otherwise 
                        relating to such materials or on any sites linked to this site.
                    </Text>
                </Box>
                <Box my={16}>
                    <Heading as="h1" fontSize="3xl" fontWeight="bold">
                        Limitations
                    </Heading>
                    <Text my={4}>
                        In no event shall Tachom or its suppliers be liable for any damages (including, without 
                        limitation, damages for loss of data or profit, or due to business interruption) arising out 
                        of the use or inability to use the materials on Tachom's website, even if Tachom or 
                        a Tachom authorised representative has been notified orally or in writing of the possibility 
                        of such damage. Because some jurisdictions do not allow limitations on implied warranties, or 
                        limitations of liability for consequential or incidental damages, these limitations may not 
                        apply to you.
                    </Text>
                </Box>
                <Box my={16}>
                    <Heading as="h1" fontSize="3xl" fontWeight="bold">
                        Accuracy of materials
                    </Heading>
                    <Text my={4}>
                        The materials appearing on Tachom's website could include technical, typographical, or photographic 
                        errors. Tachom does not warrant that any of the materials on its website are accurate, complete or 
                        current. Tachom may make changes to the materials contained on its website at any time without 
                        notice. However Tachom does not make any commitment to update the materials.
                    </Text>
                </Box>
                <Box my={16}>
                    <Heading as="h1" fontSize="3xl" fontWeight="bold">
                        Links
                    </Heading>
                    <Text my={4}>
                        Tachom has not reviewed all of the sites linked to its website and is not responsible for the 
                        contents of any such linked site. The inclusion of any link does not imply endorsement by Tachom 
                        of the site. Use of any such linked website is at the user's own risk.
                    </Text>
                </Box>
                <Box my={16}>
                    <Heading as="h1" fontSize="3xl" fontWeight="bold">
                        Modifications
                    </Heading>
                    <Text my={4}>
                        Tachom may revise these terms of service for its website at any time without notice. By using 
                        this website you are agreeing to be bound by the then current version of these terms of service.
                    </Text>
                </Box>
                <Box my={16}>
                    <Heading as="h1" fontSize="3xl" fontWeight="bold">
                        Governing law
                    </Heading>
                    <Text my={4}>
                        These terms and conditions are governed by and construed in accordance with the laws of South Africa 
                        and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}