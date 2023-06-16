import fs from "fs";
import matter from "gray-matter";
import { IPost } from "../interfaces/post";

/* export const getAllPosts = () => { */
/*   const folder = "_posts/"; */
/*   const fileNames = fs.readdirSync(folder); */
/*   const files = fileNames.map((fileName) => { */
/*     const file = `${folder}${fileName}`; */
/*     const fileContents = fs.readFileSync(file, "utf8"); */
/*     const { data, content } = matter(fileContents); */
/*     data.slug = fileName.replace(".md", ""); */
/*     return { ...data, content }; */
/*   }); */
/*   return files as IPost[]; */
/* }; */
