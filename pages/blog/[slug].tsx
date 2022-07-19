import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

import { getPostBySlug, getAllPosts } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';
import { Box, Flex } from '@chakra-ui/react';
import BlogBody from '../../components/Blog/blog-body';
import { IPost } from '../../interfaces/post';
import BlogHeader from '../../components/Blog/blog-header';
import Footer from '../../components/Footer/Footer';
import BlogMetaTags from '../../components/Meta/BlogMetaTags';

type Props = {
  post: IPost;
  morePosts: IPost[];
  preview?: boolean;
};

export default function Post({ post }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <BlogMetaTags post={post} />
      <Flex p={{ base: 5, md: 2 }} justifyContent={'center'} mb={'80px'}>
        <Box maxW="800px" width={'100%'}>
          <BlogHeader {...post} />
          <BlogBody content={post.content} />
        </Box>
      </Flex>
      <Footer />
    </>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'excerpt',
    'ogImage',
    'coverImage',
    'birbName',
    'birbLink',
    'tags',
  ]);

  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
