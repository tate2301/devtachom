import { Box, Heading, Text } from "@chakra-ui/layout";
import Head from "next/head";
import { Image, useQuerySubscription } from "react-datocms";
import { IArticleProps, request } from "../../lib/dato"

export async function getStaticPaths() {
  const data = await request({ query: `{ allArticles { slug } }` });

  return {
    paths: data.allArticles.map((article: IArticleProps) => `/blog/${article.slug}`),
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = false }: any) {
  const graphqlRequest = {
    query: `query PostBySlug($slug: String) {
        article(filter: {slug: {eq: $slug}}) {
          id
          title
          subtitle
          slug
          body
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
              responsiveImage(imgixParams: { fit: crop, w: 100, h: 100, auto: format }) {
                srcSet
                webpSrcSet
                sizes
                src
                width
                height
                aspectRatio
                alt
                title
                base64
              }  
            }
          }
          thumbnail {
            id
            responsiveImage(imgixParams: { fit: crop, w: 300, h: 300, auto: format }) {
              srcSet
              webpSrcSet
              sizes
              src
              width
              height
              aspectRatio
              alt
              title
              base64
            }
          }
        }
      }
    `,
    variables: {
      id: params.post_id,
    },
  };

  console.log({params})

  return {
    props: {
      data: await request(graphqlRequest)
    },
  };
}

export default function Article({ data, preview }: any) {
  const {article} = data;

  return (
    <div className="px-4 mt-20 sm:px-6 md:px-8 mb-10 sm:mb-16 md:mb-20 relative max-w-screen-md xl:max-w-screen-md mx-auto">
      <Head>
        <title>{article.title}</title>
      </Head>
        <div className="pt-10">
            <Heading>
            <h1 className="font-bold text-gray-900">{article.title}</h1>
            </Heading>
            <Text>{article.subtitle}</Text>
        </div>
        <Box h={{base: 400, md: 500}} className="my-8">
            <Image data={article.thumbnail.responsiveImage} className="h-full rounded-lg m-auto" />
        </Box>
      <div className="prose prose-lg my-12" dangerouslySetInnerHTML={{__html: article.body}} />
      <div className="pt-8 flex border-t border-gray-200">
          <div className="flex">
            <Image data={article.author.profilepicture.responsiveImage} className="h-12 w-12 rounded-full m-auto mr-4" />
          </div>
          <div>
                <p className="font-bold mb-2">
                    {article.author.fullname}
                </p>
                <p>
                    {article.author.jobposition}
                </p>
            </div>
        </div>
      
    </div>
  );
}