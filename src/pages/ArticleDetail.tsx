import { useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";

const ArticleDetail = () => {
  const { slug } = useParams();

  // This is a placeholder article. In a real app, you would fetch the article based on the slug
  const article = {
    title: "欢迎来到我的博客",
    date: "2024-03-20",
    content: "# 欢迎来到我的博客\n\n这是我的第一篇博客文章，让我们开始这段旅程吧！\n\n## 介绍\n\n在这里，我将分享我的技术经验和见解。",
    toc: [
      { id: "welcome", text: "欢迎来到我的博客", level: 1 },
      { id: "intro", text: "介绍", level: 2 },
    ]
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Article content */}
          <div className="lg:col-span-3">
            <Card className="p-8 animate-fade-in">
              <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
              <div className="text-gray-500 mb-8">{article.date}</div>
              <div className="prose dark:prose-invert max-w-none">
                {article.content}
              </div>
            </Card>
          </div>

          {/* Table of contents */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24 animate-fade-in">
              <h3 className="text-lg font-semibold mb-4">目录</h3>
              <nav className="space-y-2">
                {article.toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block text-gray-600 dark:text-gray-300 hover:text-primary transition-colors ${
                      item.level === 2 ? "pl-4" : ""
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