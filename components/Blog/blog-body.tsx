"use client";
import { useColorMode } from "@chakra-ui/react";

type Props = {
  content: string;
};

const BlogBody = ({ content }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <div
      className={
        colorMode === "light"
          ? "prose whitespace-normal prose-strong:font-extrabold max-w-[1000px]  prose-a:text-blue-600"
          : "prose prose-strong:text-blue-700 prose-strong:font-extrabold  text-slate-400 prose-headings:text-slate-300 prose-a:text-blue-300"
      }
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default BlogBody;
