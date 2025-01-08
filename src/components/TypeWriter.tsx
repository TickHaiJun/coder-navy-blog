import { useState, useEffect } from "react";

const gradients = [
  "from-purple-500 to-blue-500",
  "from-blue-500 to-green-500",
  "from-green-500 to-yellow-500",
  "from-yellow-500 to-red-500",
  "from-red-500 to-purple-500",
];

const TypeWriter = ({ texts }: { texts: string[] }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [gradient, setGradient] = useState(gradients[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    if (!isDeleting && currentIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText.length > 0) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
      }, 50);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && currentIndex >= currentText.length) {
      setTimeout(() => setIsDeleting(true), 2000);
    }

    if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setCurrentIndex(0);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }
  }, [currentIndex, textIndex, texts, isDeleting, displayText]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradient(gradients[Math.floor(Math.random() * gradients.length)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-block min-h-[2em]">
      <span
        className={`gradient-text ${gradient} font-mono text-xl md:text-2xl`}
        style={{ whiteSpace: "pre-wrap" }}
      >
        {displayText}
      </span>
      <span className="animate-cursor-blink">|</span>
    </div>
  );
};

export default TypeWriter;