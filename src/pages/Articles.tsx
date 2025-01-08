import { Card } from "@/components/ui/card";

const article = {
  title: "欢迎来到我的博客",
  date: "2024-03-20",
  cover_image: "/placeholder.svg",
  description: "这是我的第一篇博客文章，让我们开始这段旅程吧！",
  category: "技术",
  tags: ["前端", "React", "Next.js"],
};

const Articles = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">文章</h1>
          <p className="text-gray-600 dark:text-gray-300">
            这里是关于我的技术的一些分享感悟
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="card-hover">
            <img
              src={article.cover_image}
              alt={article.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{article.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {article.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-primary/10 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-500">{article.date}</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Articles;