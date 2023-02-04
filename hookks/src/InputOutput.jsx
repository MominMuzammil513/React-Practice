// import { useState } from "react";



// const InputOutput = () => {
//     // const submission = e => e.preventDefault();
//     const submission = (value) => {
//         return value.preventDefault();
//     }
//     let head = ""

//     let [getHead, setHead] = useState(head)
//     const submit = () => {
//         let name = document.querySelector(".input").value
//         setHead(name)
//     }
//     return (
//         <>
//             <form onSubmit={submission}>

//                 <div className="main">
//                     <h1 className="heading">
//                         Hello,{getHead}
//                     </h1>
//                     <input type="text" placeholder="Enter Your Name" className="input" />
//                     <button type="submit" className="btn" onClick={submit}>Submit</button>
//                 </div>
//             </form>
//         </>
//     )
// }
// export default InputOutput;

//.................................................................................................................
// const InputOutput = () => {
//     //     const pageProp = e => e.preventDefault()

//     /**
//      * ^^^^^^^^^^^^^^^^^^^^^don't reload the page^^^^^^^^^^^^^^^^^^^^^^
//      */
//     let [name, setName] = useState("")
//     let [fullName, setFullName] = useState()
//     let [myPass, setPass] = useState("")
//     let [acessPass, setAcessPass] = useState()

//     const inputEvent = (event) => {
//         // console.log(event.target.value)
//         setName(event.target.value)
//     }
//     const inputEventPass = (e) => {
//         // console.log(e.target.value)
//         setPass(e.target.value)
//     }
//     const submitName = (event) => {
//         console.log(name)
//         event.preventDefault()
//         setFullName(name)
//         setAcessPass(myPass)
//     }
//     return (
//         <>
//             <div className="main">
//                 <form onSubmit={submitName}>

//                     <h1 className="heading">
//                         Hello {fullName} and Password {acessPass}
//                     </h1>
//                     <input
//                         type="text"
//                         placeholder="Enter Your Name"
//                         className="input"
//                         onChange={inputEvent}
//                         value={name} />
//                     <input type="password" placeholder="Enter Your Password" className="pass" onChange={inputEventPass} value={myPass} />
//                     <button type="submit" className="btn">Submit</button>

//                 </form>
//             </div>
//         </>
//     )
// }

// export default InputOutput;

// ..............................................................................................................
// const InputOutput = () => {
//     const submitName = (e) => e.preventDefault()
//     const [fullName, setFullName] = useState({
//         name: "",
//         pass: ""
//     })
//     const inputEvent = (event) => {
//         const value = event.target.value
//         const name = event.target.name
//         setFullName((preValue) => {
//             if (name === "myName") {
//                 return {
//                     name: value,
//                     pass: preValue.pass
//                 }
//             } else if (name === "pass") {
//                 return {
//                     name: preValue.name,
//                     pass: value
//                 }
//             }
//         })
//     }

//     return (
//         <>
//             <div className="main">
//                 <form onSubmit={submitName}>

//                     <h1 className="heading">
//                         Hello {fullName.name} and Password {fullName.pass}
//                     </h1>
//                     <input
//                         type="text"
//                         placeholder="Enter Your Name"
//                         className="input"
//                         onChange={inputEvent}
//                         name="myName"
//                         value={fullName.name}
//                     />
//                     <input type="password" placeholder="Enter Your Password" className="pass" onChange={inputEvent} name="pass" value={fullName.pass} />
//                     <button type="submit" className="btn">Submit</button>

//                 </form>
//             </div>
//         </>
//     )
// }
// export default InputOutput;
// ..............................................................................................................

// import { useState } from "react"
// const InputOutput = () => {
//     const submitForm = (e) => {
//         e.preventDefault()
//         alert("From is submited")
//     }

//     const [fullName, setFullName] = useState({
//         fName: "",
//         lName: "",
//         phone: "",
//         email: ""
//     })

//     const inputEvent = (event) => {
//         const { name, value } = event.target

//         setFullName((preValue) => {

//             if (name === "fName") {
//                 return {
//                     fName: value,
//                     lName: preValue.lName,
//                     phone: preValue.phone,
//                     email: preValue.email
//                 }
//             } else if (name === "lName") {
//                 return {
//                     fName: preValue.fName,
//                     lName: value,
//                     phone: preValue.phone,
//                     email: preValue.email
//                 }
//             } else if (name === "phone") {
//                 return {
//                     fName: preValue.fName,
//                     lName: preValue.lName,
//                     phone: value,
//                     email: preValue.email
//                 }
//             } else if (name === "email") {
//                 return {
//                     fName: preValue.fName,
//                     lName: preValue.lName,
//                     phone: preValue.phone,
//                     email: value
//                 }
//             }

//         })

//     }

//     return (
//         <>
//             <div className="main">
//                 <div className="details">
//                     <ul>
//                         <li>Full Name    : {fullName.fName} {fullName.lName}</li>
//                         <li>Phone Number : {fullName.phone}</li>
//                         <li>E-mail       : {fullName.email}</li>
//                     </ul>
//                 </div>

//                 <form onSubmit={submitForm}>


//                     <input type="text" placeholder="Entere Your First Name" onChange={inputEvent} value={fullName.fName} name="fName" />


//                     <input type="text" placeholder="Enter Your Last Name" onChange={inputEvent} value={fullName.lName} name="lName" />


//                     <input type="phone" placeholder="Enter Your Phone Number" onChange={inputEvent} value={fullName.phone} name="phone" />


//                     <input type="email" placeholder="Enter Your Email" onChange={inputEvent} value={fullName.email} name="email" />


//                     {/* <input type="button" value="submit" /> */}
//                     <button type="submit">submit</button>


//                 </form>
//             </div>
//         </>
//     )
// }
// export default InputOutput;

import { useState } from "react"


const InputOutput = () => {
    const submitForm = (event) => {
        alert("Your Form is Submitted")
        return event.preventDefault()

    }

    const [fullName, setFullName] = useState({
        fName: "",
        lName: "",
        phone: "",
        email: ""
    })

    const inputEvent = (event) => {
        const { name, value } = event.target

        setFullName((preValue) => {
            return {
                ...preValue,
                [name]: value
            }

        })
    }
    return (
        <>
            <div className="main">
                <div className="details">
                    <ul>
                        <li>Full Name    : {fullName.fName} {fullName.lName}</li>
                        <li>Phone Number : {fullName.phone}</li>
                        <li>E-mail       : {fullName.email}</li>
                    </ul>
                </div>

                <form onSubmit={submitForm}>


                    <input type="text" placeholder="Entere Your First Name" onChange={inputEvent} value={fullName.fName} name="fName" />


                    <input type="text" placeholder="Enter Your Last Name" onChange={inputEvent} value={fullName.lName} name="lName" />


                    <input type="number" placeholder="Enter Your Phone Number" onChange={inputEvent} value={fullName.phone} name="phone" />


                    <input type="email" placeholder="Enter Your Email" onChange={inputEvent} value={fullName.email} name="email" />


                    {/* <input type="button" value="submit" /> */}
                    <button type="submit">submit</button>


                </form>
            </div>
        </>
    )
}
export default InputOutput;