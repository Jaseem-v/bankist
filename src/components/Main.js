import React from 'react'
import CloseAccount from './CloseAccount'
import Loan from './Loan'
import Transfers from './Transfers'
import Summary from "./Summary";
import Movement from './Movement';

function Main({ user, setUser }) {

    let allBalance = user.movements.reduce((acc, el) => acc + el, 0);



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
                    <p className="balance__value">{`${allBalance}€`}</p>
                </div>

                {/* <!-- MOVEMENTS --> */}
                <div className="movements">

                    {console.log("before :", user.movements)}

                    {user.movements.reverse()?.map((el, i, arr) => {
                        if (el > 0) {
                            return <Movement status={"deposit"} statusValue={`${arr.length - i} deposit`} money={el} />
                        } else {
                            return <Movement status={"withdrawal"} statusValue={`${arr.length - i} withdrawal`} money={el} />

                        }

                    })}

                    {console.log("after :", user.movements)}


                </div>



                <Transfers />

                <Loan user={user} setUser={setUser} />

                <CloseAccount />

                <Summary user={user} />


                {/* <!-- LOGOUT TIMER --> */}
                <p className="logout-timer">
                    You will be logged out in <span className="timer">05:00</span>
                </p>
            </main>
        </div>
    )
}

export default Main
