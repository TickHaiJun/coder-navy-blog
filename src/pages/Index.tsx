import TypeWriter from "@/components/TypeWriter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div 
        className="h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://syntax.fm/_app/immutable/assets/whitegrit.D_d8Ws2A.png')" }}
      >
        <div className="text-center space-y-8 animate-fade-in max-w-4xl mx-auto px-4">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide">你好，我是</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              海军
            </h1>
          </div>
          <div className="space-y-6">
            <TypeWriter 
              texts={[
                "独立开发 | 全栈开发 | AI爱好者",
                "一个拥有超过6年经验的开发人员",
                "A Web <Developer />"
              ]} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;