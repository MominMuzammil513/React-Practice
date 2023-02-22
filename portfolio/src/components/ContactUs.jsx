

import ContactUs from '../Images/contact.svg'
import Common from './Common';



const ConatctUs = () => {
    return (
        <>
            <Common imgsrc={ContactUs} text="Contact Me." />
            <div className='form-div'>
                <form className="contact-form">
                    {/* <label className="text-div">Enter Name</label>  */}
                    <input type="text" value="" name="" placeholder="Enter Your Name" required />
                    <input type="email" value="" name="" placeholder="Enter Your email" required />
                    <input type="phone" value="" name="" placeholder="Enter Your Mobile Number" required />
                    <input type="password" value="" name="" placeholder="Enter Password" required />
                    <textarea value="" name="" placeholder="Enter text here..." required />
                    <button type="button" value="submit" className='contact-btn'>submit</button>
                </form>
            </div>
        </>
    )
}
export default ConatctUs;