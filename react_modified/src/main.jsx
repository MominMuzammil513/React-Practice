

import React from "react";
import ReactDOM from 'react-dom/client';


//  For React Router
// import { BrowserRouter } from 'react-router-dom'
// import ReactRouter from "./Components/reactRouter/ReactRoute";

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//     <BrowserRouter>
//         <ReactRouter />
//     </BrowserRouter>
// )
// For React Router end
// ........................................................


//For Route Render Method
import RuteRenderMethod from "./Components/RuteRenderMethod/RuteRenderMethod";
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <RuteRenderMethod />
    </BrowserRouter>
)
//For Route Render Method 


