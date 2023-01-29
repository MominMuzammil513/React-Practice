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

        {
            Sdata.map((val, index) => {
                console.log(index)
                return (
                    <Card
                        key={val.id}
                        imgsrc={val.imgsrc}
                        catName={val.catName}
                        title={val.title}
                        movieLink={val.movieLink}
                    />
                );
            })
        }
        {/* <NetflixBtn /> */}
    </>

)
export default App;