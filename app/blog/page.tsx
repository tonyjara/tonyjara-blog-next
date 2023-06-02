/* import { Box, Flex } from "@chakra-ui/react"; */
import React from "react";
import BlogListComponent from "../../components/Blog/blog-list-card";
import { getAllPosts } from "../../lib/GetAllPosts";
import { convertToDate } from "../../lib/dateHelpers";

export const metadata = {
  title: "Tony Jara's Blog",
  description:
    "In this blog you can find my thoughts on software development, programming, and other topics.",
  themeColor: "#000000",
};

const BlogHome = () => {
  const allPosts = getAllPosts().sort(
    //@ts-ignore
    (a, b) => convertToDate(b.date) - convertToDate(a.date)
  );

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
