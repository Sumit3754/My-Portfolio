import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Netflix Data Analyzer",
      category: "AI/ML",
      description: "A machine learning-powered tool that analyzes Netflix dataset trends, user preferences, and patterns using visualizations and predictive models.",
      image: "https://images.unsplash.com/photo-1605379399642-870262d3d081?auto=format&fit=crop&q=80",
      techStack: ["Python", "Pandas", "Jupyter", "Matplotlib", "Seaborn"]
    },
    {
      title: "Wellness Subscription Manager",
      category: "Health + AI",
      description: "A full-stack health tracking platform that allows users to log workouts, manage routines, and get AI-based responses to health and fitness queries through a chatbot.",
      image: "https://images.unsplash.com/photo-1605379399642-870262d3d081?auto=format&fit=crop&q=80",
      techStack: ["JavaScript", "React", "Node.js", "Express.js", "OpenAI API", "MongoDB", "CSS"]
    },
    {
      title: "Crypto Market Pulse Analyzer",
      category: "Web3/Finance",
      description: "A real-time crypto dashboard that visualizes live cryptocurrency prices and market trends. Some functionalities are in progress.",
      image: "https://images.unsplash.com/photo-1542753046-76c8e141a60d?auto=format&fit=crop&q=80",
      techStack: ["TypeScript", "React", "APIs", "Chart.js", "Tailwind CSS"]
    },
    {
      title: "Network Packet Analyzer",
      category: "Cybersecurity",
      description: "A Python-based tool for analyzing network packets based on connection types like Wi-Fi, Ethernet, or proxy. Useful for basic cybersecurity monitoring.",
      image: "https://images.unsplash.com/photo-1551632436-c315f6a11a3e?auto=format&fit=crop&q=80",
      techStack: ["Python", "Scapy", "CLI"]
    },
    {
      title: "Password Complexity Checker",
      category: "Security",
      description: "A Python utility that evaluates password strength based on length, complexity, and entropy.",
      image: "https://images.unsplash.com/photo-1551632436-c315f6a11a3e?auto=format&fit=crop&q=80",
      techStack: ["Python"]
    },
    {
      title: "Pixel Manipulation for Image",
      category: "Image Processing",
      description: "A simple image processing script that allows manipulation of image pixels for experimentation and learning.",
      image: "https://images.unsplash.com/photo-1512314889840-f087263c1d51?auto=format&fit=crop&q=80",
      techStack: ["Python", "OpenCV"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of my technical projects showcasing various technologies and domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium mr-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Github size={14} className="mr-1" />
                      <a href="https://github.com/Sumit3754?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">View Code</a>
                    </div>
                    <div className="flex items-center">
                      <ExternalLink size={14} className="mr-1" />
                      <a href="#" className="hover:text-blue-600 transition-colors">Live Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com/Sumit3754?tab=repositories" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-200 font-semibold inline-flex items-center justify-center">
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;