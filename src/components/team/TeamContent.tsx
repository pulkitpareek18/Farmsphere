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
        className="w-full h-64 object-cover object-center"
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
      name: "Dr. James Chen",
      role: "Co-Founder & CEO",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "With a Ph.D. in Agricultural Engineering, James combines technical expertise with a passion for sustainable food systems.",
      linkedin: "#",
      twitter: "#",
      delay: 100
    },
    {
      name: "Maria Rodriguez",
      role: "Co-Founder & CTO",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "A pioneer in hydroponics system design with over 15 years of experience in agricultural technology innovation.",
      linkedin: "#",
      twitter: "#",
      delay: 200
    },
    {
      name: "Dr. Sarah Johnson",
      role: "Plant Science Director",
      image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Leading our research team in optimizing plant nutrition and growth conditions for various crop varieties.",
      linkedin: "#",
      delay: 300
    },
    {
      name: "Michael Thompson",
      role: "Engineering Lead",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Designs innovative hydroponics systems that maximize efficiency and minimize environmental impact.",
      linkedin: "#",
      delay: 400
    },
    {
      name: "Jennifer Parker",
      role: "Customer Success Manager",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Ensures our clients achieve optimal results with their hydroponics systems through training and support.",
      linkedin: "#",
      twitter: "#",
      delay: 500
    },
    {
      name: "David Lee",
      role: "Sustainability Officer",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Oversees our environmental initiatives and ensures our practices align with our sustainability goals.",
      linkedin: "#",
      delay: 600
    }
  ];

  const advisors = [
    {
      name: "Dr. Emily Wong",
      role: "Agricultural Economics Advisor",
      image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Professor of Agricultural Economics specializing in sustainable farming business models.",
      linkedin: "#",
      delay: 700
    },
    {
      name: "Robert Garcia",
      role: "Sustainable Agriculture Advisor",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Former Director of Agricultural Innovation at the Global Sustainability Institute.",
      linkedin: "#",
      twitter: "#",
      delay: 800
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
              twitter={member.twitter}
              delay={member.delay}
            />
          ))}
        </div>

        <AnimatedCard className="mb-16">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-semibold text-forest-green mb-6">
              Our Advisory Board
            </h2>
            <p className="text-graphite mb-8 max-w-3xl mx-auto">
              Industry experts who provide strategic guidance to help Farmsphere achieve its mission.
            </p>
          </div>
        </AnimatedCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advisors.map((advisor, index) => (
            <TeamMember
              key={index}
              name={advisor.name}
              role={advisor.role}
              image={advisor.image}
              bio={advisor.bio}
              linkedin={advisor.linkedin}
              twitter={advisor.twitter}
              delay={advisor.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamContent;