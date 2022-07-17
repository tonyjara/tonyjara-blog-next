import Link from 'next/link';

// import Metadata from 'components/Metadata';
import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { FC } from 'react';
import { IPost } from '../../interfaces/post';
import { formatDate } from '../../lib/dateHelpers';
import BlogCardTags from '../Blog/Card/BlogCardTags';

const BlogSwipeCard: FC<{ post: IPost }> = ({
  post,
  // options = {},
}) => {
  const { title, excerpt, date, author, coverImage } = post;

  return (
    <Link href={`/blog/${post.slug}`} key={post.slug}>
      <Flex
        paddingRight={{ base: 0, md: 0 }}
        paddingLeft={{ base: 0, md: 0 }}
        style={{ cursor: 'pointer' }}
        py={6}
      >
        <Box
          maxW={'445px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}
        >
          <Box
            h={'210px'}
            bg={'gray.100'}
            mt={-6}
            mx={-6}
            mb={6}
            pos={'relative'}
          >
            <Image
              src={coverImage}
              layout={'fill'}
              alt="Blog card"
              objectFit="cover"
            />
          </Box>
          <Stack>
            <BlogCardTags tags={post.tags} />
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}
            >
              {title}
            </Heading>

            <Text color={'gray.500'}>{excerpt}</Text>
          </Stack>
          <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
            {/* <Avatar src={author.avatar.url} /> */}
            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
              {/* <Text fontWeight={600}>{author.name}</Text> */}
              <Text color={'gray.500'}>{formatDate(date)}</Text>
            </Stack>
          </Stack>
        </Box>
      </Flex>
    </Link>
  );
};

export default BlogSwipeCard;
