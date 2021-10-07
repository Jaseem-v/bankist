import React, { useContext } from 'react'
import { Context } from '../Context';



function Login() {
    let { user, setUser, accounts } = useContext(Context);


    /////////////////////////////////////////////
    // finduser
    let findUser = (e) => {
        e.preventDefault();
        let inputLoginUsername = document.querySelector('.login__input--user');
        let inputLoginPin = document.querySelector('.login__input--pin');

        let loginPin = Number.parseInt(inputLoginPin.value)

        window.currentUser = accounts.find((el) => {
            return el.username === inputLoginUsername.value && el.pin === loginPin;
        });

        inputLoginUsername.value = inputLoginPin.value = ""

        if (window.currentUser) {
            setUser(window.currentUser);
            if (window.timerInterval) clearInterval(window.timerInterval);
            // window.startTimer();
 
        } else {
            alert("no user");
        }

    }

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
