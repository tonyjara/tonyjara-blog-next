import React, { ReactNode, useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { Swiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import SwiperArrows from './SwiperArrows';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
import { Box } from '@chakra-ui/react';

const CardSwiper: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  return (
    <Box maxW={1200} display="flex" w={'100%'}>
      {/* <SwiperArrows setNextEl={setNextEl} setPrevEl={setPrevEl} /> */}

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation={{ prevEl, nextEl }}
        spaceBetween={5}
        slidesPerView={3}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          700: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {children}
      </Swiper>
    </Box>
  );
};

export default CardSwiper;
