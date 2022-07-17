import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
// import { WEB_URL } from '../../data/environments';

// const origin = typeof window === 'undefined' ? '' : window.location.origin;

const MainHead: React.FC<{
  title?: string;
  description?: string;
  imageUrl?: string;
}> = ({ title, description, imageUrl }) => {
  const router = useRouter();

  const WEBPAGE_URL = `https://4ngos.org${router.asPath}`;
  const desc = `Herramientas y servicios especializados para ONG's y asociaciones.`;
  const backImg =
    'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';

  return (
    <Head>
      <title>{title && title?.length > 0 ? `4NGOS - ${title}` : '4NGOS'}</title>

      <meta name="author" content="4NGOS" />
      <meta name="description" content={description ?? desc} />
      <meta name="keywords" content={`${title}`} />
      <meta name="theme-color" content="lab(29.2345% 39.3825 20.0664)" />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content={WEBPAGE_URL} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title ?? '4NGOS'} />
      <meta property="og:description" content={description ?? desc} />
      <meta property="og:image" content={imageUrl ?? backImg} />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="4ngos.org" />
      <meta property="twitter:url" content={WEBPAGE_URL} />
      <meta property="twitter:title" content={title ?? '4NGOS'} />
      <meta property="twitter:description" content={description ?? desc} />
      <meta name="twitter:image" content={imageUrl ?? backImg} />
    </Head>
  );
};

export default MainHead;
