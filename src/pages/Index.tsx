import TypeWriter from "@/components/TypeWriter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div 
        className="h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://syntax.fm/_app/immutable/assets/whitegrit.D_d8Ws2A.png')" }}
      >
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <TypeWriter text="欢迎来到程序员海军的个人网站" />
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
            一个拥有超过6年经验的开发人员
          </p>
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400">
            独立开发 | 全栈开发 | AI爱好者
          </p>
          <p className="text-md text-gray-400 dark:text-gray-500">
            公众号：前端自学社区
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;