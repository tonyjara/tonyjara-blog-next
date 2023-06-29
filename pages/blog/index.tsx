import React from "react";
import BlogListComponent from "../../components/Blog/blog-list-card";
import { convertToDate } from "../../lib/dateHelpers";
import { GetStaticProps } from "next";
import { IPost } from "../../interfaces/post";
import { getAllPosts } from "../../lib/api";
import MetaTagsComponent from "../../components/Meta/MetaTagsComponent";

const BlogHome = (props: { allPosts: IPost[] }) => {
  const allPosts = props.allPosts.sort(
    //@ts-ignore
    (a, b) => convertToDate(b.date) - convertToDate(a.date)
  );

  return (
    <div>
      <MetaTagsComponent
        title="Blogs list"
        description="In this blog you can find my thoughts on software development, programming, and other topics."
      />
      {allPosts.map((post) => (
        <div key={post.slug}>
          <BlogListComponent post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogHome;

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts();
  return {
    props: { allPosts },
  };
};
