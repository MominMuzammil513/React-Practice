
//This is first method of passing props
// const Myaccord = (props) => {
//     return (
//         <>
//             <h4>{props.text.question}</h4>
//             <h5>{props.text.Answer}</h5>
//         </>
//     )
// }
// export default Myaccord;

import { useState } from "react";


//this is scond method 

const Myaccord = ({ question, answer }) => {
    const [show, setShow] = useState(false)
    return (
        <>
            <div className="ans-div">
                <p className="btn" onClick={() => setShow(!show)
                }>{show ? '-' : '+'}</p>
                <h4 className="quest">{question}</h4>
            </div>
            {show && <p className="btn-ans">{answer}</p>}
        </>
    )
}
export default Myaccord;


