import { useState } from "react"

export default function UseState() {

    // const addValue = () => {

    //     setValue(value + 1)

    //     console.log('Add')

    // }


    // const decreaseValue = () => {

    //     setValue(value - 1)

    //     console.log('Decrease')

    // }


    const fruitsArray = ['🥝', '🍉', '🍈', '🍍'];

    const plantsArray = ['🌻', '🪴', '🌵', '🌴'];


    const [value, setValue] = useState(0);

    const [valueTwo, setValueTwo] = useState(fruitsArray);

    const [plant, setPlant] = useState('🌱')


    // callback function 

    const addValue = () => {

        setValue(value => value + 1)

    }


    // callback function 

    const decreaseValue = () => {

        setValue(value => value - 1)

    }


    // callback function 

    const showPlants = () => {

        setValueTwo(() => plantsArray);

        setPlant(() => '🍋‍🟩');

    }


    return (

        <>

            <div className="use_state">

                <span onClick={decreaseValue}>⬅️</span>

                <h2>{value}</h2>

                <span onClick={addValue}>➡️</span>

            </div>

            <div className="use_state_two">

                <h2>{valueTwo}</h2>

                <span onClick={showPlants}>{plant}</span>

            </div>

        </>

    )

}