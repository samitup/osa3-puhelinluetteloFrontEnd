(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),u=t.n(a),l=t(13),o=t.n(l),c=(t(20),t(14)),r=t(2),i=function(e){return u.a.createElement("div",null,"filter with ",u.a.createElement("input",{value:e.filterInputValue,onChange:e.filterInputChangeFn}))},m=function(e){return u.a.createElement("form",{onSubmit:e.addPerson},u.a.createElement("div",null,"name: ",u.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),u.a.createElement("div",null,"number: ",u.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),u.a.createElement("div",null,u.a.createElement("button",{type:"submit"},"add")))},s=t(3),f=t.n(s),d="api/persons",h=function(){return f.a.get(d)},p=function(e){return f.a.post(d,e)},b=function(e,n){return f.a.put("".concat(d,"/").concat(e),n)},g=function(e){return f.a.delete("".concat(d,"/").concat(e))},v=function(e){return u.a.createElement("div",null,e.name.map((function(n){return u.a.createElement("li",{key:n.id},n.name," ",n.number," ",u.a.createElement("button",{onClick:function(){e.onDeleteClick(n.id)}},"Delete"))})))},E=function(e){var n=e.message,t=e.messageColor;return null===n?null:u.a.createElement("div",{className:t},n)},C=function(){var e=function(){console.log("effect"),h().then((function(e){console.log("promise fulfilled"),o(e.data)}))};Object(a.useEffect)(e,[]);var n=Object(a.useState)([{name:"Arto Hellas",number:"045-050192"}]),t=Object(r.a)(n,2),l=t[0],o=t[1],s=Object(a.useState)(""),f=Object(r.a)(s,2),d=f[0],C=f[1],j=Object(a.useState)(""),O=Object(r.a)(j,2),w=O[0],k=O[1],N=Object(a.useState)(""),y=Object(r.a)(N,2),S=y[0],D=y[1],I=Object(a.useState)(null),T=Object(r.a)(I,2),P=T[0],A=T[1],F=Object(a.useState)(""),J=Object(r.a)(F,2),U=J[0],V=J[1],x=S?l.filter((function(e){return!0===e.name.toUpperCase().includes(S.toUpperCase())})):l;return u.a.createElement("div",null,u.a.createElement("h1",null,"Phonebook"),u.a.createElement(E,{message:P,messageColor:U}),u.a.createElement(i,{filterInputValue:S,filterInputChangeFn:function(e){D(e.target.value)}}),u.a.createElement("h1",null,"Add a new"),u.a.createElement("div",null,u.a.createElement(m,{addPerson:function(e){e.preventDefault();var n=l.some((function(e){return e.name===d}));!1===n&&(p({name:d,number:w,id:d}).then((function(e){o(l.concat(e.data))})).catch((function(e){console.log(e.response.data),V("red"),A("".concat(e.response.data.error)),setTimeout((function(){A(null)}),5e3)})),C(""),k(""),V("green"),A("".concat(d," successfully added to phonebook!")),setTimeout((function(){A(null)}),5e3));var t=l.find((function(e){return e.name===d}));if(!0===n){if(window.confirm("".concat(d," is already in the phonebook, would you like to update the number?"))){var a=Object(c.a)({},t,{number:w});b(a.id,a).then((function(e){o(l.map((function(e){return e.id!==a.id?e:a})))})).then((function(e){return e.data}))}C(""),k(""),V("green"),A("".concat(d," successfully updated to phonebook!")),setTimeout((function(){A(null)}),5e3)}},newName:d,handleNameChange:function(e){C(e.target.value)},newNumber:w,handleNumberChange:function(e){console.log(e.target.value),k(e.target.value)}})),u.a.createElement("h1",null,"Names  -  Numbers"),u.a.createElement("div",null,console.log(x),u.a.createElement(v,{name:x,onDeleteClick:function(n){var t=l.find((function(e){return e.id===n})).name;window.confirm('Delete person "'.concat(t,'" ?'))&&(g(n).then(e).catch((function(e){e="".concat(t," already deleted from server, try to refresh"),V("red"),A(e),setTimeout((function(){A(null)}),5e3)})),V("green"),A("".concat(t," successfully deleted from phonebook! ")),setTimeout((function(){A(null)}),5e3))}})))};o.a.render(u.a.createElement(C,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.b19dc239.chunk.js.map