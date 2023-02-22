
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <>
            {/* //first method */}
            {/* <NavLink
                className={(navData) => (navData.isActive ? "active-style" : 'none')}
                to={"/"}
            >
                Home
            </NavLink>
            <NavLink className={(navData) => (navData.isActive ? "active-style" : 'none')} to={"/contact"}>Contact Us</NavLink>
            <NavLink className={(navData) => (navData.isActive ? "active-style" : 'none')} to={"/contact/name"}>Name</NavLink> */}

            {/* second Method */}
            <NavLink
                className={({ isActive }) => (isActive ? "active-style" : 'none')} to={"/"} >Home</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active-style" : 'none')} to={"/contact"}>Contact Us</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active-style" : 'none')} to={"/contact/name"}>Name</NavLink>
        </>
    )
}
export default Menu;