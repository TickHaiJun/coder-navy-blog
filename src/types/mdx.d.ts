declare module "*.mdx" {
  import { ComponentProps, JSXElementConstructor } from "react";

  export interface Frontmatter {
    title: string;
    date: string;
    cover_image: string;
    description: string;
    category: string;
    tags: string[];
    keywords: string[];
  }

  export interface MDXContent {
    (props: ComponentProps<JSXElementConstructor<any>>): JSX.Element;
    frontmatter: Frontmatter;
  }

  const Content: MDXContent;
  export default Content;
}