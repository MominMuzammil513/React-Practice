
import { Route, Routes } from "react-router";
import Home from "./Home";
import Contact from "./Contact";
import Menu from "./Menu";
import './reactRouter.css'


const ReactRouter = () => {

    const Name = () => {
        return <h1>I am a Name Page</h1>
    }

    return (
        <>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/contact/name" element={<Name />} />
            </Routes>
        </>
    )
}
export default ReactRouter;