import Head from "next/head";
import React from "react";
import { WEB_URL } from "../../lib/constants";
import FaviconLinks from "./FaviconLinks";
import { usePathname } from "next/navigation";

interface props {
  title?: string;
  description?: string;
  imageSrc?: string;
  date?: Date;
}

const MetaTagsComponent = ({ title, description, imageSrc, date }: props) => {
  const pathname = usePathname();
  const origin = typeof window === "undefined" ? "" : window.location.origin;

  const imageUrl = origin + (imageSrc ?? "/assets/birbs/metabackground.jpg");

  const metaDescription = (
    description ??
    "Hi i'm Tony Jara, I'm a fullstack javascript developer and this is my personal website and blog."
  ).substring(0, 150);

  const myTitle = title ? `TJ - ${title}` : "Tony Jara's website";
  const currentUrl = `${WEB_URL}${pathname}`;

  return (
    <Head>
      <link rel="canonical" href={currentUrl} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>{myTitle}</title>

      <meta name="author" content="Tony Jara" />
      <meta name="description" content={metaDescription} />
      <meta name="theme-color" content="#46AC42" />
      <meta name="image" property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={metaDescription} />

      {/* <!-- Facebook Meta Tags --> */}
      <meta name="url" property="og:url" content={currentUrl} />
      <meta name="type" property="og:type" content="website" />
      <meta name="title" property="og:title" content={myTitle} />
      <meta
        name="description"
        property="og:description"
        content={metaDescription}
      />
      {/* <meta name="image" property="og:image" content={imageUrl} /> */}
      {/* <meta property="og:image:alt" content={metaDescription} /> */}

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:domain" content="tonyjara.com" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={myTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {/* <meta name="twitter:image" content={imageUrl} /> */}
      {/* <meta name="twitter:image:alt" content={metaDescription} /> */}

      {/* <!-- LinkedIn Meta Tags --> */}
      <meta
        name="publish_date"
        property="og:publish_date"
        content={date?.toISOString() ?? new Date().toISOString()}
      />

      <FaviconLinks />
    </Head>
  );
};

export default MetaTagsComponent;
