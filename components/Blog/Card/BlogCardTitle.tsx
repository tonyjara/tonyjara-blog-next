import { Heading } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { IPost } from '../../../interfaces/post';

const BlogCardTitle = (post: IPost) => {
  return (
    <Heading
      textDecoration="none"
      _hover={{ textDecoration: 'none' }}
      marginTop="1"
    >
      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
    </Heading>
  );
};

export default BlogCardTitle;
