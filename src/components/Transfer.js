import React, { useContext } from 'react'
import { Context } from '../Context';


function Transfer() {

    let { setUser, accounts } = useContext(Context);

    ///////////////////////////////////////////////////////
    /// transferMoney

    let transferMoney = (e) => {
        e.preventDefault();
        let inputTransferTo = document.querySelector('.form__input--to');
        let inputTransferAmount = document.querySelector('.form__input--amount');

        let amount = +inputTransferAmount.value;

        let receiverAcc = accounts.find((el) => {
            return el.username === inputTransferTo.value
        });

        if (amount && window.currentUser.balance > amount && receiverAcc && receiverAcc?.username !== window.currentUser.username) {
            window.currentUser.movements.push(-amount);
            receiverAcc.movements.push(amount);

            //////// Date push
            window.currentUser.movementsDates.push(new Date().toISOString());
            receiverAcc.movementsDates.push(new Date().toISOString());
        }

        inputTransferTo.value = inputTransferAmount.value = ""

        setUser({ ...window.currentUser });
        if (window.timerInterval) clearInterval(window.timerInterval);
        window.startTimer();
        // setTimeInt(time0);
    }


    return (
        <div>
            {/* <!-- OPERATION: TRANSFERS --> */}
            <div className="operation operation--transfer">
                <h2>Transfer money</h2>
                <form className="form form--transfer">
                    <input type="text" className="form__input form__input--to" />
                    <input type="number" className="form__input form__input--amount" />
                    <button onClick={transferMoney} className="form__btn form__btn--transfer">&rarr;</button>
                    <label className="form__label">Transfer to</label>
                    <label className="form__label">Amount</label>
                </form>
            </div>
        </div>
    )
}

export default Transfer
