import { useState } from "react"

export default function ObjectsState() {


    // User Object Data

    const userData = {

        firstName: "Fred",

        lastName: "Flintstone",

        email: 'fred@flintstone.stoneage',

        isReal: false

    }


    // useState

    const [user, setUser] = useState(userData)

    const [icon, setIcon] = useState('🦕')


    // Toggle Function

    function toggleFavorite() {

        setUser(previousValue => previousValue = {

            ...previousValue,

            isReal: !previousValue.isReal

        })

        setIcon(previousIcon => previousIcon === '🦕' ? '🦖' : '🦕')

    }


    return (

        <div className="user_card">

            <span

                onClick={toggleFavorite}

                alt="icon"

                className="dinosaur_icon"

            >{icon}</span>

            <h3>{user.firstName}</h3>

            <h3>{user.lastName}</h3>

            <span>{user.email}</span>

        </div>

    )

}