import BlogBody from "../../components/Blog/blog-body";
import { getPostBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getPostSlugs } from "../../lib/api";
import MetaTagsComponent from "../../components/Meta/MetaTagsComponent";
import { IPost } from "../../interfaces/post";
import { Link, Text, AspectRatio, Box, Heading } from "@chakra-ui/react";
import { title } from "process";
import Image from "next/image";
import ShareButtons from "../../components/Buttons/ShareButtons";

export default function Post(props: { post: IPost }) {
  const { post } = props;
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Box
      maxW={{
        base: "300px",
        sm: "500px",
        md: "600px",
        lg: "800px",
        xl: "1000px",
      }}
    >
      <MetaTagsComponent
        title={post.title}
        description={post.excerpt}
        imageSrc={post.coverImage}
      />
      <Box textAlign={"center"}>
        <Heading fontSize={{ base: "3xl", md: "5xl" }} my="20px">
          {post.title}
        </Heading>

        <Link target="_blank" href={post.birbLink} cursor={"pointer"}>
          <AspectRatio ratio={16 / 9}>
            <Image
              style={{
                borderRadius: "10px",
              }}
              src={post.coverImage}
              width={500}
              height={500}
              alt={`Cover Image for ${title}`}
            />
          </AspectRatio>
        </Link>
        <Text mt={2} textAlign={"center"} fontStyle={"italic"} color="GrayText">
          {post.birbName}
        </Text>
        <Text mt={2} textAlign={"center"} color="GrayText">
          {post.date}
        </Text>
        <ShareButtons {...post} />
      </Box>

      <BlogBody content={post.content} />
    </Box>
  );
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const slugs = getPostSlugs();

  return {
    paths: slugs.map((x) => {
      return {
        params: {
          slug: x.replace(".md", ""),
        },
      };
    }),
    fallback: false,
  };
}
