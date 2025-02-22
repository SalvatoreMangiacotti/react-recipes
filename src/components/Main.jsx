import products from "../data/productList"

export default function Main() {

    const handleClick = () => {

        console.log("Clicked")

    }


    // const handleMouseHover = () => {

    //     console.log("Mouse hover")

    // }


    const handleSubmit = (event) => {

        event.preventDefault();

        console.log("Submitted")

    }


    const productsList = products.map((element) => {

        return (

            <li key={element}>{element}</li>

        )

    })


    return (

        <main>

            <div className="main_container">

                <form className="add_ingredient_form" onSubmit={handleSubmit}>

                    <input

                        type="text"

                        placeholder="Type an ingredient"

                        aria-label="Add ingredient"

                    />

                    <button

                        onClick={handleClick}

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