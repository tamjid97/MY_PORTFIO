import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Certification from '../components/Certification';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Feedback from '../components/Feedback';
import Footer from '../components/Footer';
import Services from '../components/Services';

export default function Home() {
  return (
    <div >
      {/* Navbar এর href এর সাথে মিল রেখে id গুলো দেওয়া হলো */}
      <div id="hero"><Hero /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="education"><Education /></div>
      <div id="certification"><Certification /></div>
      
      {/* Services এর জন্য Navbar এ লিংক না থাকলেও id দিয়ে রাখলাম */}
      <div id="services"><Services/></div> 
      
      <div id="projects"><Projects/></div>
      <div id="feedback"><Feedback/></div>
      <div id="contact"><Contact /></div>
      <Footer/>
    </div>
  );
}