import { useState } from "react";

const TuchBtnMoment = () => {
    let BgColor = "green";
    let btnEffect = "Click Me 😄"
    let btnBg = "green"
    let [cBg, newBg] = useState(BgColor)
    let [btnName, setName] = useState(btnEffect)
    let [btnBgName, setBtnBgName] = useState(btnBg)
    const bgChange = () => {
        BgColor = "#7B2869"
        btnBg = "#7B2869"
        btnEffect = "you are so Beautiful 💋"
        newBg(BgColor)
        setName(btnEffect)
        setBtnBgName(btnBg)
    }

    const dClick = () => {
        BgColor = "red"
        btnBg = "red"
        btnEffect = "ouch 😠"
        newBg(BgColor)
        setName(btnEffect)
        setBtnBgName(btnBg)

    }
    return (
        <div style={{ "backgroundColor": cBg }}>
            <button onClick={bgChange} onDoubleClick={dClick} style={{ "backgroundColor": btnBgName }}> {btnName}</button>
        </div>
    )
}
export default TuchBtnMoment;