import { GraphQLClient } from "graphql-request";
import { ResponsiveImageType } from "react-datocms";
export function request({ query, variables, preview }: any) {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`
    }
  });
  return client.request(query, variables);
}

export interface IArticleProps { 
        thumbnail: { 
            url: string; 
        }; 
        category: { 
            name: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined; 
        }; 
        createdAt: string | number | Date; 
        body: any; 
        author: { 
            profilepicture: { 
                responsiveImage: ResponsiveImageType; 
            }; 
            fullname: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; 
            jobposition: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; 
        }; 
}