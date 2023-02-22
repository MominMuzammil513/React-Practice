
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";



const NavBar = () => {
    return (
        <>
            <div className='nav-main-div navbar-expand-lg bg-body-tertiary'>
                <div className="container-div container-fluid">
                    <Navbar bg="light" expand="lg">
                        <Container fluid>
                            <NavLink to={"/"} className="Brand-name">Muzammil MM</NavLink>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="ml-auto my-2 my-lg-0 nav-menu"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <NavLink to={"/"} className={({ isActive }) => isActive ? "active-style" : "dis-active"}>Home</NavLink>
                                    <NavLink to={"/project"} className={({ isActive }) => isActive ? "active-style" : "dis-active"}>Project</NavLink>
                                    <NavLink to={"/About"} className={({ isActive }) => isActive ? "active-style" : "dis-active"}>About</NavLink>
                                    <NavLink to={"/Conatct"} className={({ isActive }) => isActive ? "active-style" : "dis-active"}>Conatct</NavLink>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>
        </>
    )
}
export default NavBar;