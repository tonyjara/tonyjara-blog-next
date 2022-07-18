import Head from 'next/head';
import { title } from 'process';
import React from 'react';
import { IPost } from '../../interfaces/post';
import { WEB_URL } from '../../lib/constants';
import FaviconLinks from './FaviconLinks';

const BlogMetaTags = ({ post }: { post: IPost }) => {
  const { title, excerpt, slug, coverImage } = post;
  const origin = typeof window === 'undefined' ? '' : window.location.origin;

  const blogUrl = WEB_URL + '/blog/' + slug;

  const imageUrl = origin + coverImage;

  //ogImage.url is avalable if needed.

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
      <meta property="og:image" content={imageUrl} />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:domain" content="tonyjara.com" />
      <meta name="twitter:url" content={blogUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={excerpt} />
      <meta name="twitter:image" content={imageUrl} />

      <FaviconLinks />
    </Head>
  );
};

export default BlogMetaTags;
