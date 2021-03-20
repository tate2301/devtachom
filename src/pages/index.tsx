import { Box, Flex, Heading, Link, Text, Image } from "@chakra-ui/react";
import Head from "next/head";
import Feature from "../components/sections/Feature";
import HeadingSection from "../components/sections/HeadingSection";
import Jumbotron from "../components/sections/Jumbotron";
import ReportBanner from "../components/sections/ReportBanner";
import { IArticleProps, request } from "../lib/dato";


const Home = ({data}: any) => {
  return (
    <Box mb={8} w="full">
      <Head>
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"/>
        <title>An African Digital Agency | Tachom</title>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `{
            "@context": "https://schema.org",
            "@type": "Organization",
            "url": "https://devtachom.com",
            "logo": "https://devtachom.com/img/logo-light.png"
          }`}} />
      </Head>
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
      <Box px={4} py={20} maxWidth={1280} marginX="auto">
        <Heading as="h1" fontSize="3xl">Blog</Heading>
        <Text fontSize="xl">Read what our team has been thinking about.</Text>
        <Box my={8}>
                    <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                        {data?.allArticles.map((article: IArticleProps, key: React.Key | null | undefined) => (
                            <Box className="col-span-1" key={key}>
                                <Box h={300} w={{base: "full"}}>
                                    <Link href={`blog/${article.slug}`}>
                                        <a>
                                            <Image 
                                                src={article.thumbnail?.url}
                                                objectFit="cover" 
                                                h="full"
                                                w="full"
                                                rounded="lg"
                                            />
                                        </a>
                                    </Link>
                                </Box>
                                <Box my={4}>
                                    <Text textStyle="uppercase" fontWeight="600" color="gray.500">
                                        {article.category.name} &bull; {new Date(article.createdAt).toDateString()} 
                                    </Text>
                                    <Link href={`blog/${article.slug}`}>
                                        <a>
                                            <Heading fontSize={"3xl"} my={2}>
                                                {article.title}
                                            </Heading>
                                        </a>
                                    </Link>
                                    <Text noOfLines={2} my={4} fontSize={{base: "xl"}}>
                                        <div dangerouslySetInnerHTML={{
                                            __html: article.body
                                        }} />
                                    </Text>

                                    <Box mt={4}>
                                        <Flex>
                                            <Box h={12} w={12} mr={2}>
                                                <Image 
                                                    src={article.author.profilepicture?.url} 
                                                    h={12}
                                                    w={12}
                                                    objectFit="cover"
                                                    rounded="full"
                                                    objectPosition="center"
                                                />
                                            </Box>
                                            <Box>
                                                <Text color="gray.800" fontWeight="bold">
                                                    {article.author.fullname}    
                                                </Text>
                                                <Text color="gray.800">
                                                    {article.author.jobposition}    
                                                </Text>
                                            </Box>
                                        </Flex>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            
      </Box>      
    </Box>
  );
};

export default Home;


const BLOG_POSTS_QUERY = `query HomePage($limit: IntType) {
  allArticles(first: $limit) {
      id
      title
      subtitle
      slug
      body
      createdAt
      category {
        id
        name
      }
      author {
        id
        fullname
        jobposition
        profilepicture{
          id
          url
        }
      }
      thumbnail {
        id
        url
      }
  }
}`;


export async function getServerSideProps(context: any) {
  const data = await request({
      query: BLOG_POSTS_QUERY,
      variables: { limit: 3 }
    });
    return {
      props: { data }
    };
}

