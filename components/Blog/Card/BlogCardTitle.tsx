import { Heading } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { IPost } from "../../../interfaces/post";

const BlogCardTitle = (post: IPost) => {
  return (
    <Heading>
      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
    </Heading>
  );
};

export default BlogCardTitle;
