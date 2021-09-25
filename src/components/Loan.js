import React from 'react'

function Loan({applyLoan}) {
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
