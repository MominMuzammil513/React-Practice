import React from "react";
const TodoListChild = (props) => {
    return (
        <>
            <div className="List-data">
                <button className="btn-remove"
                    onClick={() => {
                        props.onSelect(props.id)
                    }}
                >-</button>
                <li className="list">{props.text}</li>
            </div>
        </>
    )
}
export default TodoListChild;
