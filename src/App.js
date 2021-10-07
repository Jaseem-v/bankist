import React, { useState } from 'react';
import "./App.css";
import Login from './components/Login';
import Main from './components/Main';
import { Context } from "./Context";




/////////////////////////////////////////////////
// Data
const account1 = {
  owner: 'Jaseem V',
  movements: [2000, 4500, -4000, 30000, -6500, -1300, 700, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    '2020-11-18T21:31:17.178Z',
    '2020-12-23T07:42:02.383Z',
    '2021-01-28T09:15:04.904Z',
    '2021-04-01T10:17:24.185Z',
    '2021-05-08T14:11:59.604Z',
    '2021-07-26T17:01:17.194Z',
    '2021-07-28T23:36:17.929Z',
    '2021-08-01T10:51:36.790Z',
  ],
};

const account2 = {
  owner: 'Lionel Messi',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2020-11-01T13:15:33.035Z',
    '2020-11-30T09:48:16.867Z',
    '2020-12-25T06:04:23.907Z',
    '2021-01-25T14:18:46.235Z',
    '2021-02-05T16:33:06.386Z',
    '2021-04-10T14:43:26.374Z',
    '2021-06-25T18:49:59.371Z',
    '2021-07-26T12:01:20.894Z',
  ],
};

const account3 = {
  owner: 'Cristiano Ronaldo',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    '2020-11-01T13:15:33.035Z',
    '2020-11-30T09:48:16.867Z',
    '2020-12-25T06:04:23.907Z',
    '2021-01-25T14:18:46.235Z',
    '2021-02-05T16:33:06.386Z',
    '2021-04-10T14:43:26.374Z',
    '2021-06-25T18:49:59.371Z',
    '2021-07-26T12:01:20.894Z',
  ],
};

const account4 = {
  owner: 'Muhammed Salah',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2021-01-25T14:18:46.235Z',
    '2021-02-05T16:33:06.386Z',
    '2021-04-10T14:43:26.374Z',
    '2021-06-25T18:49:59.371Z',
    '2021-07-26T12:01:20.894Z',
  ],
};

const accounts = [account1, account2, account3, account4];


window.currentUser = {};
export let timerInterval = 0;
export let startTimer = undefined;
function App() {


  const [user, setUser] = useState(0);
  const [timer, setTimer] = useState("05:00");



  //username

  accounts.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });


  ////////////////////////////////////////////////
  //  Timer


  startTimer = () => {

    let timeInt = 300;
    timerInterval = setInterval(() => {
      let minute = `${Math.floor(timeInt / 60)}`.padStart(2, 0);
      let second = `${timeInt % 60}`.padStart(2, 0);
      setTimer(`${minute}:${second}`);

      if (timeInt === 0) {
        window.currentUser = undefined;
        setUser(window.currentUser);
      }
      timeInt--;

    }, 1000);


  }



  return (
    <div>

      <Context.Provider value={{ user, setUser, accounts, timer, setTimer }}>

        <Login />

        {user ?
          <Main
          />
          : console.log("no user")

        }

      </Context.Provider>
    </div>
  )
}

export default App
