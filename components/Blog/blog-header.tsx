"use client";
import BlogTitle from "./blog-title";
import BlogCoverImage from "./blog-cover-image";
import { IPost } from "../../interfaces/post";
import ShareButtons from "../Buttons/ShareButtons";

const BlogHeader = (props: IPost) => {
  const { title } = props;
  return (
    <div className="flex flex-col items-center">
      <BlogTitle>{title}</BlogTitle>

      <div className="mb-6 md:mb-16 sm:mx-0 flex justify-center flex-col">
        <BlogCoverImage {...props} />
        <ShareButtons {...props} />
      </div>
    </div>
  );
};

export default BlogHeader;
