
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const codeSnippet = `
function BuildMinds() {
  const vision = "Building the future";
  const devs = ["innovative", "young", "talented"];
  
  return devs.map(dev => 
    \`\${dev} minds \${vision.toLowerCase()}\`
  );
}`;

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <h1 className="animate-fade-in text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="text-gradient">Build Minds.</span> Young Devs<br />
              <span className="terminal-text">Building The Future</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
              A collective of visionary developers crafting impactful digital solutions. We turn ideas into reality through code, collaboration, and creativity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                className="bg-gradient-to-r from-primary to-secondary hover:brightness-110 transition-all text-lg py-6"
                asChild
              >
                <a href="#projects">
                  View Our Projects <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="text-white border-white/20 hover:bg-white/10 text-lg py-6"
                asChild
              >
                <a href="#about">Meet Our Team</a>
              </Button>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-xl">
            <div className="glass p-4 rounded-xl shadow-2xl">
              <div className="bg-black/80 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-gray-300">
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
