import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import BlogListComponent from '../../components/Blog/blog-list-card';
import BlogSearchbar from '../../components/Blog/blog-searchbar';
import Footer from '../../components/Footer/Footer';
import GeneralMetaTag from '../../components/Meta/GeneralMetaTag';
import { IPost } from '../../interfaces/post';
import { getAllPosts } from '../../lib/api';

type Props = {
  allPosts: IPost[];
};

const BlogHome = ({ allPosts }: Props) => {
  return (
    <>
      <GeneralMetaTag title="Blog" />
      <Flex flexDirection="column" justifyContent="center">
        <BlogSearchbar posts={allPosts} />

        {allPosts.map((post) => (
          <Box p={[5, 0]} key={post.slug}>
            <BlogListComponent post={post} />
          </Box>
        ))}
      </Flex>
      <Footer />
    </>
  );
};

export default BlogHome;
export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'excerpt',
    'content',
    'ogImage',
    'coverImage',
    'birbName',
    'birbLink',
    'tags',
  ]);

  return {
    props: { allPosts },
  };
};
