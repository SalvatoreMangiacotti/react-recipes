import { useState } from "react"

export default function ManageArrays() {

    const animals = ['🦥', '🐘', '🐊', '🐳', '🐆', '🦜']

    const [emptyArray, setEmptyArray] = useState(animals)


    function addAnimals() {

        setEmptyArray(prevValue => [...prevValue, "Test"])

    }


    return (

        <>

            <button onClick={addAnimals}>Add item</button>

            <section>

                <ul>

                    {

                        emptyArray.map((element, index) => (

                            <li key={index}>{element}</li>

                        ))

                    }

                </ul>

            </section>

        </>

    )

}