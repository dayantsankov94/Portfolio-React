import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from 'react-router-dom'
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Education from "./Components/Education/Education";
import About from "./Components/About/About";
import Contacts from "./Components/Contacts/Contacts";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
