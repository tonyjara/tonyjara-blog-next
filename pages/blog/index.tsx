import { Box, Center, Flex } from '@chakra-ui/react';
import React from 'react';
import BlogListComponent from '../../components/Blog/blog-list-card';
import BlogSearchbar from '../../components/Blog/blog-searchbar';
import Footer from '../../components/Footer/Footer';
import { IPost } from '../../interfaces/post';
import { getAllPosts } from '../../lib/api';

type Props = {
  allPosts: IPost[];
};

const BlogHome = ({ allPosts }: Props) => {
  const options = [
    { value: 'javascript', label: 'Javascript' },
    { value: 'chakra', label: 'Chakra' },
    { value: 'react', label: 'React' },
    { value: 'css', label: 'CSS' },
  ];
  return (
    <>
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
