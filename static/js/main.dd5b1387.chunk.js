(this.webpackJsonpbankist=this.webpackJsonpbankist||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),a=n(5),c=n.n(a),o=n(2),l=(n(10),Object(r.createContext)()),u=n(0);var i=function(){var e=Object(r.useContext)(l),t=e.user,n=e.setUser,s=e.accounts;return Object(u.jsx)("div",{children:Object(u.jsxs)("nav",{children:[Object(u.jsx)("p",{className:"welcome",children:t?"Welcome Back , ".concat(t.owner.split(" ")[0]):"Log in to get started"}),Object(u.jsx)("img",{src:"logo.png",alt:"Logo",className:"logo"}),Object(u.jsxs)("form",{className:"login",children:[Object(u.jsx)("input",{type:"text",placeholder:"user",className:"login__input login__input--user"}),Object(u.jsx)("input",{type:"text",placeholder:"PIN",maxLength:"4",className:"login__input login__input--pin"}),Object(u.jsx)("button",{onClick:function(e){e.preventDefault();var t=document.querySelector(".login__input--user"),r=document.querySelector(".login__input--pin"),a=Number.parseInt(r.value);window.currentUser=s.find((function(e){return e.username===t.value&&e.pin===a})),t.value=r.value="",window.currentUser?(n(window.currentUser),O&&clearInterval(O),x()):alert("no user")},className:"login__btn",children:"\u2192"})]})]})})};var m=function(){var e=Object(r.useContext)(l),t=e.setUser,n=e.accounts;return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"operation operation--close",children:[Object(u.jsx)("h2",{children:"Close account"}),Object(u.jsxs)("form",{className:"form form--close",children:[Object(u.jsx)("input",{type:"text",className:"form__input form__input--user"}),Object(u.jsx)("input",{type:"password",maxlength:"6",className:"form__input form__input--pin"}),Object(u.jsx)("button",{onClick:function(e){e.preventDefault();var r=document.querySelector(".form__input--user"),s=document.querySelector(".form__input--pin");if(r.value===window.currentUser.username&&Number(s.value)===window.currentUser.pin){var a=n.findIndex((function(e){return e.username===r.value&&e.pin===Number(s.value)}));n.splice(a,1),window.currentUser=void 0,t(window.currentUser),console.log(n)}else console.log("wrong userName");r.value="",s.value=""},className:"form__btn form__btn--close",children:"\u2192"}),Object(u.jsx)("label",{className:"form__label",children:"Confirm user"}),Object(u.jsx)("label",{className:"form__label",children:"Confirm PIN"})]})]})})},d=n(3);var j=function(){var e=Object(r.useContext)(l).setUser;return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"operation operation--loan",children:[Object(u.jsx)("h2",{children:"Request loan"}),Object(u.jsxs)("form",{className:"form form--loan",children:[Object(u.jsx)("input",{type:"number",className:"form__input form__input--loan-amount"}),Object(u.jsx)("button",{onClick:function(t){var n,r;t.preventDefault();var s=document.querySelector(".form__input--loan-amount");(null===(n=window.currentUser)||void 0===n||null===(r=n.movements)||void 0===r?void 0:r.some((function(e){return e>=.1*Number(s.value)})))&&setTimeout((function(){var t,n,r,a;null===(t=window.currentUser)||void 0===t||null===(n=t.movements)||void 0===n||n.push(Number(s.value)),null===(r=window.currentUser)||void 0===r||null===(a=r.movementsDates)||void 0===a||a.push((new Date).toISOString()),alert("loan Aproved"),s.value="",e(Object(d.a)({},window.currentUser)),O&&clearInterval(O),x()}),2e3)},className:"form__btn form__btn--loan",children:"\u2192"}),Object(u.jsx)("label",{className:"form__label form__label--loan",children:"Amount"})]})]})})};var v=function(e){var t=e.status,n=e.money,r=e.statusValue,s=e.date,a=e.currencyFormater,c=function(e,t){var n=Math.round(Math.abs(e-t)/864e5);return 0===n?"TODAY":1===n?"YESTURDAY":n<7?"".concat(n," days ago"):new Intl.DateTimeFormat("en-GB").format(new Date(s))}(new Date(s),new Date);return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"movements__row",children:[Object(u.jsx)("div",{className:"movements__type movements__type--".concat(t),children:r}),Object(u.jsx)("div",{className:"movements__date",children:c}),Object(u.jsx)("div",{className:"movements__value",children:a(n)})]})})};var b=function(){var e=Object(r.useContext)(l),t=e.setUser,n=e.accounts;return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"operation operation--transfer",children:[Object(u.jsx)("h2",{children:"Transfer money"}),Object(u.jsxs)("form",{className:"form form--transfer",children:[Object(u.jsx)("input",{type:"text",className:"form__input form__input--to"}),Object(u.jsx)("input",{type:"number",className:"form__input form__input--amount"}),Object(u.jsx)("button",{onClick:function(e){e.preventDefault();var r=document.querySelector(".form__input--to"),s=document.querySelector(".form__input--amount"),a=+s.value,c=n.find((function(e){return e.username===r.value}));a&&window.currentUser.balance>a&&c&&(null===c||void 0===c?void 0:c.username)!==window.currentUser.username&&(window.currentUser.movements.push(-a),c.movements.push(a),window.currentUser.movementsDates.push((new Date).toISOString()),c.movementsDates.push((new Date).toISOString())),r.value=s.value="",t(Object(d.a)({},window.currentUser)),O&&clearInterval(O),x()},className:"form__btn form__btn--transfer",children:"\u2192"}),Object(u.jsx)("label",{className:"form__label",children:"Transfer to"}),Object(u.jsx)("label",{className:"form__label",children:"Amount"})]})]})})};var _=function(e){var t,n,s,a,c,o,i=e.sortClick,m=e.currencyFormater,d=Object(r.useContext)(l).user,j=null===d||void 0===d||null===(t=d.movements)||void 0===t?void 0:t.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0),v=null===d||void 0===d||null===(n=d.movements)||void 0===n?void 0:n.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0),b=Math.round(null===d||void 0===d||null===(s=d.movements)||void 0===s||null===(a=s.filter((function(e){return e>0})))||void 0===a||null===(c=a.map((function(e){return e*(null===d||void 0===d?void 0:d.interestRate)/100})))||void 0===c||null===(o=c.filter((function(e){return e>=1})))||void 0===o?void 0:o.reduce((function(e,t){return e+t}),0));return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"summary",children:[Object(u.jsx)("p",{className:"summary__label",children:"In"}),Object(u.jsx)("p",{className:"summary__value summary__value--in",children:m(j)}),Object(u.jsx)("p",{className:"summary__label",children:"Out"}),Object(u.jsx)("p",{className:"summary__value summary__value--out",children:m(-v)}),Object(u.jsx)("p",{className:"summary__label",children:"Interest"}),Object(u.jsx)("p",{className:"summary__value summary__value--interest",children:m(b)}),Object(u.jsx)("button",{onClick:i,className:"btn--sort",children:" l SORT "})]})})};var p=function(){var e,t,n=Object(r.useContext)(l),s=n.user,a=n.timer,c=Object(r.useState)(!1),i=Object(o.a)(c,2),d=i[0],p=i[1];t=d?s.movements.slice().sort((function(e,t){return e-t})):s.movements;var f=function(e){return new Intl.NumberFormat(navigator.languages,{style:"currency",currency:"INR"}).format(e)},O=null===s||void 0===s||null===(e=s.movements)||void 0===e?void 0:e.reduce((function(e,t){return e+t}),0);s.balance=O;var x=new Intl.DateTimeFormat("en-IN",{year:"numeric",month:"long",day:"numeric",weekday:"long",hour:"numeric",minute:"numeric"}).format(new Date);return Object(u.jsx)("div",{children:Object(u.jsxs)("main",{className:"app",children:[Object(u.jsxs)("div",{className:"balance",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{className:"balance__label",children:"Current balance"}),Object(u.jsxs)("p",{className:"balance__date",children:["As of ",Object(u.jsx)("span",{className:"date",children:x})]})]}),Object(u.jsx)("p",{className:"balance__value",children:f(s.balance)})]}),Object(u.jsx)("div",{className:"movements",children:t.map((function(e,t,n){return Object(u.jsx)(v,{status:e>0?"deposit":"withdrawal",statusValue:"".concat(n.length-t," ").concat(e>0?"deposit":"withdrawal"),money:e,date:s.movementsDates[t],currencyFormater:f},t)}))}),Object(u.jsx)(b,{}),Object(u.jsx)(j,{}),Object(u.jsx)(m,{}),Object(u.jsx)(_,{sortClick:function(e){e.preventDefault(),p(!d)},currencyFormater:f}),Object(u.jsxs)("p",{className:"logout-timer",children:["You will be logged out in ",Object(u.jsx)("span",{className:"timer",children:a})]})]})})},f=[{owner:"Jaseem V",movements:[2e3,4500,-4e3,3e4,-6500,-1300,700,1300],interestRate:1.2,pin:1111,movementsDates:["2020-11-18T21:31:17.178Z","2020-12-23T07:42:02.383Z","2021-01-28T09:15:04.904Z","2021-04-01T10:17:24.185Z","2021-05-08T14:11:59.604Z","2021-07-26T17:01:17.194Z","2021-07-28T23:36:17.929Z","2021-08-01T10:51:36.790Z"]},{owner:"Lionel Messi",movements:[5e3,3400,-150,-790,-3210,-1e3,8500,-30],interestRate:1.5,pin:2222,movementsDates:["2020-11-01T13:15:33.035Z","2020-11-30T09:48:16.867Z","2020-12-25T06:04:23.907Z","2021-01-25T14:18:46.235Z","2021-02-05T16:33:06.386Z","2021-04-10T14:43:26.374Z","2021-06-25T18:49:59.371Z","2021-07-26T12:01:20.894Z"]},{owner:"Cristiano Ronaldo",movements:[200,-200,340,-300,-20,50,400,-460],interestRate:.7,pin:3333,movementsDates:["2020-11-01T13:15:33.035Z","2020-11-30T09:48:16.867Z","2020-12-25T06:04:23.907Z","2021-01-25T14:18:46.235Z","2021-02-05T16:33:06.386Z","2021-04-10T14:43:26.374Z","2021-06-25T18:49:59.371Z","2021-07-26T12:01:20.894Z"]},{owner:"Muhammed Salah",movements:[430,1e3,700,50,90],interestRate:1,pin:4444,movementsDates:["2019-11-01T13:15:33.035Z","2019-11-30T09:48:16.867Z","2019-12-25T06:04:23.907Z","2021-01-25T14:18:46.235Z","2021-02-05T16:33:06.386Z","2021-04-10T14:43:26.374Z","2021-06-25T18:49:59.371Z","2021-07-26T12:01:20.894Z"]}];window.currentUser={};var O=0,x=void 0;var h=function(){var e=Object(r.useState)(0),t=Object(o.a)(e,2),n=t[0],s=t[1],a=Object(r.useState)("05:00"),c=Object(o.a)(a,2),m=c[0],d=c[1];return f.forEach((function(e){e.username=e.owner.toLowerCase().split(" ").map((function(e){return e[0]})).join("")})),x=function(){var e=300;O=setInterval((function(){var t="".concat(Math.floor(e/60)).padStart(2,0),n="".concat(e%60).padStart(2,0);d("".concat(t,":").concat(n)),0===e&&(window.currentUser=void 0,s(window.currentUser)),e--}),1e3)},Object(u.jsx)("div",{children:Object(u.jsxs)(l.Provider,{value:{user:n,setUser:s,accounts:f,timer:m,setTimer:d},children:[Object(u.jsx)(i,{}),n?Object(u.jsx)(p,{}):console.log("no user")]})})};c.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.dd5b1387.chunk.js.map