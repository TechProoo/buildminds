
import TeamMember from "./TeamMember";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Full Stack Developer",
      bio: "Passionate about building scalable web applications with modern technologies and best practices.",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3",
      links: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "alex@buildminds.example",
      },
    },
    {
      name: "Mia Chen",
      role: "UI/UX Designer",
      bio: "Creating user-centered designs that blend aesthetics with functionality for exceptional user experiences.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1622&auto=format&fit=crop&ixlib=rb-4.0.3",
      links: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Jamal Wilson",
      role: "AI/ML Engineer",
      bio: "Developing intelligent systems that leverage machine learning to solve complex problems.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3",
      links: {
        github: "https://github.com",
        email: "jamal@buildminds.example",
      },
    },
    {
      name: "Sophia Rodriguez",
      role: "Blockchain Developer",
      bio: "Exploring distributed ledger technologies to build secure and transparent applications.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3",
      links: {
        linkedin: "https://linkedin.com",
        email: "sophia@buildminds.example",
      },
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">About Us</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We are a team of young, visionary developers, designers, and innovators passionate about creating impactful digital solutions.
          </p>
        </div>

        <div className="mb-16">
          <div className="glass p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-300 mb-6">
              At Build Minds, we believe in the power of technology to transform ideas into reality. Our mission is to create innovative digital solutions that solve real-world problems while fostering a community where young developers can grow and collaborate.
            </p>
            <p className="text-gray-300 mb-6">
              We're committed to continuous learning, pushing the boundaries of what's possible, and sharing our knowledge with the next generation of tech leaders.
            </p>
            <div className="flex justify-center">
              <Button 
                className="bg-gradient-to-r from-primary to-secondary hover:brightness-110 transition-all"
                asChild
              >
                <a href="#contact">
                  Join Our Journey <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-8 text-center">Meet Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
              links={member.links}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
