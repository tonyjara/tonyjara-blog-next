import fs from "fs";
import { IPost } from "../../../interfaces/post";
import matter from "gray-matter";
import BlogBody from "../../../components/Blog/blog-body";
import markdownToHtml from "../../../lib/markdownToHtml";
import BlogHeader from "../../../components/Blog/blog-header";
import BlogMetaTags from "../../../components/Meta/BlogMetaTags";
import { getAllPosts } from "../../../lib/GetAllPosts";

const getPost = async (slug: string) => {
  const folder = "_posts/";
  const file = `${folder}${slug}.md`;
  const fileData = fs.readFileSync(file, "utf8");
  const { data, content } = matter(fileData);
  data.slug = slug;
  const htmlContent = await markdownToHtml(content || "");
  return { ...data, content: htmlContent } as IPost;
};

export const generateStaticParams = async () => {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export default async function Post(props: any) {
  const slug = props.params.slug;
  const post = await getPost(slug);
  return (
    <div style={{ marginBottom: "20px", marginTop: "20px" }}>
      <BlogMetaTags post={post} />
      <BlogHeader {...post} />
      <BlogBody content={post.content} />
    </div>
  );
}
