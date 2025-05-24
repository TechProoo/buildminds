import TeamMember from "./TeamMember";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Prosper Enwerem Tochukwu",
      role: "Fullstack & Backend Engineer",
      bio: "Expertise: API Development, Database Design, Real-time Systems, Payment Integrations, Software Architecture, Deployment Strategies",
      image: "/src/assets/team/prospercoded.png",
      links: {
        github: "https://github.com/prospercoded",
        linkedin: "https://linkedin.com/in/prospercoded",
        email: "enweremproper@gmail.com",
      },
    },
    {
      name: "Oyetibo Olaoluwa Emmanuel",
      role: "UI/UX Designer & Fullstack Developer",
      bio: "Expertise: UI/UX Research, Responsive Web Design, Frontend Development, Accessibility",
      image: "/src/assets/team/techpro.png",
      links: {
        github: "https://github.com/Techprooo",
        linkedin: "https://linkedin.com/in/oyetibo-olaoluwa",
      },
    },
    {
      name: "Adole David Enencheje",
      role: "Project Manager & Fullstack Development",
      bio: "Expertise: Project Planning & Tracking, Agile Project Management, Basic Fullstack Development",
      image: "/src/assets/team/willy-wonka.png",
      links: {
        github: "https://github.com/willy-wonka28",
        linkedin: "https://www.linkedin.com/in/david-adole-887057304/",
        email: "adoledavid345@gmail.com",
      },
    },
    {
      name: "Chisom Hermes Chigoziri",
      role: "UI/UX Designer/Researcher & Frontend Developer",
      bio: "Expertise: UI/UX Research, Responsive Web Design, Frontend Development, Accessibility",
      image: "/src/assets/team/chisom.png",
      links: {
        github: "https://github.com/TruePadawan",
        linkedin: "https://www.linkedin.com/in/hermeschi",
        email: "chisomhermes@gmail.com",
      },
    }
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

        <h3 className="text-2xl font-bold mb-8 text-center">Meet The Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
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
