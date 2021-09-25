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
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
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

    acc.status = false;
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


    // currentUser.status = currentUser ? true : false;


    inputLoginUsername.value = ""
    inputLoginPin.value = ""

    setUser(currentUser);


  }



  let applyLoan = (e) => {
    e.preventDefault();

    let inputLoanAmount = document.querySelector('.form__input--loan-amount');

    currentUser.movements.push(Number(inputLoanAmount.value));

    inputLoanAmount.value = "";

    setUser({ ...currentUser })


  }

  ///////////////////////////////////////////////////////
  /// transferMoney

  let transferMoney = (e) => {
    e.preventDefault();
    let inputTransferTo = document.querySelector('.form__input--to');
    let inputTransferAmount = document.querySelector('.form__input--amount');

    let amount = +inputTransferAmount.value

    let receiverAcc = accounts.find((el) => {
      return el.username === inputTransferTo.value
    });

    if (amount && currentUser.balance > amount && receiverAcc && receiverAcc?.username !== currentUser.username) {
      currentUser.movements.push(-amount);
      receiverAcc.movements.push(amount);
    }
    inputTransferTo.value = inputTransferAmount.value = ""

    setUser({...currentUser})



  }





  return (
    <div>

      <Login
        findUser={findUser}
      />

      { user ?
        <Main
          accounts={accounts}
          applyLoan={applyLoan}
          currentUser={currentUser}
          user={user}
          transferMoney={transferMoney}
        />
        : console.log("no user")

      }

    </div>
  )
}

export default App
