import { Card } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 space-y-8 animate-fade-in glass-card">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                关于我
              </h1>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            </div>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                你好！我是程序员海军，一个热爱技术的开发者。在过去的6年里，我一直在前端和全栈开发领域不断探索和成长。
              </p>
              <p>
                我热衷于学习新技术，特别是在AI领域。同时，我也在运营"前端自学社区"公众号，希望能帮助更多的人学习编程。
              </p>
              
              <div className="mt-8 space-y-6">
                <h2 className="text-2xl font-semibold">联系方式</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <a 
                    href="https://img-hello-world.oss-cn-beijing.aliyuncs.com/imgs/c95cfc940e64c8f034898e884d64ec28.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    <MessageSquare className="w-6 h-6" />
                    <span className="font-medium">微信：daxin261</span>
                  </a>
                  
                  <a 
                    href="https://img-hello-world.oss-cn-beijing.aliyuncs.com/imgs/a6cad1fdf269dfd4e5e4d684d92efe4e.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    <MessageSquare className="w-6 h-6" />
                    <span className="font-medium">公众号：前端自学社区</span>
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;