import { useState } from "react";
import products from "../data/productList"

export default function Main() {

    // const handleClick = () => {

    //     console.log("Clicked")

    // }


    // const handleMouseHover = () => {

    //     console.log("Mouse hover")

    // }


    const [ingredients, setIngredients] = useState(products)

    const [newIngredient, setNewIngredient] = useState('')


    const handleInputChange = (e) => {

        setNewIngredient(e.target.value)

    }


    const handleSubmit = (event) => {

        event.preventDefault();

        setIngredients(prevValue => [...prevValue, newIngredient])

        // Reset input value

        setNewIngredient('');

    }


    return (

        <main>

            <div className="main_container">

                <form onSubmit={handleSubmit} className="add_ingredient_form">

                    <input

                        type="text"

                        placeholder="Type an ingredient"

                        aria-label="Add ingredient"

                        name="ingredient"

                        onChange={handleInputChange}

                    />

                    <button

                    // onClick={handleClick}

                    // onMouseEnter={handleMouseHover}

                    >

                        <img src="./src/assets/plus-solid.svg" />

                    </button>

                </form>

                <ol>

                    {ingredients.map((element, index) => {

                        return (

                            <li key={index}>{element}</li>

                        )

                    })}

                </ol>

            </div>

        </main>

    )

}