import React from 'react'

function Summary({ user }) {
    let totalDeposit = user.movements.filter((el) => el > 0).reduce((acc, el) => acc + el, 0)
    let totalWithdrawal = user.movements.filter((el) => el < 0).reduce((acc, el) => acc + el, 0)
    return (
        <div>
            {/* <!-- SUMMARY --> */}
            <div className="summary">
                <p className="summary__label">In</p>
                <p className="summary__value summary__value--in">{`${totalDeposit}€`}</p>
                <p className="summary__label">Out</p>
                <p className="summary__value summary__value--out">{`${-totalWithdrawal}€`}</p>
                <p className="summary__label">Interest</p>
                <p className="summary__value summary__value--interest">0000€</p>
                <button className="btn--sort"> l SORT </button>
            </div>
        </div>
    )
}

export default Summary
