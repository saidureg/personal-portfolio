import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <Banner />
      <div className="max-w-screen-xl mx-auto"></div>
      <Footer />
    </div>
  );
}

export default App;
