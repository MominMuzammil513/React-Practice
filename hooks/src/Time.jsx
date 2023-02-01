import { useState } from "react";

const Time = () => {
    let date = new Date().toLocaleTimeString();
    // let hr = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()

    // const state = useState();
    // console.log(state);
    const [count, setCount] = useState(date);
    const IncNum = () => {
        date = new Date().toLocaleTimeString();
        setCount(date)
    }

    setInterval(IncNum, 1000)


    return (
        <>
            <h1>{count}</h1>
            {/* <button onClick={start}>Click Me!</button> */}
        </>
    )
}
export default Time;