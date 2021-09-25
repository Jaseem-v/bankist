import React from 'react'

function Transfer({transferMoney }) {


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
