import React from "react";
import './index.css'

const Card = (props) => {
    return (
        <div className="Main-Card">
            <div className="card-img">
                <img src={props.imgsrc} />

                <div className="card-info">
                    <p className="card-category">{props.catName}</p>
                    <h3 className="card-tittle">
                        {props.title}
                    </h3>
                    <a href={props.movieLink}>
                        <button>WATCH NOW</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card;