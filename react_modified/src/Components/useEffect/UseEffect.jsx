import { useEffect, useState } from "react";


const UseEffect = () => {
    const [num, setNum] = useState(0)
    const [num2, setNum2] = useState(0)


    useEffect(() => {
        // alert("you have clicked")
        document.title = `you have clicked ${num} times`
    })


    return (
        <>
            <h1>use effect</h1>
            <button className="btn" onClick={() => {
                setNum(num + 1)
            }}>Click Me {num}</button>
            <br />
            <button onClick={() => {
                setNum2(num2 + 1)
            }}>Click Me {num2} </button>
        </>
    )
}
export default UseEffect;