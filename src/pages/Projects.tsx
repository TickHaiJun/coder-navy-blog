import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "个人博客",
    description: "使用 React + TailwindCSS 构建的个人博客网站，支持暗黑模式和响应式设计",
    image: "/placeholder.svg",
    link: "https://github.com",
    tags: ["React", "TypeScript", "Tailwind CSS"]
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            我的项目
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            这里是关于我的一些项目
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="group overflow-hidden">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full text-black hover:scale-110 transition-transform"
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h2 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;