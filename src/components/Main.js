import React from 'react'
import Loan from './Loan';
import Movement from './Movement';
import Transfer from './Transfer';

function Main({ applyLoan, user, transferMoney, closeAccount }) {


    let allBalance = user?.movements?.reduce((acc, el) => acc + el, 0);

    user.balance = allBalance

    let totalDeposit = user?.movements?.filter((el) => el > 0).reduce((acc, el) => acc + el, 0)
    let totalWithdrawal = user?.movements?.filter((el) => el < 0).reduce((acc, el) => acc + el, 0);

    const interest = user?.movements
        ?.filter(mov => mov > 0)
        ?.map(deposit => (deposit * user?.interestRate) / 100)
        ?.filter((int, i, arr) => {
            return int >= 1;
        })
        ?.reduce((acc, int) => acc + int, 0);






    return (
        <div>
            <main className="app">
                {/* <!-- BALANCE --> */}
                <div className="balance">
                    <div>
                        <p className="balance__label">Current balance</p>
                        <p className="balance__date">
                            As of <span className="date">05/03/2037</span>
                        </p>
                    </div>
                    <p className="balance__value">{`${user.balance}€`}</p>
                </div>

                {/* <!-- MOVEMENTS --> */}
                <div className="movements">



                    {user?.movements?.reverse()?.map((mov, i, arr) =>
                        <Movement key={i} status={mov > 0 ? "deposit" : "withdrawal"} statusValue={`${arr.length - i} ${mov > 0 ? "deposit" : "withdrawal"}`} money={mov} />
                    )}



                </div>



                <Transfer transferMoney={transferMoney} />

                <Loan applyLoan={applyLoan} />

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

                {/* <!-- SUMMARY --> */}
                <div className="summary">
                    <p className="summary__label">In</p>
                    <p className="summary__value summary__value--in">{`${totalDeposit}€`}</p>
                    <p className="summary__label">Out</p>
                    <p className="summary__value summary__value--out">{`${-totalWithdrawal}€`}</p>
                    <p className="summary__label">Interest</p>
                    <p className="summary__value summary__value--interest">{`${interest}€`}</p>
                    <button className="btn--sort"> l SORT </button>
                </div>


                {/* <!-- LOGOUT TIMER --> */}
                <p className="logout-timer">
                    You will be logged out in <span className="timer">05:00</span>
                </p>
            </main>
        </div>
    )
}

export default Main
