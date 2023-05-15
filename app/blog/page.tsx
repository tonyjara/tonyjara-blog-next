/* import { Box, Flex } from "@chakra-ui/react"; */
import React from "react";
import BlogListComponent from "../../components/Blog/blog-list-card";
import { getAllPosts } from "../../lib/GetAllPosts";

const BlogHome = (props: any) => {
  const allPosts = getAllPosts();
  return (
    <div>
      {allPosts.map((post) => (
        <div key={post.slug}>
          <BlogListComponent post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogHome;
