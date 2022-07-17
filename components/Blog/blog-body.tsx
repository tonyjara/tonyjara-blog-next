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
          ? 'prose max-w-none  prose-a:text-blue-600'
          : 'prose max-w-none text-slate-400 prose-headings:text-slate-300 prose-a:text-blue-300'
      }
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default BlogBody;
