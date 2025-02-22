import { useState } from "react"


export default function UseState() {

    const [value, setValue] = useState(0);


    const addValue = () => {

        setValue(value + 1)

        console.log('Add')

    }


    const decreaseValue = () => {

        setValue(value - 1)

        console.log('Decrease')

    }


    return (

        <div className="use_state">

            <span onClick={decreaseValue}>⬅️</span>

            <h2>{value}</h2>

            <span onClick={addValue}>➡️</span>

        </div>

    )

}