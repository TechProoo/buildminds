
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const text = "BUILD MINDS";

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      } else if (!isComplete) {
        setIsComplete(true);
        setTimeout(() => {
          setFadeOut(true);
        }, 500);
      }
    }, 30);

    return () => clearTimeout(timer);
  }, [progress, isComplete]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center bg-background",
        "transition-opacity duration-1000",
        fadeOut && "opacity-0 pointer-events-none"
      )}
    >
      <div className="w-80 sm:w-96 mb-8">
        <div className="relative h-2 w-full bg-muted overflow-hidden rounded-full">
          <div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-secondary"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-3 flex justify-between items-center">
          <span className="text-xs text-muted-foreground">{`Loading... ${progress}%`}</span>
          <span className="text-xs text-muted-foreground">Build Minds</span>
        </div>
      </div>

      <div className="flex space-x-2 mt-4">
        {text.split("").map((char, i) => (
          <span
            key={i}
            className={cn(
              "text-4xl sm:text-5xl font-bold inline-block",
              "bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
            )}
            style={{
              animationDelay: `${i * 0.1}s`,
              animationDuration: "3s",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loader;
