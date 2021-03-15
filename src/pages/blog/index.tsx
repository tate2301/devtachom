import { IArticleProps, request } from "../../lib/dato";
import Head from "next/head";
import { Box, Flex, Grid, Heading, Text, Img as ChakraImage, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

export default function Blog({data}: any) {
    return (
        <Box>
            <Head>

                <title>Blog | Tachom</title>
            </Head>
            <Box maxWidth={1280} marginX="auto" p={4} mt={8}>
                <Flex maxWidth={720} h={300} marginX="auto" mb={16}>
                    <Box marginY="auto" textAlign="center">
                        <Heading as="h1" fontSize={{base:"3xl", md: "5xl"}}>The Tachom Blog</Heading>
                        <Text fontSize={"xl"}>
                            We work with clients end-to-end, from defining and enabling the vision, to ensuring ongoing market relevance.
                        </Text>
                    </Box>
                </Flex>
                <Box py={16}>
                    <Box className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <Box rounded="md" h={{base: 300, md: 500}}>
                            <Link href={`blog/${data?.allArticles[0]?.slug}`}>
                                    <a className="w-full h-full">
                                        <ChakraImage 
                                            src={data?.allArticles[0]?.thumbnail?.url}
                                            objectFit="cover" 
                                            h="full"
                                            w="full"
                                            rounded="lg"
                                        />
                                    </a>
                                </Link>
                        </Box>
                        <Flex direction="column" justifyContent="space-between" h={"full"}>
                            <Box fontSize="lg">
                                <Text textStyle="uppercase" fontWeight="600" color="gray.500">
                                    {data?.allArticles[0]?.category.name} &bull; {new Date(data?.allArticles[0]?.createdAt).toDateString()} 
                                </Text>
                                <Link href={`blog/${data?.allArticles[0]?.slug}`}>
                                    <a>
                                        <Heading fontSize={{base: "3xl", md: "5xl"}} my={2}>
                                            {data?.allArticles[0]?.title}
                                        </Heading>
                                    </a>
                                </Link>

                                <Text noOfLines={4} fontSize={{base: "lg", md: "2xl"}}>
                                    <div dangerouslySetInnerHTML={{
                                        __html: data?.allArticles[0]?.body
                                    }} />
                                </Text>
                            </Box>
                            <Box>
                                <Flex>
                                    <Box h={12} w={12} mr={2}>
                                        <ChakraImage 
                                            src={data?.allArticles[0]?.author?.profilepicture?.url} 
                                            h={12}
                                            w={12}
                                            rounded="full"
                                        />
                                    </Box>
                                    <Box>
                                        <Text color="gray.800" fontWeight="bold">
                                            {data?.allArticles[0]?.author.fullname}    
                                        </Text>
                                        <Text color="gray.800">
                                            {data?.allArticles[0]?.author.jobposition}    
                                        </Text>
                                    </Box>
                                </Flex>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
                <Box my={16}>
                    <Box className="grid grid-cols-1 md:grid-cols-2 gap-16" gap={8}>
                        {data?.allArticles.slice(1, 3).map((article: IArticleProps, key: React.Key | null | undefined) => (
                            <Box className="col-span-1" key={key}>
                                <Box h={300}>
                                <   Link href={`blog/${article.slug}`}>
                                        <a>
                                            <ChakraImage 
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
                                        <Box className="flex flex-nowrap">
                                            <Box className="w-12 h-12 mr-4">
                                                <ChakraImage 
                                                    src={article.author.profilepicture.url} 
                                                    objectFit="cover"
                                                    rounded="full"
                                                    objectPosition="center"
                                                    h={12}
                                                    w={12}
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
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
                
                <Box my={16}>
                    <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                        {data?.allArticles.slice(3, data.length).map((article: IArticleProps, key: React.Key | null | undefined) => (
                            <Box className="col-span-1" key={key}>
                                <Box h={300} w={{base: "full"}}>
                                    <Link href={`blog/${article.slug}`}>
                                        <a>
                                            <ChakraImage 
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
                                                <ChakraImage 
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
    )

}

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
        variables: { limit: 20 }
      });
      return {
        props: { data }
      };
}