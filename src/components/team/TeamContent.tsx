import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';
import AnimatedCard from '../common/AnimatedCard';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
  delay: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  image,
  bio,
  linkedin,
  twitter,
  delay
}) => {
  return (
    <AnimatedCard delay={delay} className="bg-white rounded-xl shadow-md overflow-hidden">
      <img
        src={image}
        alt={name}
        className="mx-auto w-48 h-auto object-contain object-center bg-gray-100 rounded-lg"
      />
      <div className="p-6">
        <h3 className="font-heading font-semibold text-xl text-charcoal mb-1">{name}</h3>
        <p className="text-forest-green font-medium mb-4">{role}</p>
        <p className="text-graphite mb-4">{bio}</p>
        <div className="flex space-x-3">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-graphite hover:text-forest-green transition-colors duration-200"
              aria-label={`${name}'s LinkedIn profile`}
            >
              <Linkedin size={20} />
            </a>
          )}
          {twitter && (
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-graphite hover:text-forest-green transition-colors duration-200"
              aria-label={`${name}'s Twitter profile`}
            >
              <Twitter size={20} />
            </a>
          )}
        </div>
      </div>
    </AnimatedCard>
  );
};

const TeamContent: React.FC = () => {
  const teamMembers = [
    {
      name: "Akash Gupta",
      role: "Founder & CEO",
      image: "/akashgupta.jpg",
      bio: "Visionary founder with a passion for sustainable agriculture and innovative hydroponics solutions.",
      linkedin: "https://www.linkedin.com/in/akash-gupta-96bb48261/",
      delay: 100
    },
    {
      name: "Navaditya Singh Rana",
      role: "Co-Founder & CTO",
      image: "/navaditya.jpg",
      bio: "Co-founder and technology leader, driving the development of advanced hydroponics systems.",
      linkedin: "https://www.linkedin.com/in/navaditya-singh-rana-853b3a324/",
      delay: 200
    },
    {
      name: "Tanya Gupta",
      role: "Co-Founder & Research Head",
      image: "/tanya.jpg",
      bio: "Heads research initiatives, ensuring scientific rigor and innovation in all projects.",
      linkedin: "https://www.linkedin.com/in/tanya-gupta-365612284/",
      delay: 300
    },
    {
      name: "Ambika Swargiary",
      role: "Research Analyst",
      image: "/ambika.jpeg.jpg",
      bio: "Research analyst dedicated to data-driven insights and sustainable agricultural practices.",
      linkedin: "https://www.linkedin.com/in/ambika-swargiary-8710ab362/",
      delay: 400
    },
    {
      name: "Rahul Sangwan",
      role: "Project Head",
      image: "/rahulsangwan.jpg",
      bio: "Project head focused on delivering innovative hydroponics solutions and managing cross-functional teams.",
      linkedin: "https://www.linkedin.com/in/rahul-sangwan-0b8995282/",
      delay: 500
    },
    {
      name: "Pranav Singh",
      role: "Video Editor & Animations",
      image: "/pranav.jpg",
      bio: "Creative video editor specializing in animations and visual storytelling.",
      linkedin: "https://www.linkedin.com/in/pranav-singh-350974301/",
      delay: 600
    }
  ];

  return (
    <section className="pt-28 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedCard>
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Meet Our <span className="text-forest-green">Team</span>
            </h1>
            <p className="text-graphite text-lg mb-8 max-w-3xl mx-auto">
              Our diverse team of experts is passionate about revolutionizing agriculture through hydroponics technology and sustainable practices.
            </p>
          </div>
        </AnimatedCard>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              bio={member.bio}
              linkedin={member.linkedin}
              delay={member.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamContent;