import { useState, useEffect } from "react";

const gradients = [
  "from-purple-500 to-blue-500",
  "from-blue-500 to-green-500",
  "from-green-500 to-yellow-500",
  "from-yellow-500 to-red-500",
  "from-red-500 to-purple-500",
];

const TypeWriter = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gradient, setGradient] = useState(gradients[0]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradient(gradients[Math.floor(Math.random() * gradients.length)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-block">
      <span
        className={`gradient-text ${gradient} font-bold`}
        style={{ whiteSpace: "pre-wrap" }}
      >
        {displayText}
      </span>
      <span className="animate-cursor-blink">|</span>
    </div>
  );
};

export default TypeWriter;