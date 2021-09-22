import React from 'react'

function Login({ user, setUser, accounts }) {

    const findUser = (e) => {

        e.preventDefault();

        let inputLoginUsername = document.querySelector('.login__input--user');
        let inputLoginPin = document.querySelector('.login__input--pin');

        let currentUser = accounts.find((el) => {
            return el.username === inputLoginUsername.value && el.pin === Number(inputLoginPin.value);
        })


        currentUser.status = currentUser ? true : false;
        setUser(currentUser)

        inputLoginUsername.value = ""
        inputLoginPin.value = ""

    }

    return (
        <div>
            {/* <!-- TOP NAVIGATION --> */}
            <nav>
                <p className="welcome">Log in to get started</p>
                <img src="logo.png" alt="Logo" className="logo" />
                <form className="login">
                    <input
                        type="text"
                        placeholder="user"
                        className="login__input login__input--user"
                    />
                    {/* <!-- In practice, use type="password" --> */}
                    <input
                        type="text"
                        placeholder="PIN"
                        maxlength="4"
                        className="login__input login__input--pin"
                    />
                    <button onClick={findUser} className="login__btn">&rarr;</button>
                </form>
            </nav>
        </div>
    )
}

export default Login
