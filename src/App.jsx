import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };
  return (
    <div className={darkMode ? "dark" : ""}>
      <div
        className="h-full w-full mx-auto py-2 
     dark:bg-gray-900"
      >
        <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Hero />
          <About />
          <Portfolio />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
