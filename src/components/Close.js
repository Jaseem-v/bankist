
import React, { useContext } from 'react'
import { Context } from '../Context';

function Close() {

    let { setUser, accounts  } = useContext(Context);

    ////////////////////////////////////////////////////////////////////
    ////// Close Account

    let closeAccount = (e) => {
        e.preventDefault();

        let inputCloseUsername = document.querySelector('.form__input--user');
        let inputClosePin = document.querySelector('.form__input--pin');

        if (inputCloseUsername.value === window.currentUser.username && Number(inputClosePin.value) === window.currentUser.pin) {
            let closeUserIndex = accounts.findIndex((el) => {
                return el.username === inputCloseUsername.value && el.pin === Number(inputClosePin.value);
            })

            accounts.splice(closeUserIndex, 1);

            window.currentUser = undefined;

            setUser(window.currentUser);

            console.log(accounts);
        } else {
            console.log("wrong userName");
        }


        inputCloseUsername.value = "";
        inputClosePin.value = "";

    }
    return (
        <div>
            {/* <!-- OPERATION: CLOSE --> */}
            <div className="operation operation--close">
                <h2>Close account</h2>
                <form className="form form--close">
                    <input type="text" className="form__input form__input--user" />
                    <input
                        type="password"
                        maxlength="6"
                        className="form__input form__input--pin"
                    />
                    <button onClick={closeAccount} className="form__btn form__btn--close">&rarr;</button>
                    <label className="form__label">Confirm user</label>
                    <label className="form__label">Confirm PIN</label>
                </form>
            </div>
        </div>
    )
}

export default Close
