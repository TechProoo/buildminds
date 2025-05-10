
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. We'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? We'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="glass p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium mb-2">Our Social Channels</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/buildminds" 
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://linkedin.com/company/buildminds" 
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="mailto:hello@buildminds.example" 
                    className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-2">Email Us</h4>
                <p className="text-gray-400">hello@buildminds.example</p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-2">Visit Us</h4>
                <p className="text-gray-400">123 Innovation Street<br />Tech City, TC 10011</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/10 focus:border-primary"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/10 focus:border-primary"
                />
              </div>
              
              <div>
                <Input
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/10 focus:border-primary"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/10 focus:border-primary min-h-[150px]"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-secondary hover:brightness-110"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
