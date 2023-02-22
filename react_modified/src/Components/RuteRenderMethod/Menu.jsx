
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <div className="menu-div">
                <NavLink to={"/"} className={({ isActive }) => isActive ? "active-style" : "menu-font-color"}>Home</NavLink>
                <NavLink to={"/contact"} className={({ isActive }) => isActive ? "active-style" : "menu-font-color"} >ContactUs</NavLink>
                <NavLink to={"/services"} className={({ isActive }) => isActive ? "active-style" : "menu-font-color"} >Services</NavLink>
                <NavLink to={"/user"} className={({ isActive }) => isActive ? "active-style" : "menu-font-color"} >User</NavLink>
            </div>
        </>
    )
}
export default Menu;