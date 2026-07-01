import Hero from '../components/Hero';
import About from '../components/About';

import Skills from '../components/Skills';
import Education from '../components/Education';
import Certification from '../components/Certification';

import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Feedback from '../components/Feedback';
import Footer from '../components/Footer';


export default function Home() {
  return (
    /* এখানে ঠিক নেভবারের মতো max-w-6xl এবং px ক্লাসের কম্বিনেশন রাখা হয়েছে */
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <Hero />
      <About />
      <Skills />
      <Education />
      <Certification />
      <Projects/>
      <Feedback/>
      <Contact />
      <Footer/>

    </div>
  );
}