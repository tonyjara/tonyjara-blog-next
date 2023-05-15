import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const BlogTitle = ({ children }: Props) => {
  return (
    <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold tracking-tighter leading-tight md:leading-none mb-6 md:mb-12 text-center md:text-left">
      {children}
    </h1>
  );
};

export default BlogTitle;
