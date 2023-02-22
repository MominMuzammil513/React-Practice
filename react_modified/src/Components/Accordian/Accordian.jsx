import { useState } from 'react';
import { questions } from './Accordian-api'
import Myaccord from './Myaccordian';
import './Accordian.css'

const Accordia = () => {
    const [getData, setData] = useState(questions)
    // console.log(questions);
    return (
        <>

            {/* {  //this is first method of props
                getData.map((getElement, index) => {
                    console.log(getElement.question)
                    const { id, question, answer } = getElement
                    return <Myaccord text={getElement} key={id} />
                })
            } */}
            <div className='my-div'>
                <section className='section-div'>
                    <h1 className='heading'>JavaScript Interwieve questions</h1>
                    {
                        getData.map((getElement) => {
                            const { id } = getElement
                            return <Myaccord key={id} {...getElement} />
                        })
                    }
                </section>
            </div>
        </>
    )

}
export default Accordia;