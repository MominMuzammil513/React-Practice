import { createContext } from "react";
import ComA from "./ComA";
import ComB from "./ComB";
import ComC from "./ComC";

const FirstName = createContext()
const LastName = createContext()

const ContextApi = () => {
    return (
        <>
            <FirstName.Provider value={"Momin Muzammil"}>
                <LastName.Provider value={"Ahmad Zameer Ahmad"}>
                    <ComA></ComA>
                </LastName.Provider>
            </FirstName.Provider>
            {/* <ComA />
            <ComB />
            <ComC /> */}
        </>
    )
}
export default ContextApi;
export { FirstName, LastName };