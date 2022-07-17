import { IAuthor } from '../../interfaces/author';
import { Text } from '@chakra-ui/react';
import BirbPic from './birb-pic';
import BlogTitle from './blog-title';
import BlogAvatar from './blog-avatar';
import BlogCoverImage from './blog-cover-image';
import { IPost } from '../../interfaces/post';

const BlogHeader = (props: IPost) => {
  const { title, coverImage, date, author } = props;
  return (
    <>
      <BlogTitle>{title}</BlogTitle>
      {/* <div className="hidden md:block md:mb-12">
        <BlogAvatar name={author.name} picture={author.picture} />
      </div> */}
      <div className="mb-8 md:mb-16 sm:mx-0 flex justify-center">
        <BlogCoverImage {...props} />
      </div>

      {/* <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <BlogAvatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div> */}
    </>
  );
};

export default BlogHeader;
