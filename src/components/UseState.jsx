import { useState } from "react"

export default function UseState() {

    const [value, setValue] = useState("Yes")

    console.log(useState)


    const handleClick = () => {

        setValue("Definitely")

    }


    return (

        <h2 onClick={handleClick}> {value} </h2>

    )

}