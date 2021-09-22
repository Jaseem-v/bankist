(this.webpackJsonpbankist=this.webpackJsonpbankist||[]).push([[0],{12:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),c=s(5),r=s.n(c),l=s(6),o=(s(12),s(0));var i=function(e){e.user;var t=e.setUser,s=e.accounts;return Object(o.jsx)("div",{children:Object(o.jsxs)("nav",{children:[Object(o.jsx)("p",{className:"welcome",children:"Log in to get started"}),Object(o.jsx)("img",{src:"logo.png",alt:"Logo",className:"logo"}),Object(o.jsxs)("form",{className:"login",children:[Object(o.jsx)("input",{type:"text",placeholder:"user",className:"login__input login__input--user"}),Object(o.jsx)("input",{type:"text",placeholder:"PIN",maxlength:"4",className:"login__input login__input--pin"}),Object(o.jsx)("button",{onClick:function(e){e.preventDefault();var n=document.querySelector(".login__input--user"),a=document.querySelector(".login__input--pin"),c=s.find((function(e){return e.username===n.value&&e.pin===Number(a.value)}));c.status=!!c,t(c),n.value="",a.value=""},className:"login__btn",children:"\u2192"})]})]})})};var m=function(){return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"operation operation--close",children:[Object(o.jsx)("h2",{children:"Close account"}),Object(o.jsxs)("form",{className:"form form--close",children:[Object(o.jsx)("input",{type:"text",className:"form__input form__input--user"}),Object(o.jsx)("input",{type:"password",maxlength:"6",className:"form__input form__input--pin"}),Object(o.jsx)("button",{className:"form__btn form__btn--close",children:"\u2192"}),Object(o.jsx)("label",{className:"form__label",children:"Confirm user"}),Object(o.jsx)("label",{className:"form__label",children:"Confirm PIN"})]})]})})},u=s(7);var j=function(e){var t=e.user,s=e.setUser;return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"operation operation--loan",children:[Object(o.jsx)("h2",{children:"Request loan"}),Object(o.jsxs)("form",{className:"form form--loan",children:[Object(o.jsx)("input",{type:"number",className:"form__input form__input--loan-amount"}),Object(o.jsx)("button",{onClick:function(e){e.preventDefault();var n=document.querySelector(".form__input--loan-amount");t.movements=[].concat(Object(u.a)(t.movements),[Number(n.value)]),n.value="",s(t)},className:"form__btn form__btn--loan",children:"\u2192"}),Object(o.jsx)("label",{className:"form__label form__label--loan",children:"Amount"})]})]})})};var b=function(){return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"operation operation--transfer",children:[Object(o.jsx)("h2",{children:"Transfer money"}),Object(o.jsxs)("form",{className:"form form--transfer",children:[Object(o.jsx)("input",{type:"text",className:"form__input form__input--to"}),Object(o.jsx)("input",{type:"number",className:"form__input form__input--amount"}),Object(o.jsx)("button",{className:"form__btn form__btn--transfer",children:"\u2192"}),Object(o.jsx)("label",{className:"form__label",children:"Transfer to"}),Object(o.jsx)("label",{className:"form__label",children:"Amount"})]})]})})};var d=function(e){var t=e.user,s=t.movements.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0),n=t.movements.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0);return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"summary",children:[Object(o.jsx)("p",{className:"summary__label",children:"In"}),Object(o.jsx)("p",{className:"summary__value summary__value--in",children:"".concat(s,"\u20ac")}),Object(o.jsx)("p",{className:"summary__label",children:"Out"}),Object(o.jsx)("p",{className:"summary__value summary__value--out",children:"".concat(-n,"\u20ac")}),Object(o.jsx)("p",{className:"summary__label",children:"Interest"}),Object(o.jsx)("p",{className:"summary__value summary__value--interest",children:"0000\u20ac"}),Object(o.jsx)("button",{className:"btn--sort",children:" l SORT "})]})})};var _=function(e){var t=e.status,s=e.money,n=e.statusValue;return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"movements__row",children:[Object(o.jsx)("div",{className:"movements__type movements__type--".concat(t),children:n}),Object(o.jsxs)("div",{className:"movements__value",children:[s,"\u20ac"]})]})})};var p=function(e){var t,s=e.user,n=e.setUser,a=s.movements.reduce((function(e,t){return e+t}),0);return Object(o.jsx)("div",{children:Object(o.jsxs)("main",{className:"app",children:[Object(o.jsxs)("div",{className:"balance",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{className:"balance__label",children:"Current balance"}),Object(o.jsxs)("p",{className:"balance__date",children:["As of ",Object(o.jsx)("span",{className:"date",children:"05/03/2037"})]})]}),Object(o.jsx)("p",{className:"balance__value",children:"".concat(a,"\u20ac")})]}),Object(o.jsxs)("div",{className:"movements",children:[console.log("before :",s.movements),null===(t=s.movements.reverse())||void 0===t?void 0:t.map((function(e,t,s){return e>0?Object(o.jsx)(_,{status:"deposit",statusValue:"".concat(t+1," deposit"),money:e}):Object(o.jsx)(_,{status:"withdrawal",statusValue:"".concat(t+1," withdrawal"),money:e})})),console.log("after :",s.movements)]}),Object(o.jsx)(b,{}),Object(o.jsx)(j,{user:s,setUser:n}),Object(o.jsx)(m,{}),Object(o.jsx)(d,{user:s}),Object(o.jsxs)("p",{className:"logout-timer",children:["You will be logged out in ",Object(o.jsx)("span",{className:"timer",children:"05:00"})]})]})})};var v=function(){var e=Object(n.useState)(),t=Object(l.a)(e,2),s=t[0],a=t[1],c=[{owner:"Jonas Schmedtmann",movements:[200,450,-400,3e3,-650,-130,70,1300],interestRate:1.2,pin:1111},{owner:"Jessica Davis",movements:[5e3,3400,-150,-790,-3210,-1e3,8500,-30],interestRate:1.5,pin:2222},{owner:"Steven Thomas Williams",movements:[200,-200,340,-300,-20,50,400,-460],interestRate:.7,pin:3333},{owner:"Sarah Smith",movements:[430,1e3,700,50,90],interestRate:1,pin:4444}];return c.forEach((function(e){e.username=e.owner.toLowerCase().split(" ").map((function(e){return e[0]})).join(""),e.status=!1})),Object(o.jsxs)("div",{children:[Object(o.jsx)(i,{user:s,setUser:a,accounts:c}),s?Object(o.jsx)(p,{user:s,setUser:a}):console.log("no user")]})};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.46d44003.chunk.js.map