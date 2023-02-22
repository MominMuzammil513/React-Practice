import { Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Project from "./project";
import About from "./About"
import ConatctUs from "./ContactUs";



const Header = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project" element={<project />} />
                <Route path="/About" element={<About />} />
                <Route path="/Conatct" element={<ConatctUs />} />

            </Routes>
        </>
    )
}
export default Header;