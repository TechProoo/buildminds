import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";
import { cn } from "@/lib/utils";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Medmap",
      description:
        "An AI-powered healthcare platform that helps users locate nearby pharmacies with specific medications in stock. Features include real-time inventory tracking, an intelligent AI health assistant for personalized advice, and integration with local healthcare providers. The platform bridges the gap between patients and accessible healthcare services across Nigeria.",
      image: "/src/assets/projects/medmap.png",
      technologies: ["React", "Next.js", "Node.js", "AI/ML", "MongoDB", "Google Maps API", "OpenAI API", "Socket.io"],
      category: "ai",
      featured: true,
      liveUrl: "https://medmap.live/",
      githubUrl: "https://github.com/prospercoded/medmap",
    },
    {
      id: 2,
      title: "UniNav",
      description:
        "A collaborative university study materials platform that enables students to upload, organize, and discover course-related resources by faculty and department. Features include advanced search functionality, peer review systems, discussion forums, and analytics to track helpful content, creating a comprehensive knowledge base for academic collaboration.",
      image: "/src/assets/projects/uninav.png",
      technologies: ["React", "Node.js", "PostgreSQL", "Express", "Socket.io", "Elasticsearch", "NestJS"],
      category: "web",
      featured: true,
      liveUrl: "https://uninav.live",
      githubUrl: "https://github.com/prospercoded/uninav",
    },
    {
      id: 3,
      title: "9jamarket",
      description:
        "A digital trade platform connecting traditional markets, vendors, and consumers across Nigeria. The platform enables vendors to showcase products online while providing customers with real-time inventory, price comparisons, and secure payment options. Features include geo-location services, multi-language support, and integrated logistics for delivery coordination.",
      image: "/src/assets/projects/9jamarket.png",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "Paystack"],
      category: "web",
      featured: true,
      liveUrl: "https://9jamarket.com",
      githubUrl: "https://github.com/prospercoded/9jamarket-Frontend",
    },
    {
      id: 4,
      title: "Eniola Store",
      description:
        "An e-commerce platform enabling market vendors to showcase products while allowing users to connect and contact vendors to make purchases. The platform ensures secure authentication with OAuth2 and integrates PostgreSQL for robust data management.",
      image: "/src/assets/projects/eniola-store.png",
      technologies: ["Next.js", "PostgreSQL", "OAuth2", "React"],
      category: "web",
      featured: true,
      liveUrl: "https://eniola-store2.vercel.app",
      githubUrl: "https://github.com/willy-wonka28/eniola-store",
    },
    {
      id: 5,
      title: "Habitual",
      description:
        "A productivity web app with a structured API for precise habit tracking, goal setting, and team collaboration. It allows users to create and monitor daily habits, set long-term goals, and collaborate efficiently within teams.",
      image: "/src/assets/projects/habitual.png",
      technologies: ["NestJS", "React", "PostgreSQL", "Node.js"],
      category: "web",
      liveUrl: "https://habitual-coded.netlify.app/",
      githubUrl: "https://github.com/willy-wonka28/habitual",
    },
    {
      id: 6,
      title: "Telegram Bot",
      description:
        "A powerful Telegram bot for managing CopperX cryptocurrency transactions, wallet operations, and user authentication. This bot enables seamless cryptocurrency transfers and wallet management through a convenient Telegram interface.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      technologies: ["Node.js", "Redis", "WebSockets", "Telegram API"],
      category: "blockchain",
      githubUrl: "#",
      liveUrl: "https://t.me/buildminds_copperx_payout_bot",
    },
   
    {
      id: 7,
      title: "SmooveAI",
      description:
        "An innovative AI-driven platform that focuses on teaching programming concepts through interactive conversations. SmooveAI enhances the learning experience by breaking down complex coding topics and making them easier to understand.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      technologies: ["React", "AI/ML", "Node.js", "OpenAI API"],
      category: "ai",
      featured: true,
      liveUrl: "#",
    },
    {
      id: 8,
      title: "VAAV",
      description:
        "A commercial website for finding, renting, or purchasing plug-and-play batteries (PowerCube) that are clean and affordable. The platform offers a seamless and efficient way to access renewable energy solutions.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      technologies: ["React", "Tailwind CSS", "Vercel", "JavaScript"],
      category: "web",
      liveUrl: "#",
    },
    {
      id: 9,
      title: "Venduit",
      description:
        "A platform designed to showcase and invest in various business and financial opportunities, providing users with insights and investment options across multiple industries.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      technologies: ["Next.js", "TypeScript", "Vercel", "React"],
      category: "web",
      liveUrl: "#",
    },
    {
      id: 10,
      title: "OKM Treats",
      description:
        "A delightful, user-friendly online bakery experience, featuring easy product browsing, seamless checkout, and a unique menu centered around the ever-popular banana bread. Perfect for customers to place orders with a smooth shopping journey.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      technologies: ["React", "Next.js", "JavaScript", "CSS"],
      category: "web",
      liveUrl: "#",
    },
    {
      id: 11,
      title: "News Website",
      description:
        "A clean, modern news platform designed to deliver the latest stories with a seamless user experience. Features an intuitive layout, smooth navigation, and dynamic content presentation—perfect for keeping users engaged.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      technologies: ["React", "JavaScript", "CSS", "HTML"],
      category: "web",
      liveUrl: "#",
    },
    {
      id: 12,
      title: "Helio Power",
      description:
        "A sleek, professional portfolio showcasing a solar energy business with eco-friendly products. The website highlights Helio Power's mission, offerings, and commitment to sustainability with an engaging user interface.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
      category: "web",
      liveUrl: "#",
    },
    {
      id: 13,
      title: "Anon",
      description:
        "Anon provides a simple interface for creating groups and having discussions.",
      image: "/src/assets/projects/anon.png",
      technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript", "NextJS", "Cloudinary", "Cypress", "MongoDB", "Prisma"],
      category: "web",
      liveUrl: "https://anon-posts.vercel.app/",
    },
    {
      id: 14,
      title: "Perfect Arts",
      description:
        "A black-and-white themed portfolio website for a renowned hyperrealism artist. With an improved SEO strategy, this website ranks no. 1 on the Google search engine for relevant search terms.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      technologies: ["Vanilla JS", "HTML", "CSS", "SEO"],
      category: "web",
      liveUrl: "https://perfect-arts.vercel.app/",
    },
   
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web" },
    { id: "ai", label: "AI" },
    { id: "blockchain", label: "Blockchain" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-background to-black/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient animate-glow">Our Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto animate-slide-up">
            Explore our portfolio of innovative solutions across different
            domains, showcasing our technical expertise and problem-solving
            capabilities.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category, index) => (
            <Button
              key={category.id}
              onClick={() => setFilter(category.id)}
              variant={filter === category.id ? "default" : "outline"}
              className={cn(
                filter === category.id
                  ? "bg-gradient-to-r from-primary to-secondary hover:brightness-110"
                  : "border-white/10 hover:bg-white/5",
                "text-sm animate-fade-in",
                `animation-delay-${index * 100}`
              )}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "animate-slide-up opacity-0",
                `animation-delay-${index * 200}`
              )}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                featured={project.featured}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
