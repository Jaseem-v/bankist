import React, { useContext } from 'react'
import { Context } from '../Context';


function Summary({ sortClick, currencyFormater }) {
    let { user, } = useContext(Context);

    let totalDeposit = user?.movements?.filter((el) => el > 0).reduce((acc, el) => acc + el, 0)
    let totalWithdrawal = user?.movements?.filter((el) => el < 0).reduce((acc, el) => acc + el, 0);
    let interest = Math.round(user?.movements
        ?.filter(mov => mov > 0)
        ?.map(deposit => (deposit * user?.interestRate) / 100)
        ?.filter((int) => int >= 1)
        ?.reduce((acc, int) => acc + int, 0));




    return (
        <div>
            {/* <!-- SUMMARY --> */}
            <div className="summary">
                <p className="summary__label">In</p>
                <p className="summary__value summary__value--in">{currencyFormater(totalDeposit)}</p>
                <p className="summary__label">Out</p>
                <p className="summary__value summary__value--out">{currencyFormater(-totalWithdrawal)}</p>
                <p className="summary__label">Interest</p>
                <p className="summary__value summary__value--interest">{currencyFormater(interest)}</p>
                <button onClick={sortClick} className="btn--sort"> l SORT </button>
            </div>
        </div>
    )
}

export default Summary
