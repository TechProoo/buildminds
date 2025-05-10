
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";
import { cn } from "@/lib/utils";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  
  const projects = [
    {
      id: 1,
      title: "EcoTrack Dashboard",
      description: "A comprehensive dashboard for monitoring environmental data with real-time analytics and interactive visualizations.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      technologies: ["React", "D3.js", "Node.js", "MongoDB"],
      category: "web",
      featured: true,
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "MindWave AI Assistant",
      description: "An AI-powered personal assistant with natural language processing capabilities for task management.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      technologies: ["Python", "TensorFlow", "Flask", "React"],
      category: "ai",
      liveUrl: "#",
    },
    {
      id: 3,
      title: "BlockChain Voting System",
      description: "Secure and transparent voting platform built on blockchain technology ensuring tamper-proof elections.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      technologies: ["Solidity", "Ethereum", "Web3.js", "React"],
      category: "blockchain",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Urban Mobility App",
      description: "A mobile application that integrates various transportation methods for efficient city navigation.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      technologies: ["React Native", "Redux", "Firebase", "Google Maps API"],
      category: "mobile",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Health Monitor Wearable",
      description: "IoT wearable device with companion app for real-time health monitoring and data analysis.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      technologies: ["IoT", "Arduino", "React Native", "Firebase"],
      category: "iot",
      featured: true,
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Augmented Learning Platform",
      description: "Educational platform using augmented reality to enhance the learning experience for STEM subjects.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      technologies: ["Unity", "AR.js", "Three.js", "Node.js"],
      category: "ar",
      liveUrl: "#",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web" },
    { id: "mobile", label: "Mobile" },
    { id: "ai", label: "AI" },
    { id: "blockchain", label: "Blockchain" },
    { id: "iot", label: "IoT" },
    { id: "ar", label: "AR/VR" },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-black/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">Our Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of innovative solutions across different domains, 
            showcasing our technical expertise and problem-solving capabilities.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setFilter(category.id)}
              variant={filter === category.id ? "default" : "outline"}
              className={cn(
                filter === category.id 
                  ? "bg-gradient-to-r from-primary to-secondary hover:brightness-110" 
                  : "border-white/10 hover:bg-white/5",
                "text-sm"
              )}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              featured={project.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
