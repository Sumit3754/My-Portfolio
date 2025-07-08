import React from 'react';
import { Code2, Database, Cloud, Brain, Smartphone, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="text-blue-600" size={32} />,
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "Tailwind CSS", level: 92 }
      ]
    },
    {
      icon: <Database className="text-green-600" size={32} />,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 93 },
        { name: "Python", level: 88 },
        { name: "PostgreSQL", level: 87 },
        { name: "GraphQL", level: 82 }
      ]
    },
    {
      icon: <Cloud className="text-purple-600" size={32} />,
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 89 },
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 78 },
        { name: "CI/CD", level: 86 }
      ]
    },
    {
      icon: <Brain className="text-red-600" size={32} />,
      title: "AI & Machine Learning",
      skills: [
        { name: "TensorFlow", level: 84 },
        { name: "OpenAI API", level: 91 },
        { name: "LangChain", level: 87 },
        { name: "Hugging Face", level: 83 }
      ]
    },
    {
      icon: <Smartphone className="text-indigo-600" size={32} />,
      title: "Mobile Development",
      skills: [
        { name: "React Native", level: 86 },
        { name: "Flutter", level: 79 },
        { name: "PWA", level: 88 },
        { name: "Expo", level: 84 }
      ]
    },
    {
      icon: <Globe className="text-teal-600" size={32} />,
      title: "Web Technologies",
      skills: [
        { name: "WebRTC", level: 81 },
        { name: "WebSockets", level: 89 },
        { name: "Service Workers", level: 85 },
        { name: "WebAssembly", level: 76 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, intelligent applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-900 ml-3">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'JavaScript', 'TypeScript', 'Python', 'React', 'Next.js', 'Vue.js', 'Node.js', 
              'Express', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'Docker', 
              'Kubernetes', 'TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'Supabase',
              'Firebase', 'Vercel', 'Netlify', 'GitHub Actions', 'Jest', 'Cypress'
            ].map((tech) => (
              <span key={tech} className="bg-white text-gray-700 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;