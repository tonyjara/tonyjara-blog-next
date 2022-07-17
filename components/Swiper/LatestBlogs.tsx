import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { IPost } from '../../interfaces/post';
import BlogSwipeCard from './BlogSwipeCard';
import CardSwiper from './CardSwiper';

const LatestBlogs = ({ allPosts }: { allPosts: IPost[] }) => {
  return (
    <Box alignItems="center" display={'flex'} flexDir="column">
      <Text
        fontWeight={'bold'}
        textAlign={'center'}
        pt={10}
        fontSize="4xl"
        alignSelf={'center'}
      >
        Latest blogs
      </Text>
      {/* <Text>Swipe me!</Text> */}
      <CardSwiper>
        {allPosts.map((post) => {
          return (
            <SwiperSlide key={post.slug}>
              <BlogSwipeCard post={post} />
            </SwiperSlide>
          );
        })}
      </CardSwiper>
    </Box>
  );
};

export default LatestBlogs;
