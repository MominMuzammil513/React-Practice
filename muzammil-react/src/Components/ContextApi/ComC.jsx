

//.............This is first way of context Api...........
// import { useContext } from "react";
// import { FirstName, LastName } from "./ContextApi";

// const ComC = () => {
//     const fName = useContext(FirstName)
//     const lName = useContext(LastName)
//     return (
//         <>
//             <FirstName.Consumer>
//                 {
//                     (myName) => {
//                         return (
//                             <LastName.Consumer>
//                                 {
//                                     (lastName) => {
//                                         return <h1>Hello ! {myName} {lastName}</h1>
//                                     }
//                                 }
//                             </LastName.Consumer>
//                         )
//                     }}
//             </FirstName.Consumer>
//             


//         </>
//     )
// }
// export default ComC;   

//................This is second way of context Api............
import { useContext } from "react";
import { FirstName, LastName } from "./ContextApi";

const ComC = () => {
    const fName = useContext(FirstName)
    const lName = useContext(LastName)

    return <h1>Hello! {fName} {lName}</h1>
}
export default ComC;   