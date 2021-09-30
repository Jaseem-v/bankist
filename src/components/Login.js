import React from 'react'



function Login({ findUser, user }) {

    return (
        <div>
            {/* <!-- TOP NAVIGATION --> */}
            <nav>
                <p className="welcome">{user ? `Welcome Back , ${user.owner.split(" ")[0]}` : "Log in to get started"}</p>
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
                        maxLength="4"
                        className="login__input login__input--pin"
                    />
                    <button onClick={findUser} className="login__btn">&rarr;</button>
                </form>
            </nav>
        </div>
    )
}

export default Login
