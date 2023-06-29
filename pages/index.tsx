import React, { useEffect } from "react";
import NewHero from "../components/Landing/NewHero";
import Projects from "../components/Landing/Projects";
import { Box } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { getAllPosts } from "../lib/api";
import { IPost } from "../interfaces/post";
import { convertToDate } from "../lib/dateHelpers";
import LatestBlogs from "../components/Swiper/LatestBlogs";

const Index = (props: { allPosts: IPost[] }) => {
  const allPosts = props.allPosts.sort(
    //@ts-ignore
    (a, b) => convertToDate(b.date) - convertToDate(a.date)
  );
  return (
    <Box mb={{ base: "20px", md: "80px" }}>
      <NewHero />
      <Projects />
      <LatestBlogs allPosts={allPosts} />
    </Box>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts();
  return {
    props: { allPosts },
  };
};
