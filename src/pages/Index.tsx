import TypeWriter from "@/components/TypeWriter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div 
        className="h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://syntax.fm/_app/immutable/assets/whitegrit.D_d8Ws2A.png')" }}
      >
        <div className="text-center space-y-6 animate-fade-in max-w-4xl mx-auto px-4">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl">你好，我是</h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              海军
            </h1>
          </div>
          <div className="space-y-4">
            <TypeWriter text="独立开发 | 全栈开发 | AI爱好者" />
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              一个拥有超过6年经验的开发人员
            </p>
            <p className="text-2xl md:text-3xl font-mono">
              A Web <span className="text-primary">&lt;Developer /&gt;</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;