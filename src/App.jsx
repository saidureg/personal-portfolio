import "./App.css";
import Banner from "./components/Banner/Banner";
import Education from "./components/Education/Education";
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
      <Projects />
      <Education />

      <Footer />
    </div>
  );
}

export default App;
