import "./App.css";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <Banner />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
