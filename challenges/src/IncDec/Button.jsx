import { useState } from "react";
import IDInput from "./IDInput";

const Button = () => {
    const [item, setItem] = useState(0)

    const increament = () => {
        setItem(item + 1)
    }
    const decreament = () => {
        item == 0 ? alert("Do not decrease the number") : setItem(item - 1)

    }

    return (
        <>
            {/* <h1>{item}</h1> */}
            <IDInput num={item} />
            <div className="Btn-div">
                <button className="IncBtn" onClick={increament}>Inc</button>
                <button className="DecBtn" onClick={decreament}>Dec</button>
            </div>

        </>
    )
}
export default Button;