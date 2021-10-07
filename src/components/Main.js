import React, { useState, useContext } from 'react';
import Close from './Close';
import Loan from './Loan';
import Movement from './Movement';
import Transfer from './Transfer';
import { Context } from '../Context';
import Summary from './Summary';




function Main() {

    let { user, timer, } = useContext(Context);

    //////////////////////////////////////////////////////
    // Sort

    const [sort, setSort] = useState(false);

    let movs;


    movs = sort ? user.movements.slice().sort((a, b) => a - b) : user.movements



    const sortClick = (e) => {
        e.preventDefault();
        setSort(!sort);
    }

    ////////////////////////////////////////////////////////////
    // currency format

    const currencyFormater = (value) => {
        let currencyOptions = {
            style: "currency",
            currency: "INR"
        }

        return new Intl.NumberFormat(navigator.languages, currencyOptions).format(value)
    }

    ////////////////////////////////
    // calculation

    let allBalance = user?.movements?.reduce((acc, el) => acc + el, 0);
    user.balance = allBalance



    ////////////////////////////////////////////////////////////
    // Date

    let dateOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
        hour: "numeric",
        minute: "numeric"
    }
    let now = new Intl.DateTimeFormat("en-IN", dateOptions).format(new Date());












    return (
        <div>
            <main className="app">
                {/* <!-- BALANCE --> */}
                <div className="balance">
                    <div>
                        <p className="balance__label">Current balance</p>
                        <p className="balance__date">
                            As of <span className="date">{now}</span>
                        </p>
                    </div>
                    <p className="balance__value">{currencyFormater(user.balance)}</p>
                </div>

                {/* <!-- MOVEMENTS --> */}
                <div className="movements">



                    {movs.map((mov, i, arr) =>
                        <Movement
                            key={i}
                            status={mov > 0 ? "deposit" : "withdrawal"}
                            statusValue={`${arr.length - i} ${mov > 0 ? "deposit" : "withdrawal"}`}
                            money={mov}
                            date={user.movementsDates[i]}
                            currencyFormater={currencyFormater}
                        />
                    )}



                </div>


                <Transfer />

                <Loan />

                <Close />

                <Summary sortClick={sortClick} currencyFormater={currencyFormater} />


                {/* <!-- LOGOUT TIMER --> */}
                <p className="logout-timer">
                    You will be logged out in <span className="timer" >{timer}</span>
                </p>
            </main>
        </div>
    )
}

export default Main
