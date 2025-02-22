export default function Main() {

    return (

        <main>

            <div className="main_container">

                <form className="add_ingredient_form">

                    <input

                        type="text"

                        placeholder="Type an ingredient"

                        aria-label="Add ingredient"

                    />

                    <button>
                        <img src="./src/assets/plus-solid.svg" />
                    </button>

                </form>

            </div>

        </main>

    )

}