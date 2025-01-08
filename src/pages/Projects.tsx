import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "个人博客",
    description: "使用 React + TailwindCSS 构建的个人博客网站",
    image: "/placeholder.svg",
    link: "https://github.com",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">我的项目</h1>
          <p className="text-gray-600 dark:text-gray-300">
            这里是关于我的一些项目
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="card-hover">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  查看项目 →
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;