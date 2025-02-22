export default function Main() {

    const handleClick = () => {

        console.log("Clicked")

    }

    const handleMouseHover = () => {

        console.log("Mouse hover")

    }

    return (

        <main>

            <div className="main_container">

                <form className="add_ingredient_form">

                    <input

                        type="text"

                        placeholder="Type an ingredient"

                        aria-label="Add ingredient"

                    />

                    <button
                        onClick={handleClick}
                        onMouseEnter={handleMouseHover}
                    >

                        <img src="./src/assets/plus-solid.svg" />

                    </button>

                </form>

            </div>

        </main>

    )

}