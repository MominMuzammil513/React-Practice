import React from "react";
import Heading from "./Heading";
import Image from "./Image";
import CategoryName from "./CategoryName";
import WatchNow from "./WatchNow";

const Card = (props) => {
    return (
        <div className="w-[30rem]">
            <div className="w-full">
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