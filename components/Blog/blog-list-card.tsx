import React from 'react';
import {
  Box,
  Heading,
  Image,
  Text,
  HStack,
  Tag,
  useColorModeValue,
  Container,
  Button,
  AspectRatio,
  Flex,
} from '@chakra-ui/react';
import Link from 'next/link';
import { IPost } from '../../interfaces/post';
import { formatDate } from '../../lib/dateHelpers';
import BlogCardImage from './Card/BlogCardImage';
import BlogCardTags from './Card/BlogCardTags';
import BlogCardAuthor from './Card/BlogCardAuthor';
import BlogCardTitle from './Card/BlogCardTitle';

const BlogListComponent: React.FC<{ post: IPost }> = ({ post }) => {
  return (
    <Container maxW={'7xl'} p={{ base: 2, md: 12 }}>
      <Box
        marginTop={{ base: 0, sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between"
      >
        <BlogCardImage {...post} />

        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}
        >
          <BlogCardTags tags={post.tags} />
          <BlogCardTitle {...post} />

          <div
            style={{ color: 'GrayText' }}
            dangerouslySetInnerHTML={{
              __html: post.excerpt.substring(0, 220) + '...',
            }}
          />

          <Link href={`/blog/${post.slug}`}>
            <Button maxW={150} marginTop={5} marginBottom={5}>
              Leer más
            </Button>
          </Link>
          <BlogCardAuthor {...post} />
        </Box>
      </Box>
    </Container>
  );
};

export default BlogListComponent;
