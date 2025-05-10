
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  featured = false,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "group relative overflow-hidden transition-all duration-500 crt-effect", 
        featured ? "lg:col-span-2" : "",
        "hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="glass-card h-full flex flex-col">
        <div className="relative overflow-hidden w-full h-48 sm:h-64">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110 opacity-80"
            style={{filter: "contrast(1.1) brightness(0.9)"}}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
          <div className="absolute top-2 right-2 px-2 py-1 bg-black/50 backdrop-blur-sm text-xs text-green-400 font-mono">
            {technologies[0]} / {technologies.length > 1 ? technologies[1] : ""}
          </div>
        </div>
        
        <div className="flex-1 p-6 scan-line">
          <div className="flex flex-wrap gap-2 mb-3">
            {technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-secondary/20 text-secondary-foreground border border-secondary/30">
                {tech}
              </Badge>
            ))}
            {technologies.length > 4 && (
              <Badge variant="secondary" className="bg-secondary/20 text-secondary-foreground border border-secondary/30">
                +{technologies.length - 4}
              </Badge>
            )}
          </div>
          
          <h3 className={cn(
            "text-xl font-bold vintage-text-shadow animate-glow",
            featured ? "sm:text-2xl" : ""
          )}>
            {title}
          </h3>
          
          <p className="mt-2 text-gray-400 animate-flicker">{description}</p>
          
          <div className="mt-4 flex flex-wrap items-center gap-3">
            {githubUrl && (
              <Button 
                size="sm" 
                variant="outline"
                className="border-white/10 hover:bg-white/5 vintage-box-shadow"
                asChild
              >
                <a href={githubUrl} target="_blank" rel="noreferrer" className="glass-button">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
            )}
            
            {liveUrl && (
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-primary to-secondary hover:brightness-110 vintage-box-shadow"
                asChild
              >
                <a href={liveUrl} target="_blank" rel="noreferrer" className="glass-button">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
