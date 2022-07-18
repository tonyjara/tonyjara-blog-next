import { AspectRatio, Box, Center, Flex, Image, Text } from '@chakra-ui/react';
import { IPost } from '../../interfaces/post';

const BlogCoverImage = ({
  title,
  coverImage,
  slug,
  birbLink,
  birbName,
}: IPost) => {
  const image = (
    <Box>
      <AspectRatio
        ratio={16 / 9}
        maxW={{ base: '200px', md: '400px' }}
        minW={{ base: 200, md: 400 }}
      >
        <Image
          rounded={8}
          src={coverImage}
          objectFit="cover"
          alt={`Cover Image for ${title}`}
        />
      </AspectRatio>
      <Text
        maxW={{ base: '200px', md: '400px' }}
        minW={{ base: 200, md: 400 }}
        mt={2}
        textAlign={'center'}
        fontStyle={'italic'}
        color="GrayText"
      >
        {birbName}
      </Text>
    </Box>
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <a
          target={'_blank'}
          href={birbLink}
          aria-label={title}
          rel="noreferrer"
        >
          {image}
        </a>
      ) : (
        image
      )}
    </div>
  );
};

export default BlogCoverImage;
