import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import DotCard from "@/components/ui/moving-dot-card";

const Hero = () => {
  const codeSnippet = `
function BuildMinds() {
  const mission = "Transforming ideas into reality";
  const expertise = ["cutting-edge", "scalable", "performance-driven"];
  const solutions = ["web technologies", "digital experiences"];
  
  return {
    vision: "Elite builders crafting the future",
    approach: expertise.map(skill => 
      \`\${skill} solutions that enhance lives\`
    ),
    focus: solutions
  };
}`;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full filter blur-2xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full filter blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/20 rounded-full filter blur-xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <h1 className="animate-fade-in text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight vintage-text-shadow">
              <span className="text-gradient animate-glow">Build Minds.</span>{" "}
              Elite Builders
              <br />
              <span className="terminal-text scan-line">
                Building The Future
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 animate-flicker">
              We are an elite team of visionary builders dedicated to transforming ideas into elegant, 
              high-impact solutions that enhance efficiency and improve lives. We craft immersive digital 
              experiences that merge innovation with functionality, delivering seamless, scalable, and 
              performance-driven solutions through cutting-edge web technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                className="bg-gradient-to-r from-primary to-secondary hover:brightness-110 transition-all text-lg py-6 relative overflow-hidden"
                asChild
              >
                <a href="#projects" className="glass-button">
                  View Our Projects <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                className="text-white border-white/20 hover:bg-white/10 text-lg py-6 relative overflow-hidden"
                asChild
              >
                <a href="#about" className="glass-button">
                  Meet Our Team
                </a>
              </Button>
            </div>
          </div>

          <div className="flex-1 w-full max-w-xl">
            <div className="glass-card p-4 rounded-xl shadow-2xl crt-effect">
              <div className="bg-black/80 rounded-lg p-4 font-mono text-sm overflow-x-auto scan-line">
                <div className="flex items-center mb-2 text-xs text-gray-400">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span>build_minds.js</span>
                </div>
                <pre className="text-green-400 animate-flicker">
                  <code>{codeSnippet}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
