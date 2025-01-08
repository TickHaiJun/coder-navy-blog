import type { ComponentProps, JSXElementConstructor } from "react";

interface Frontmatter {
  title: string;
  date: string;
  cover_image: string;
  description: string;
  category: string;
  tags: string[];
  keywords: string[];
}

interface MDXContent {
  (props: ComponentProps<JSXElementConstructor<any>>): JSX.Element;
  frontmatter: Frontmatter;
  default: MDXContent;
}

declare module "*.mdx" {
  const content: MDXContent;
  export default content;
}