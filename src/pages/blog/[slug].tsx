import { Box, Heading, Text } from "@chakra-ui/layout";
import Head from "next/head";
import { Image, useQuerySubscription } from "react-datocms";
import { IArticleProps, request } from "../../lib/dato"
import { IconButton } from "@chakra-ui/react"
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";

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
            url
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
      slug: params.slug,
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

  let href = undefined

  if(typeof window !== "undefined") {
    href = window.location.href
  }

  return (
    <div className="px-4 mt-20 sm:px-6 md:px-8 mb-10 sm:mb-16 md:mb-20 relative max-w-screen-md xl:max-w-screen-md mx-auto">
      <Head>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `{
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://google.com/article"
          },
          "headline": ${article.title},
          "image": [${article.thumbnail.url}],
          "datePublished": ${article.createdAt},
          "dateModified": ${article.updatedAt || article.createdAt},
          "author": {
            "@type": "Person",
            "name": ${article.author.fullname}
          },
          "publisher": {
            "@type": "Organization",
            "name": "Tachom",
            "logo": {
              "@type": "ImageObject",
              "url": "https://devtachom.com/logo-light.png"
            }
          }
        }`}} />
        <title>{article.title}</title>
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"/>
        <link
            rel="stylesheet"
            href="https://unpkg.com/@tailwindcss/typography@0.2.x/dist/typography.min.css"
            />

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
      <div className="pt-8 flex justify-between flex-wrap border-t border-gray-200">
        <div className="flex w-full justify-between">
              <div className="flex w-full md:w-1/2">
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
              
              <div className="flex justify-start md:justify-end space-x-4 w-full md:w-1/2 mt-4">
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${href}`} target="_blank">
                    <IconButton
                      colorScheme="messenger"
                      aria-label="Share to Facebook"
                      rounded="full"
                      icon={<FaFacebookF />}
                    />
                  </a>
                  <a
                    target="_blank"
                    href={`https://twitter.com/intent/tweet?text=Check out this amazing post by Tachom - ${article.title} \n ${href}`}>
                    <IconButton
                        colorScheme="twitter"
                        aria-label="Tweet"
                        rounded="full"
                        icon={<FaTwitter />}
                      />
                  </a>
                  <a 
                    target="_blank"
                    href={`https://wa.me/?text=Check out this amazing post by Tachom - ${article.title} \n ${href}`}>
                    <IconButton
                        colorScheme="whatsapp"
                        aria-label="Tweet"
                        rounded="full"
                        icon={<FaWhatsapp />}
                      />
                  </a>

            </div>
          </div>
        </div>
        
    </div>
  );
}

