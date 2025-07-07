import { ArrowDown, Sparkles, Code, Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ResumeDownload from './ResumeDownload';
import anime from 'animejs/lib/anime.es.js';

// Declare anime.js types
declare global {
  interface Window {
    anime: typeof anime;
  }
}

const Hero = () => {
  const navigate = useNavigate();

  const handleViewWork = () => {
    navigate('/#projects');
  };

  const handleContact = () => {
    navigate('/#contact');
  };

  useEffect(() => {
    const hero = document.querySelector('#hero');
    const title = document.querySelector('.hero-title');
    const subtitle = document.querySelector('.hero-subtitle');
    const buttons = document.querySelectorAll('.hero-button');

    if (hero) {
      anime({
        targets: hero,
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo'
      });
    }

    if (title) {
      anime({
        targets: title,
        opacity: [0, 1],
        translateY: [-50, 0],
        duration: 1000,
        easing: 'easeOutExpo'
      });
    }

    if (subtitle) {
      anime({
        targets: subtitle,
        opacity: [0, 1],
        translateY: [-50, 0],
        duration: 1000,
        easing: 'easeOutExpo'
      });
    }

    if (buttons.length > 0) {
      anime({
        targets: Array.from(buttons),
        opacity: [0, 1],
        translateY: [-30, 0],
        duration: 800,
        easing: 'easeOutExpo',
        delay: anime.stagger(200)
      });
    }
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-6">
              <Sparkles className="text-blue-600" size={24} />
              <span className="text-blue-600 font-semibold">Full-Stack Developer & AI Specialist</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Building the
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"> Future </span>
              with Code & AI
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Full-Stack Developer with hands-on experience in Cybersecurity and Cloud technologies. 
              Certified Full-Stack Developer from Devtown | Mahindra Tech Skill India Cybersecurity
              <br />
              <span className="text-blue-600">📍 New Delhi, India</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button 
                onClick={handleViewWork}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2"
              >
                <span className="font-semibold">View My Work</span>
                <ArrowDown size={20} />
              </button>
              <ResumeDownload />
              <button 
                onClick={handleContact}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 font-semibold"
              >
                Get In Touch
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 text-center lg:text-left">
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">1+</div>
                <div className="text-gray-600">Year Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">5+</div>
                <div className="text-gray-600">Certifications</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">2</div>
                <div className="text-gray-600">Cybersecurity Internships</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-1">
                <div className="w-full h-full rounded-full bg-white p-2">
                  <img
                    src="/mypic2.png"
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Icons */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg animate-bounce">
                <Code className="text-blue-600" size={24} />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg animate-pulse">
                <Brain className="text-purple-600" size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;