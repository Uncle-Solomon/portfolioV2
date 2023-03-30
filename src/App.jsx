import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <div>
      <main className="bg-white px-10 md:px-20 lg:px-40">
        <Navbar />
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;
