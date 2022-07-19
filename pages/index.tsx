import Footer from '../components/Footer/Footer';
import HeroPage from '../components/Landing/Hero';
import WhatImWorkingOn from '../components/Landing/WhatImWorkingOn';
import GeneralMetaTag from '../components/Meta/GeneralMetaTag';
import LatestBlogs from '../components/Swiper/LatestBlogs';
import { IPost } from '../interfaces/post';
import { getAllPosts } from '../lib/api';

type Props = {
  allPosts: IPost[];
};

export default function Index({ allPosts }: Props) {
  return (
    <>
      <GeneralMetaTag />
      <HeroPage />

      <WhatImWorkingOn />

      <LatestBlogs allPosts={allPosts} />

      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'tags',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
};
