// import { sum, div, multi, sub } from "./Calcuator"
// const App = () => {
//     return (
//         <ol>
//             <li>The sum is = {sum(45, 45)}</li>
//             <li>The Sub is = {sub(40, 20)}</li>
//             <li>The div is = {div(10, 3)}</li>
//             <li>The multi is = {multi(10, 3)}</li>
//         </ol>
//     )
// }
// export default App;

import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
import Header from "./Header";
// import Search from "./Search";

// let favSeri = "netflix";
// const NetflixBtn = () => {
//     if (favSeri === "netflix") {
//         return (
//             <Card
//                 key={Sdata[6].id}
//                 imgsrc={Sdata[6].imgsrc}
//                 catName={Sdata[6].catName}
//                 title={Sdata[6].title}
//                 movieLink={Sdata[6].movieLink}
//             />
//         )
//     } else {

//     }
// }

const App = () => (
    <>
        <Header />
<div className="flex flex-wrap p-4 gap-5">
        {
            Sdata.map((val, index) => {
                console.log(index)
                return (
                    <Card
                        key={val.index}
                        imgsrc={val.imgsrc}
                        catName={val.catName}
                        title={val.title}
                        movieLink={val.movieLink}
                    />
                );
            })
        }
        </div>
        {/* <NetflixBtn /> */}
    </>

)
export default App;

/* * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    background-color: aquamarine;

}



// .container img {
//     height: 200px;
//     width: 200px;
//     margin: 10px;
// } */

// * {
//     margin: 0px;
//     padding: 0px;
//     box-sizing: border-box;

// }

// .Header {
//     font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
//     text-align: center;
//     border: 2px solid black;
//     margin-top: 2px;
//     color: white;
//     background-color: black;
// }

// .Main-Card {
//     border: 2px solid black;
//     border-radius: 20px;
//     /* background-color: rgb(199, 11, 11); */
//     height: 340px;
//     width: 16%;
//     margin: 10px;
//     float: inline-start;
// }

// .card-img {
//     height: 166px;
//     width: 100%px;
// }

// .card-img img {
//     height: 100%;
//     width: 100%;
//     border-radius: 20px;
// }

// .card-info {
//     height: 100%;
//     width: 100%;
//     /* background-color: gray; */
//     margin-top: 10px;
//     border-radius: 20px;
// }

// .card-category {
//     width: 100%;
//     margin: 5px;
//     font-size: 20px;
//     font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
//     letter-spacing: 1.5px;
//     margin-left: 20px;
//     font-weight: bold;
// }

// .card-tittle {
//     font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
//     margin-left: 20px;
// }

// button {
//     height: 25%;
//     width: 98%;
//     color: white;
//     background-color: black;
//     border-radius: 15px;
//     margin-top: 40px;
//     margin-left: 1%;

// }