import React from 'react';
import { request } from '../lib/dato';


const EXTERNAL_DATA_URL = 'https://jsonplaceholder.typicode.com/posts';

const createSitemap = async (posts: any) => {

    return (`<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${posts.map(({ slug }: any) => {
                return `
                        <url>
                            <loc>${`https://devtachom.com/blog/${slug}`}</loc>
                        </url>
                    `;
            })
            .join('')}
        </urlset>
    `);
};


class Sitemap extends React.Component {
  static async getInitialProps({ res }: any) {
    const posts = await request({ query: `{ allArticles { slug } }` });

    res.setHeader('Content-Type', 'text/xml');
    res.write(createSitemap(posts));
    res.end();
  }
}

export default Sitemap;