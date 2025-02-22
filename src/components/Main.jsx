import products from "../data/productList"

export default function Main() {

    // const handleClick = () => {

    //     console.log("Clicked")

    // }


    // const handleMouseHover = () => {

    //     console.log("Mouse hover")

    // }


    const handleSubmit = (event) => {

        event.preventDefault();

        const formData = new FormData(event.currentTarget)

        const newIngredient = formData.get("ingredient")

        products.push(newIngredient)

        console.log(products)

    }


    const productsList = products.map((element) => {

        return (

            <li key={element}>{element}</li>

        )

    })


    return (

        <main>

            <div className="main_container">

                <form onSubmit={handleSubmit} className="add_ingredient_form">

                    <input

                        type="text"

                        placeholder="Type an ingredient"

                        aria-label="Add ingredient"

                        name="ingredient"

                    />

                    <button

                    // onClick={handleClick}

                    // onMouseEnter={handleMouseHover}

                    >

                        <img src="./src/assets/plus-solid.svg" />

                    </button>

                </form>

                <ol>

                    {productsList}

                </ol>

            </div>

        </main>

    )

}