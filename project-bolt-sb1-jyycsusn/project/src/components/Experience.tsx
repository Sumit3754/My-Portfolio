import { Calendar, MapPin, Award, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Cybersecurity Intern",
      company: "Corizo Pvt. Ltd.",
      location: "Remote",
      period: "2025",
      type: "Internship",
      description: "Completed cybersecurity internship focusing on security best practices and threat analysis.",
      achievements: [
        "Learned security protocols and threat analysis",
        "Implemented security measures in development",
        "Collaborated with security team on projects"
      ],
      technologies: ["Cybersecurity", "Threat Analysis", "Security Protocols"]
    },
    {
      title: "Cybersecurity Intern",
      company: "Prodigy Infotech",
      location: "Remote",
      period: "2025",
      type: "Internship",
      description: "Worked on cybersecurity projects and learned about security implementation.",
      achievements: [
        "Gained hands-on cybersecurity experience",
        "Learned security implementation",
        "Collaborated on security projects"
      ],
      technologies: ["Cybersecurity", "Security Implementation", "Project Management"]
    }
  ];

  const certifications = [
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2025",
      icon: <Award className="text-orange-600" size={20} />
    },
    {
      name: "Mahindra Tech Skill India Cybersecurity",
      issuer: "Mahindra Tech Skill India",
      date: "2025",
      icon: <Award className="text-blue-600" size={20} />
    },
    {
      name: "Google Cloud Labs",
      issuer: "Google Cloud",
      date: "2025",
      icon: <Award className="text-blue-600" size={20} />
    },
    {
      name: "Google AI Labs (Exchange Program)",
      issuer: "Google AI",
      date: "2025",
      icon: <Award className="text-green-600" size={20} />
    },
    {
      name: "Certified Full-Stack Developer",
      issuer: "Devtown",
      date: "2025",
      icon: <Award className="text-blue-500" size={20} />
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2025",
      icon: <Award className="text-blue-600" size={20} />
    },
    {
      name: "MongoDB Certified",
      issuer: "MongoDB",
      date: "2025",
      icon: <Award className="text-yellow-600" size={20} />
    },
    {
      name: "Python Essentials",
      issuer: "Scaler",
      date: "2025",
      icon: <Award className="text-green-600" size={20} />
    }

  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey of continuous growth and innovation in full-stack development and AI integration
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                
                <div className="ml-20 bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                      <div className="flex items-center text-blue-600 font-semibold mb-2">
                        <TrendingUp size={18} className="mr-2" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col lg:items-end text-gray-600">
                      <div className="flex items-center mb-1">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Certifications & Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="flex justify-center mb-4">{cert.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{cert.name}</h4>
                <p className="text-gray-600 text-sm mb-2">{cert.issuer}</p>
                <p className="text-blue-600 font-semibold text-sm">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;