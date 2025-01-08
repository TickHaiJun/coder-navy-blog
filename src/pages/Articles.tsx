import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const article = {
  title: "欢迎来到我的博客",
  date: "2024-03-20",
  cover_image: "/placeholder.svg",
  description: "这是我的第一篇博客文章，让我们开始这段旅程吧！",
  category: "技术",
  tags: ["前端", "React", "Next.js"],
  slug: "welcome-post"
};

const Articles = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            文章
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            这里是关于我的技术的一些分享感悟
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card 
            className="card-hover cursor-pointer group"
            onClick={() => navigate(`/articles/${article.slug}`)}
          >
            <img
              src={article.cover_image}
              alt={article.title}
              className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="p-6 space-y-4">
              <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {article.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                {article.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{article.category}</span>
                <span>{article.date}</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Articles;