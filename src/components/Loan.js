import React, { useContext } from 'react'
import { Context } from '../Context';

function Loan() {

    let { setUser } = useContext(Context);

    ///////////////////////////////////////////////////////////
    /// Loan

    let applyLoan = (e) => {
        e.preventDefault();

        let inputLoanAmount = document.querySelector('.form__input--loan-amount');
        let amoutPercent = window.currentUser?.movements?.some((el) => el >= Number(inputLoanAmount.value) * 0.1)

        if (amoutPercent) {
            setTimeout(() => {
                window.currentUser?.movements?.push(Number(inputLoanAmount.value));
                window.currentUser?.movementsDates?.push(new Date().toISOString());
                alert("loan Aproved");
                inputLoanAmount.value = "";
                setUser({ ...window.currentUser })
                if (window.timerInterval) clearInterval(window.timerInterval);
                window.startTimer();
            }, 2000);

        }

    }
    return (
        <div>
            {/* <!-- OPERATION: LOAN --> */}
            <div className="operation operation--loan">
                <h2>Request loan</h2>
                <form className="form form--loan">
                    <input type="number" className="form__input form__input--loan-amount" />
                    <button onClick={applyLoan} className="form__btn form__btn--loan">&rarr;</button>
                    <label className="form__label form__label--loan">Amount</label>
                </form>
            </div>
        </div>
    )
}

export default Loan
