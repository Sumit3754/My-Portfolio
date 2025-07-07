import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Sumit Chauhan
            </div>
            <div className="text-gray-400 leading-relaxed">
              Full-Stack Developer & AI Specialist | Cybersecurity Enthusiast | AWS Cloud Practitioner
              <br />
              <span className="text-blue-400">📍 New Delhi, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Full-Stack Development</li>
              <li>Cybersecurity Solutions</li>
              <li>AI/ML Development</li>
              <li>Cloud Computing</li>
              <li>Prompt Engineering</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="text-red-500" size={16} />
              <span>and</span>
              <Code className="text-blue-400" size={16} />
              <span>and lots of</span>
              <Coffee className="text-yellow-600" size={16} />
            </div>
            
            <div className="text-gray-400 text-sm">
              {currentYear} Sumit Chauhan. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;