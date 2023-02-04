import { useState } from "react"
import TodoListChild from "./TodoListChild"

const TodoList = () => {

    const [addMyData, setMyData] = useState("")
    const [item, setItem] = useState([])

    const inputEvent = (event) => {
        setMyData(event.target.value)
    }

    const addData = () => {
        // alert("Added Your Data")
        setItem((preValue) => {
            return [...preValue, addMyData]
        })
        setMyData("")
    }

    const removeData = (id) => {
        // alert("Your Are Removed")
        console.log("Deleted");
        setItem((preValue) => {
            return preValue.filter((arrEle, index) => {
                return index !== id
            })
        })
    }
    return (
        <>
            <div className="main">
                <div className="inputs">
                    <div className="div-tittle">
                        <h1 className="heading">To Do List</h1>
                    </div>
                    <hr />
                    <div className="div-input">
                        <input type="text" placeholder="Enter your Entry"
                            value={addMyData}
                            onChange={inputEvent} />
                        <button className="btn-add" type="submit" onClick={addData}>+</button>
                    </div>
                </div>
                <hr />
                <div className="data">
                    {item.map((myItems, index) => {

                        return <TodoListChild key={index} id={index} text={myItems} onSelect={removeData} />

                    })}


                </div>
            </div>
        </>
    )
}
export default TodoList;