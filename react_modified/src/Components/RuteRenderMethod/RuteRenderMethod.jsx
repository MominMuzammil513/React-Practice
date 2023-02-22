

import './RuteRenderMethod.css'
import { Route, Routes } from 'react-router';
import Home from './Home';
import ContactUs from './ContactUs';
import Services from './Services';
import Menu from './Menu';
import User from './User';

const RuteRenderMethod = () => {
    return (
        <>
            <Menu />
            <Routes>
                <Route path='/' element={<Home name="Homee" />} />
                <Route path='/contact' element={<ContactUs name="contactt" />} />
                <Route path='/services' element={<Services name="Servicess" />} />
                <Route exact={true} path='/user' element={<User />} />
                <Route path='/user/:fname/:lname' element={<User />} />
            </Routes>
        </>
    )
}
export default RuteRenderMethod;