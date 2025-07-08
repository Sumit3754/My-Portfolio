import { createHashRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundAnimation from './components/BackgroundAnimation';
import './styles/theme.css';

const router = createHashRouter([
  {
    path: '/',
    element: (
      <div className="min-h-screen" data-theme="light">
        <div className="relative z-10">
          <Header />
          <main className="flex flex-col">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </div>
        <BackgroundAnimation />
      </div>
    )
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;