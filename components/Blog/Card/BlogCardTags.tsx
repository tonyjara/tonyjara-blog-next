import { Box, HStack, SimpleGrid, Stack, Tag } from '@chakra-ui/react';
import React from 'react';

const BlogCardTags = ({ tags }: { tags: string[] | undefined }) => {
  return (
    <SimpleGrid columns={[4]} spacing={2}>
      {tags &&
        tags.map((tag) => {
          return (
            <Box key={tag}>
              <Tag size={'md'} variant="solid" colorScheme="orange">
                {tag}
              </Tag>
            </Box>
          );
        })}
    </SimpleGrid>
  );
};

export default BlogCardTags;
