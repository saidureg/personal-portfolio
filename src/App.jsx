import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="max-w-screen-xl mx-auto"></div>
    </div>
  );
}

export default App;
