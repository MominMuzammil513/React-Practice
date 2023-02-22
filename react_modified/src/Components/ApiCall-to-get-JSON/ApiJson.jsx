

import axios from "axios";
import { useState, useEffect } from "react";


const ApiJson = () => {

    const [num, setNum] = useState('')
    const [name, setName] = useState('')
    const [moves, setMove] = useState('')
    useEffect(() => {
        // alert("abc") 
        const getData = async () => {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            setName(res.data.name)
            setMove(res.data.moves.length)

        }
        getData()
    })

    return (
        <>
            <h1>You choose {num} Value </h1>
            <h1>My name is {name}. </h1>
            <h1>my moves {moves} times. </h1>
            <select value={num} onChange={(event) => {
                setNum(event.target.value)
            }}>
                <option>1</option>
                <option>25</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </>
    )
}
export default ApiJson;