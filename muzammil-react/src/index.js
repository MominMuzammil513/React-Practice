import React from 'react'

import reactDOM from 'react-dom/client'
import Home from './Home'
import './index.css';

const root = reactDOM.createRoot(document.querySelector('#root'))

root.render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>
)


















// import React from 'react';

// // import './index.css';
// // import App from './App';
// // import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <h1>Hello World !</h1>
//   </React.StrictMode>

// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();

//..........first method ..................
// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(<h1>Hello World</h1>,
//   document.querySelector("#root"))
// //.............end......................

//.........Second Method.................
// ReactDOM.render( /*#__PURE__*/React.createElement("h1",
//   null,
//   "I like thapa courses"),
//   document.getElementById("#root"));
////////////end..........................

//.............third Method..............Full Javascript code......
// let h2 = document.createElement("h1");
// h2.innerHTML = "Hello World";
// document.querySelector("#root").appendChild(h2);
// ////..............end..............


// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(
//   [
//     <h1>Name : Momin Muzammil Ahmad</h1>,
//     <p>Email : muzammilaumed2376@gmail.com</p>,
//     <h1>Mobile: 8788544513</h1>

//   ],
//   document.querySelector("#root"))

// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(
//   <div>
//     <h1>Name : Momin Muzammil Ahmad</h1>
//     <p>Email : muzammilaumed2376@gmail.com</p>
//     <h1>Mobile: 8788544513</h1>

//   </div>,
//   document.querySelector("#root"))


// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <React.Fragment>
//     <h1>Name : Momin Muzammil Ahmad</h1>
//     <p>Email : muzammilaumed2376@gmail.com</p>
//     <h1>Mobile: 8788544513</h1>
//   </React.Fragment>,
//   document.querySelector("#root")
// )


//.......................................second.........................................
// import React from "react"
// import ReactDOM from "react-dom";
// import './index.css'
// const mobile = 8788544513;
// let currentDate = new Date().toLocaleDateString();
// let currentTime = new Date().toLocaleTimeString();

// let heading = {
//   color: "red",
//   fontFamily: "'Tangerine', serif",
//   fontSize: "48px",
//   textShadow: "4px 4px 4px #aaa"

// }

// let mesg = new Date();
// let getHr = mesg.getHours()
// let getMsg = '';
// let col = {};

// if (getHr >= 6 && getHr <= 11) {
//   getMsg = "Good Morning";
//   col = { color: "green" }
//   //col.color = "green";

// } else if (getHr >= 12 && getHr <= 18) {
//   getMsg = "Good Afternoon";
//   col = { color: "orange" }
//   //col.color="orange";
// } else {
//   getMsg = "Good Night";
//   col = { color: "black" }
//   //col.color="black";
// }

// let img1 = "https://picsum.photos/200/300";
// let img2 = "https://picsum.photos/250/300";
// let img3 = "https://picsum.photos/300/300";

// ReactDOM.render(
//   <>
//     <h1 className="heading" contentEditable="true" style={heading}>Momin Muzammil Ahmad Zameer Ahamad</h1>
//     <div className="container">
//       <img src={img1} alt="randomImage" />
//       <img src={img2} alt="randomImage" />
//       <a href="https://www.google.com">
//         <img src={img3} target="google" />
//       </a>
//     </div>
//     <div> Hello Sir, <span style={col}>{getMsg}</span></div>
//   </>,
//   document.querySelector("#root")
// )
//...........................................End Second...............................................

//.............................................third..................................................

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App"

// ReactDOM.render(
//   <App />,
//   document.querySelector("#root")
// )

//......................................third end ....................................................

//.......................................Four.........................................................

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./Components/App";

// ReactDOM.render(
//     <>
//         <App />
//     </>,
//     document.querySelector("#root")
// )

//.......................................Four End ....................................................