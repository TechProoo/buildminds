
import { cn } from "@/lib/utils";
import { useState } from "react";

interface TechItem {
  name: string;
  icon: string;
  category: string;
  description: string;
}

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  
  const technologies: TechItem[] = [
    // Frontend
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "frontend", description: "Building dynamic user interfaces with component-based architecture" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "frontend", description: "Adding type safety to our JavaScript codebases" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", category: "frontend", description: "Creating optimized React applications with server-side rendering" },
    { name: "Tailwind CSS", icon: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg", category: "frontend", description: "Utility-first CSS framework for rapid UI development" },
    { name: "Framer Motion", icon: "https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png", category: "frontend", description: "Creating fluid animations and interactions" },
    
    // Backend
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "backend", description: "Server-side JavaScript runtime for scalable applications" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", category: "backend", description: "Fast, unopinionated web framework for Node.js" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "backend", description: "Versatile language for web backends, data analysis, and ML" },
    { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg", category: "backend", description: "High-performance language for efficient microservices" },
    { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", category: "backend", description: "API query language for more efficient data fetching" },
    
    // Database
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "database", description: "NoSQL database for flexible, scalable data storage" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "database", description: "Powerful, open-source object-relational database" },
    { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", category: "database", description: "In-memory data structure store for caching and messaging" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", category: "database", description: "Platform for developing web and mobile applications" },
    
    // DevOps & Tools
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "devops", description: "Containerization for consistent development and deployment" },
    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", category: "devops", description: "Container orchestration for scalable applications" },
    { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", category: "devops", description: "CI/CD automation directly in GitHub repositories" },
    { name: "AWS", icon: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", category: "devops", description: "Comprehensive cloud platform for all applications" },
  ];

  const categories = [
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "database", name: "Databases" },
    { id: "devops", name: "DevOps" },
  ];

  const filteredTech = technologies.filter(tech => tech.category === activeCategory);

  return (
    <section id="tech-stack" className="py-20 bg-gradient-to-b from-black/50 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">Our Tech Stack</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Harnessing modern technologies to build powerful, scalable, and elegant solutions.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-4 py-2 rounded-full transition-all",
                activeCategory === category.id
                  ? "bg-gradient-to-r from-primary to-secondary text-white"
                  : "bg-white/5 hover:bg-white/10 text-gray-300"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
          {filteredTech.map((tech, index) => (
            <div 
              key={tech.name}
              className="glass p-6 flex flex-col items-center text-center hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all group"
            >
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className="w-12 h-12 object-contain group-hover:scale-110 transition-transform"
                />
              </div>
              <h3 className="font-medium mb-2">{tech.name}</h3>
              <p className="text-xs text-gray-400">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
