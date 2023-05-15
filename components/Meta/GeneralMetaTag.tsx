import Head from "next/head";
import React from "react";
import { WEB_URL } from "../../lib/constants";
import FaviconLinks from "./FaviconLinks";
import { usePathname } from "next/navigation";

const GeneralMetaTag = ({ title }: { title?: string }) => {
  const pathname = usePathname();
  const origin = typeof window === "undefined" ? "" : window.location.origin;

  const imageUrl = origin + "/assets/birbs/metabackground.jpg";
  const description =
    "Hi i'm Tony Jara, I'm a fullstack javascript developer and this is my personal website and blog.";
  const myTitle = title ? `TJ - ${title}` : "TJ";
  const currentUrl = `${WEB_URL}${pathname}`;

  return (
    <Head>
      <link rel="canonical" href={currentUrl} />
      <title>{myTitle}</title>

      <meta name="author" content="Tony Jara" />
      <meta name="description" content={description} />
      <meta name="theme-color" content="lab(29.2345% 39.3825 20.0664)" />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={myTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:domain" content="tonyjara.com" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={myTitle} />
      <meta name="twitter:description" content={myTitle} />
      <meta name="twitter:image" content={imageUrl} />

      <FaviconLinks />
    </Head>
  );
};

export default GeneralMetaTag;
