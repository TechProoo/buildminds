
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  links: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

const TeamMember = ({ name, role, bio, image, links }: TeamMemberProps) => {
  return (
    <Card className="glass overflow-hidden group">
      <div className="relative overflow-hidden">
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-4">
          <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
          <p className={cn(
            "inline-block text-xs font-medium px-2 py-0.5 rounded-full whitespace-nowrap overflow-hidden text-ellipsis",
            "bg-primary/30 text-primary-foreground"
          )}>
            {role}
          </p>
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-gray-400">{bio}</p>
        
        <div className="mt-4 flex gap-3">
          {links.github && (
            <a 
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label={`${name}'s GitHub`}
            >
              <Github size={20} />
            </a>
          )}
          
          {links.linkedin && (
            <a 
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label={`${name}'s LinkedIn`}
            >
              <Linkedin size={20} />
            </a>
          )}
          
          {links.email && (
            <a 
              href={`mailto:${links.email}`}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label={`Email ${name}`}
            >
              <Mail size={20} />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};

export default TeamMember;
