(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(n,e,t){n.exports=t(22)},22:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(11),c=t.n(o),u=t(4),i=t(7),l=t(1),f=t(2);function d(){var n=Object(l.a)(["\n  border: 2px solid purple;\n  margin: 10px;\n  background-color: ",";\n"]);return d=function(){return n},n}var p=f.b.div(d(),"#ffeeff");function m(){var n=Object(l.a)(["\nbody{\nfont-family: Arial, Helvetica, sans-serif;\nmargin:10px;\n}\n"]);return m=function(){return n},n}var v=Object(f.a)(m());function b(){var n=Object(l.a)(["\n  margin: 0px;\n  font-size: 20px;\n  background-color: ",";\n  color: #ffff;\n  padding: 10px;\n"]);return b=function(){return n},n}var g=Object(f.b)(p)(b(),"purple");function s(){var n=Object(l.a)([""]);return s=function(){return n},n}function x(){var n=Object(l.a)(["\n  margin: 10px;\n  cursor: pointer;\n"]);return x=function(){return n},n}function E(){var n=Object(l.a)(["\n  height: 20px;\n  margin: 30px;\n  border: none;\n  cursor: pointer;\n"]);return E=function(){return n},n}function j(){var n=Object(l.a)(["\n  color: red;\n  cursor: pointer;\n  &:hover {\n    color: grey;\n  }\n"]);return j=function(){return n},n}var w=f.b.div(j()),O=f.b.button(E()),k=f.b.button(x()),y=f.b.div(s());function h(n,e){return Math.random()*(e-n)+n}var T=function(){return"".concat(h(10,666),"-").concat(h(666,777),"-").concat(h(756,867))};function D(){var n=Object(l.a)(["\n  width: 175px;\n  max-height: 100px;\n  border: 1px solid purple;\n  padding: 5px;\n  margin: 5px;\n  display: flex;\n  justify-content: space-between;\n  cursor: pointer;\n"]);return D=function(){return n},n}var C=f.b.div(D());var I=function(n){var e=n.task,t=n.index,r=n.removeCardHandler;return a.a.createElement(C,{key:T(),id:T(),draggable:!0,onDragStart:function(n){return function(n){n.dataTransfer.setData("cardId",n.target.id),n.dataTransfer.dropEffect="move"}(n)}},a.a.createElement(y,null,e)," ",a.a.createElement(w,{onClick:function(){r(e,t)}},"x"))};function A(){var n=Object(l.a)(["\n  display: flex;\n  font-weight: 800;\n  padding: 10px;\n  background-color: ",";\n  margin-bottom: 5px;\n  justify-content: space-between;\n"]);return A=function(){return n},n}function B(){var n=Object(l.a)(["\n  width: 200px;\n  border: 1px solid ",";\n  margin: 5px;\n"]);return B=function(){return n},n}var H=f.b.div(B(),"purple"),S=f.b.div(A(),"#ffeeff"),J=function(n){var e=n.title,t=a.a.useState(function(){return[]}),r=Object(i.a)(t,2),o=r[0],c=r[1],l=window.confirm,f=function(n,e){if(l("Do you want to remove card ?")){var t=Object(u.a)(o);t.splice(e,1),c(t)}};return a.a.createElement("div",null,a.a.createElement(H,null,a.a.createElement(S,null,a.a.createElement(y,null,e)," ",a.a.createElement(w,{onClick:function(n){var e;e=n,l("Do you want to remove task ?")&&e.target.parentElement.parentElement.remove()}},"x")),a.a.createElement("div",{onDrop:function(n){!function(n){n.preventDefault();var e=n.target,t=n.dataTransfer.getData("cardId");(n.target.draggable||"BUTTON"==n.target.tagName)&&(e=n.target.parentElement),e.prepend(document.getElementById(t))}(n)},onDragOver:function(n){!function(n){n.preventDefault()}(n)}},o&&o.map(function(n,e){return a.a.createElement(I,{key:T(),draggable:!0,task:n,index:e,removeCardHandler:f})})),a.a.createElement(k,{onClick:function(){var n=prompt("Enter Title");n&&c([].concat(Object(u.a)(o),[n]))}},"+ Add a Card")))};function M(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n"]);return M=function(){return n},n}var N=f.b.div(M());function z(){var n=a.a.useState([]),e=Object(i.a)(n,2),t=e[0],r=e[1],o=window.prompt;return a.a.createElement(a.a.Fragment,null,a.a.createElement(v,null),a.a.createElement(p,null,a.a.createElement(g,null,"Tavisca Task Management"),a.a.createElement(N,null,t&&t.map(function(n){return a.a.createElement(J,{title:n,key:T()})}),a.a.createElement(O,{onClick:function(){var n=o("Enter Title");n&&r([].concat(Object(u.a)(t),[n]))}},"+ Add another Tasks"))))}var F=document.getElementById("root");c.a.render(a.a.createElement(z,null),F)}},[[15,1,2]]]);
//# sourceMappingURL=main.ac2bb9de.chunk.js.map