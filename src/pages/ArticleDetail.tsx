import { useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { MDXProvider } from "@mdx-js/react";
import welcome from "../content/articles/welcome.mdx";
import { useEffect, useState } from "react";
import type { MDXContent } from "../types/mdx";

const components = {
  h1: (props: any) => <h1 {...props} className="text-3xl font-bold mb-4" />,
  h2: (props: any) => <h2 {...props} className="text-2xl font-bold mb-3 mt-6" />,
  h3: (props: any) => <h3 {...props} className="text-xl font-bold mb-2 mt-4" />,
  p: (props: any) => <p {...props} className="mb-4 leading-relaxed" />,
  ul: (props: any) => <ul {...props} className="list-disc pl-6 mb-4" />,
  ol: (props: any) => <ol {...props} className="list-decimal pl-6 mb-4" />,
  li: (props: any) => <li {...props} className="mb-2" />,
  a: (props: any) => (
    <a {...props} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer" />
  ),
};

const ArticleDetail = () => {
  const { slug } = useParams();
  const [toc, setToc] = useState<Array<{ id: string; text: string; level: number }>>([]);
  const mdxModule = welcome as unknown as MDXContent;
  const article = mdxModule;

  useEffect(() => {
    // Extract headings from the MDX content for TOC
    const content = article.toString() || "";
    const headings = content.match(/^#{1,3}\s+.+$/gm) || [];
    const newToc = headings.map((heading) => {
      const level = heading.match(/^#+/)?.[0].length || 1;
      const text = heading.replace(/^#+\s+/, "");
      const id = text.toLowerCase().replace(/\s+/g, "-");
      return { id, text, level };
    });
    setToc(newToc);
  }, [article]);

  if (!article) {
    return <div>Article not found</div>;
  }

  const Content = article;

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Article content */}
          <div className="lg:col-span-3">
            <Card className="p-8 animate-fade-in">
              <h1 className="text-4xl font-bold mb-4">{article.frontmatter.title}</h1>
              <div className="text-gray-500 mb-8">{article.frontmatter.date}</div>
              <div className="prose dark:prose-invert max-w-none">
                <MDXProvider components={components}>
                  <Content />
                </MDXProvider>
              </div>
            </Card>
          </div>

          {/* Table of contents */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24 animate-fade-in">
              <h3 className="text-lg font-semibold mb-4">目录</h3>
              <nav className="space-y-2">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block text-gray-600 dark:text-gray-300 hover:text-primary transition-colors ${
                      item.level === 2 ? "pl-4" : item.level === 3 ? "pl-8" : ""
                    }`}
                  >
                    {item.text}
                  </a>
                ))}
              </nav>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;