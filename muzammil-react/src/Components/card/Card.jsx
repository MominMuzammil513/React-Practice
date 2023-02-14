import React from "react";
import Heading from "./Heading";
import Image from "./Image";
import CategoryName from "./CategoryName";
import '../index.css'
import WatchNow from "./WatchNow";

const Card = (props) => {
    return (
        <div className="Main-Card">
            <div className="card-img">
                <Image imgsrc={props.imgsrc} />

                <div className="card-info">
                    <CategoryName catName={props.catName} />
                    <Heading title={props.title} />
                    <WatchNow movieLink={props.movieLink} />
                </div>
            </div>
        </div>
    )
}

export default Card;