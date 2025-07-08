import { Award, Users, Lightbulb, Target } from 'lucide-react';
import type { ReactNode } from 'react';

interface Highlight {
  icon: ReactNode;
  title: string;
  description: string;
}

const About = () => {
  const highlights: Highlight[] = [
    {
      icon: <Users className="text-blue-600" size={24} />,
      title: "BCA Student",
      description: "Pursuing Bachelor of Computer Applications with enthusiasm for technology"
    },
    {
      icon: <Lightbulb className="text-purple-600" size={24} />,
      title: "Learning Journey",
      description: "Exploring the world of computer science and web development"
    },
    {
      icon: <Target className="text-green-600" size={24} />,
      title: "Career Goals",
      description: "Aiming to build impactful software solutions and contribute to the tech community"
    },
    {
      icon: <Award className="text-red-600" size={24} />,
      title: "Academic Excellence",
      description: "Consistent academic performance with focus on practical knowledge"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-xl font-semibold text-gray-900 mb-4">About Me</h4>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Full-Stack Developer & AI Specialist | Cybersecurity Enthusiast | AWS Cloud Practitioner
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                I'm Sumit Chauhan, a Full-Stack Developer with 1 year of hands-on experience. Currently exploring 
                and building AI agents while working with cloud technologies.
              </p>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold mb-2">Professional Experience</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium">Cybersecurity Internships</h5>
                    <ul className="list-disc list-inside mt-2">
                      <li>Corizo Pvt. Ltd.</li>
                      <li>Prodigy Infotech</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Certifications</h4>
                <ul className="list-disc list-inside mt-2">
                  <li>AWS Cloud Practitioner (testing phase)</li>
                  <li>Mahindra Tech Skill India Cybersecurity</li>
                  <li>Google Cloud Labs</li>
                  <li>Google AI Labs (Exchange Program)</li>
                  <li>Certified Full-Stack Developer from Devtown</li>
                </ul>
              </div>
              <p>
                Passionate about AI, Cybersecurity, Cloud Computing, and Prompt Engineering. Open to 
                collaboration in AI/ML and Security-based projects. Email: sumitchauhan373754@gmail.com
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Core Values</h4>
              <div className="flex flex-wrap gap-3">
                {['Full-Stack', 'Cybersecurity', 'AI/ML', 'Cloud', 'Prompt Engineering'].map((value, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">{highlight.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h4>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;