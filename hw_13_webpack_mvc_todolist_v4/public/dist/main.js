!function(e){var t={};function o(l){if(t[l])return t[l].exports;var n=t[l]={i:l,l:!1,exports:{}};return e[l].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,l){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(o.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(l,n,function(t){return e[t]}.bind(null,n));return l},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var l=function(e){let t=e.id;t=+t.slice(6),console.log(t),console.log(e),localStorage.setItem("time"+t,""),localStorage.setItem("text"+t,""),localStorage.setItem("checkbox"+t,""),e.parentElement.remove()};var n=function(e){let t=e.id;t=+t.slice(4),console.log(t),console.log(e),localStorage.setItem("time"+t,""),localStorage.setItem("text"+t,""),localStorage.setItem("checkbox"+t,""),console.log(e.parentElement.childNodes[1]),console.log(e.parentElement.childNodes[0]),document.getElementById("textIN").value=e.parentElement.childNodes[1].innerHTML,e.parentElement.remove()};var c=function(){let e=[],t=[],o=localStorage.getItem("len");for(let l=1;l<=o;l++)e[l]=parseFloat(document.getElementById("li"+l).style.top),t[l]=l,console.log(e[l]);for(let l=1;l<=o;l++)for(let l=1;l<o;l++)e[l]>e[l+1]&&([e[l],e[l+1]]=[e[l+1],e[l]],[t[l],t[l+1]]=[t[l+1],t[l]]);console.log(e),console.log(t);for(let e=1;e<=o;e++)document.getElementById("li"+t[e]).style.top=20*e+"px",localStorage.setItem("pos"+t[e],20*e+"px")};var r=function(){let e=[],t=[],o=localStorage.getItem("len");for(let l=1;l<=o;l++)e[l]=parseFloat(document.getElementById("li"+l).style.top),t[l]=l,console.log(e[l]);for(let l=1;l<=o;l++)for(let l=1;l<o;l++)e[l]>e[l+1]&&([e[l],e[l+1]]=[e[l+1],e[l]],[t[l],t[l+1]]=[t[l+1],t[l]]);console.log(e),console.log(t);for(let l=1;l<=o;l++)document.getElementById("li"+t[o-l+1]).style.top=e[l]+"px",localStorage.setItem("pos"+t[o-l+1],e[l]+"px")};var a=function(e,t){e.onmouseup=function(){console.log("drag and drop stop"),localStorage.setItem("sttop"+t,e.style.top),e.style.zIndex=900,localStorage.setItem("pos"+t,e.style.top),document.onmousemove=null,e.onmouseup=null},e.onmousedown=function(t){console.log(event.target.type),e.style.position="absolute",e.style.zIndex=1e3,console.log("start drop"),document.onmousemove=function(t){console.log("start drop 1"),function(t){e.style.top=t.pageY-4.5*e.offsetHeight+"px"}(t)}}};var s=function(e,t){console.log("2 ok");let o=document.createElement("li"),l=document.createElement("label"),n=document.createElement("input"),c=document.createElement("label"),r=document.createElement("button"),s=document.createElement("button");console.log("3 ok"),r.type="button",r.innerHTML="Edit",r.id="Edit"+e,r.style.position="absolute",r.style.left="387px",console.log("4 ok"),s.type="button",s.innerHTML="DELETE",s.id="DELETE"+e,s.style.position="absolute",s.style.left="428px",n.type="checkbox",n.id="checkbox"+e,console.log("5 ok"),l.innerHTML=t.text,l.id="text"+e,l.type="text",l.for="checkbox"+e,console.log("6 ok"),c.innerHTML=t.time,c.id="time"+e,c.type="text",c.for="checkbox"+e,o.type="li",o.id="li"+e,o.style.height="20px",o.style.width="497px",console.log("7 ok"),o.style.background="white",o.style.position="absolute",o.style.border="1px solid black",o.style.padding="0px",console.log(t.pos),o.style.top=t.pos,console.log("8 ok"),a(o,e),list.appendChild(o),o.appendChild(n),o.appendChild(l),o.appendChild(c),o.appendChild(r),o.appendChild(s),console.log("2 finish ok")};var i=function(e){let t,o={};console.log("add test"),t=+localStorage.getItem("len")+1,t+="",localStorage.setItem("len",t);let l=new Date;o.pos=20*t+"px",localStorage.setItem("pos"+t,20*t+"px"),o.checkbox="false",localStorage.setItem("checkbox"+t,"false"),o.text=e,localStorage.setItem("text"+t,e),o.time=": "+l.getDate()+"."+l.getMonth()+"."+l.getFullYear()+"  "+l.getHours()+":"+l.getMinutes(),localStorage.setItem("time"+t,": "+l.getDate()+"."+l.getMonth()+"."+l.getFullYear()+"  "+l.getHours()+":"+l.getMinutes()),document.getElementById("textIN").value="",s(t,o)};var g=function(){let e=document.getElementById("textIN").value;""!=e&&i(e)};var d=()=>{console.log("test export"),document.getElementById("ReversButton").addEventListener("click",r),document.getElementById("SortButton").addEventListener("click",c),document.getElementById("list").addEventListener("click",function(){let e=event.target;"button"==e.type&&("DELETE"==e.innerHTML?l(e):"Sort"==e.innerHTML&&n(e))}),document.getElementById("AddButton").addEventListener("click",g)};var u=function(e){for(let t=e+1;t<=+localStorage.getItem("len");t++)if(""!=localStorage.getItem("checkbox"+t))return localStorage.setItem("checkbox"+e,localStorage.getItem("checkbox"+t)),localStorage.setItem("checkbox"+t,""),localStorage.setItem("text"+e,localStorage.getItem("text"+t)),localStorage.setItem("text"+t,""),localStorage.setItem("time"+e,localStorage.getItem("time"+t)),localStorage.setItem("time"+t,""),!0;return!1};var m={};var p=function e(t){if(""!=localStorage.getItem("checkbox"+t)){let e={};m["TDL"+t]=e,e.text=localStorage.getItem("text"+t),e.time=localStorage.getItem("time"+t),e.pos=localStorage.getItem("pos"+t),e.ind=t,s(t,e)}else{let o=u(t);if(1==o)e(t);else if(0==o)return!1}};var f=()=>{if(console.log("1 ok"),null==localStorage.getItem("len"))localStorage.setItem("len","0");else for(let e=1;e<=+localStorage.getItem("len");e++)if(console.log(e),0==p(e)){localStorage.setItem("len",e-1);break}let e=document.getElementById("list");e.style.padding="0px",e.style.position="relative",console.log("1 finish ok")};jQuery,console.log("index - ok"),document.addEventListener("DOMContentLoaded",function(){f(),d()})}]);