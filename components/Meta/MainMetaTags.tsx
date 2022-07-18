import Head from 'next/head';
import React from 'react';
import { IPost } from '../../interfaces/post';
import { WEB_URL } from '../../lib/constants';
import FaviconLinks from './FaviconLinks';

const MainMetaTags = () => {
  const origin = typeof window === 'undefined' ? '' : window.location.origin;

  const imageUrl = origin + '/assets/birbs/metabackground.jpg';
  const description = "Tony Jara's personal website and blog.";
  const title = 'TJ';

  return (
    <Head>
      <title>{`TJ`}</title>

      <meta name="author" content="Tony Jara" />
      <meta name="description" content={description} />
      <meta name="keywords" content={`${title}`} />
      <meta name="theme-color" content="lab(29.2345% 39.3825 20.0664)" />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content={WEB_URL} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="tonyjara.com" />
      <meta property="twitter:url" content={WEB_URL} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={title} />
      <meta name="twitter:image" content={imageUrl} />

      <FaviconLinks />
    </Head>
  );
};

export default MainMetaTags;
