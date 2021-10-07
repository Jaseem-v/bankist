import React from 'react'

function Movement({ status, money, statusValue, date, currencyFormater }) {





    const formatDate = (date1, date2) => {
        let dateDifference = Math.round(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));

        if (dateDifference === 0) return "TODAY"
        if (dateDifference === 1) return "YESTURDAY"
        if (dateDifference < 7) return `${dateDifference} days ago`

        return new Intl.DateTimeFormat("en-GB").format(new Date(date));

    }


    const currentDate = formatDate(new Date(date), new Date());


    // asd




    return (
        <div>
            <div className="movements__row">
                <div className={`movements__type movements__type--${status}`} >{statusValue}</div>
                <div className="movements__date">{currentDate}</div>
                <div className="movements__value">{currencyFormater(money)}</div>
            </div>
        </div>
    )
}

export default Movement
