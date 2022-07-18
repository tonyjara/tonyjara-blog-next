import Head from 'next/head';
import { title } from 'process';
import React from 'react';
import { IPost } from '../../interfaces/post';
import { WEB_URL } from '../../lib/constants';
import FaviconLinks from './FaviconLinks';

const BlogMetaTags = ({ post }: { post: IPost }) => {
  const { title, excerpt, slug, coverImage } = post;

  const blogUrl = WEB_URL + '/blog/' + slug;

  return (
    <Head>
      <title>{`TJ - ${title}`}</title>

      <meta name="author" content="" />
      <meta name="description" content={excerpt} />
      <meta name="keywords" content={`${title}`} />
      <meta name="theme-color" content="lab(29.2345% 39.3825 20.0664)" />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content={blogUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={excerpt} />
      <meta property="og:image" content={coverImage} />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="tonyjara.com" />
      <meta property="twitter:url" content={blogUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={title} />
      <meta name="twitter:image" content={coverImage} />

      <FaviconLinks />
    </Head>
  );
};

export default BlogMetaTags;
