import { useState } from "react";
import IDInput from "./IDInput";
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';



const ButtonInput = () => {
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
                <Button className="IncBtn" onClick={increament}>
                    <AddIcon />
                </Button>
                <Button className="DecBtn" onClick={decreament}>
                    <DeleteIcon />
                </Button>
            </div>

        </>
    )
}
export default ButtonInput;