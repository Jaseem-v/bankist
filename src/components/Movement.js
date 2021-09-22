import React from 'react'

function Movement({ status, money, statusValue }) {
    return (
        <div>
            <div className="movements__row">
                <div className={`movements__type movements__type--${status}`} >{statusValue}</div>
                {/* <div className="movements__date">3 days ago</div> */}
                <div className="movements__value">{money}€</div>
            </div>
        </div>
    )
}

export default Movement
