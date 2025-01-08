import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8">
            <h1 className="text-4xl font-bold mb-8 text-center">关于我</h1>
            <div className="space-y-6 text-lg">
              <p>
                你好！我是程序员海军，一个热爱技术的开发者。在过去的6年里，我一直在前端和全栈开发领域不断探索和成长。
              </p>
              <p>
                我热衷于学习新技术，特别是在AI领域。同时，我也在运营"前端自学社区"公众号，希望能帮助更多的人学习编程。
              </p>
              <p>
                如果你想和我交流，可以通过以下方式联系我：
              </p>
              <p className="font-bold">
                微信：daxin261
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;