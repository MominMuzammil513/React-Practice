import React from "react";

let mesg = new Date();
let getHr = mesg.getHours()
let getMsg = '';
let col = {};

if (getHr >= 6 && getHr <= 11) {
    getMsg = "Good Morning";
    col = { color: "green" }
    //col.color = "green";

} else if (getHr >= 12 && getHr <= 18) {
    getMsg = "Good Afternoon";
    col = { color: "orange" }
    //col.color="orange";
} else {
    getMsg = "Good Night";
    col = { color: "black" }
    //col.color="black";
}

const Time = () => {
    return (
        <>
            <div>Hello Sir, <span style={col}>{getMsg}</span></div>
        </>
    )
}
export default Time;