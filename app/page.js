import About from "./components/About";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Impact from "./components/Impact";
import Nav from "./components/Nav";
import OurPlans from "./components/OurPlans";
import Partners from "./components/Partners";

export default function Home() {
  return (
    <div> 
      <Nav/>
      <Hero/>
      <About/>
      <Achievements/>
      <OurPlans/>
      <Impact/>
      <Partners/>
      <Contact/>
      <Gallery/>
      <Footer/>
    </div>
  );
}
