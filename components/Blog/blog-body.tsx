import { useColorMode } from '@chakra-ui/react';

type Props = {
  content: string;
};

const BlogBody = ({ content }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <div
      className={
        colorMode === 'light'
          ? 'prose'
          : 'prose text-slate-400 prose-headings:text-slate-300'
      }
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default BlogBody;
