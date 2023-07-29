import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./comp/Home";
import Contact from "./comp/Contact";
import About from "./comp/About";
import Project from "./comp/Projects";
import Skill from "./comp/Skills";
import Wishlist from "./comp/Wishlist";
import Footer from "./comp/Footer";
import Nav from "./comp/Nav";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
    <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Toaster></Toaster>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
