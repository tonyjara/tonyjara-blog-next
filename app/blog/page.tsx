/* import { Box, Flex } from "@chakra-ui/react"; */
import React from "react";
import BlogListComponent from "../../components/Blog/blog-list-card";
import { getAllPosts } from "../../lib/GetAllPosts";

export const metadata = {
  title: "Tony Jara's Blog",
  description:
    "In this blog you can find my thoughts on software development, programming, and other topics.",
  themeColor: "#000000",
};

const BlogHome = () => {
  const allPosts = getAllPosts().sort((a, b) => (a.date < b.date ? 1 : -1));

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
