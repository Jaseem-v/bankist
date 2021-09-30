import React, { useState } from 'react';

import "./App.css";
import Login from './components/Login';
import Main from './components/Main';

/////////////////////////////////////////////////
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-07-26T17:01:17.194Z',
    '2020-07-28T23:36:17.929Z',
    '2020-08-01T10:51:36.790Z',
  ],
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
};

const accounts = [account1, account2, account3, account4];
let currentUser = {};


function App() {



  const [user, setUser] = useState(0);

  //username

  accounts.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });


  /////////////////////////////////////////////
  // finduser

  let findUser = (e) => {
    e.preventDefault();
    let inputLoginUsername = document.querySelector('.login__input--user');
    let inputLoginPin = document.querySelector('.login__input--pin');

    let loginPin = Number.parseInt(inputLoginPin.value)

    currentUser = accounts.find((el) => {
      return el.username === inputLoginUsername.value && el.pin === loginPin;
    });

    inputLoginUsername.value = inputLoginPin.value = ""

    if (currentUser) {
      setUser(currentUser);
    } else {
      alert("no user");
    }

  }


  ///////////////////////////////////////////////////////////
  /// Loan

  let applyLoan = (e) => {
    e.preventDefault();

    let inputLoanAmount = document.querySelector('.form__input--loan-amount');
    let amoutPercent = currentUser.movements.some((el) => el >= Number(inputLoanAmount.value) * 0.1)

    if (amoutPercent) {
      currentUser.movements.push(Number(inputLoanAmount.value));
      currentUser.movementsDates.push(new Date().toISOString());
    }
    inputLoanAmount.value = "";

    setUser({ ...currentUser })

  }

  ///////////////////////////////////////////////////////
  /// transferMoney

  let transferMoney = (e) => {
    e.preventDefault();
    let inputTransferTo = document.querySelector('.form__input--to');
    let inputTransferAmount = document.querySelector('.form__input--amount');

    let amount = +inputTransferAmount.value;

    let receiverAcc = accounts.find((el) => {
      return el.username === inputTransferTo.value
    });

    if (amount && currentUser.balance > amount && receiverAcc && receiverAcc?.username !== currentUser.username) {
      currentUser.movements.push(-amount);
      receiverAcc.movements.push(amount);

      //////// Date push
      currentUser.movementsDates.push(new Date().toISOString());
      receiverAcc.movementsDates.push(new Date().toISOString());
    }

    inputTransferTo.value = inputTransferAmount.value = ""

    setUser({ ...currentUser });
  }

  ////////////////////////////////////////////////////////////////////
  ////// Close Account

  let closeAccount = (e) => {
    e.preventDefault();

    let inputCloseUsername = document.querySelector('.form__input--user');
    let inputClosePin = document.querySelector('.form__input--pin');

    if (inputCloseUsername.value === currentUser.username && Number(inputClosePin.value) === currentUser.pin) {
      let closeUserIndex = accounts.findIndex((el) => {
        return el.username === inputCloseUsername.value && el.pin === Number(inputClosePin.value);
      })

      accounts.splice(closeUserIndex, 1);

      currentUser = undefined;

      setUser(currentUser);

      console.log(accounts);
    } else {
      console.log("wrong userName");
    }


    inputCloseUsername.value = "";
    inputClosePin.value = "";


  }





  return (
    <div>

      <Login
        findUser={findUser} user={user}
      />

      { user ?
        <Main
          accounts={accounts}
          applyLoan={applyLoan}
          currentUser={currentUser}
          user={user}
          transferMoney={transferMoney}
          closeAccount={closeAccount}
        />
        : console.log("no user")

      }

    </div>
  )
}

export default App
