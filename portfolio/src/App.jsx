import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Project from "./components/Project";
import About from "./components/About"
import ConatctUs from "./components/ContactUs";
import NavBar from "./components/NavBar";



const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/About" element={<About />} />
        <Route path="/Conatct" element={<ConatctUs />} />

      </Routes>
    </>
  )
}
export default App;