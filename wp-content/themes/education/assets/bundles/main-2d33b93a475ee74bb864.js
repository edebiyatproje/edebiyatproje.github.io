(()=>{var e={34:()=>{!function(){if(document.getElementById("attachment-countdown")){let e=10;const t=document.querySelector(".attachment-download"),n=document.querySelector(".attachment-countdown"),s=document.querySelector(".circle-animation"),a=document.querySelector(".countdown-number"),o=100;document;const c=s.getTotalLength()/100*o;s.style="stroke-dashoffset: "+c;const l=setInterval((()=>{e--,a.innerHTML=e,e<1&&(clearInterval(l),t.style.display="flex",n.style.display="none")}),1e3)}}()},203:()=>{!function(){const e=document.getElementById("countdown");if(!e)return;const t=new Date(e.getAttribute("data-date"));let n,s=36e5,a=864e5;function o(e){var o=new Date,c=t-o;c<0&&(c=0);var l=Math.floor(c/a),r=Math.floor(c%a/s),i=Math.floor(c%s/6e4),d=Math.floor(c%6e4/1e3);const m=[{key:"day",name:"Gün"},{key:"hour",name:"Saat"},{key:"minute",name:"Dakika"},{key:"second",name:"Saniye"}];for(var u=0;u<m.length;u++){const t=m[u],n=document.getElementById(t.key),s=n.getElementsByTagName("circle"),[a]=n.getElementsByTagName("text"),[o,c]=a.getElementsByTagName("tspan");let y=100;switch(t.key){case"day":y=l/365*100,o.innerHTML=l,c.innerHTML="Gün";break;case"hour":y=r/24*100,o.innerHTML=r,c.innerHTML="Saat";break;case"minute":y=i/60*100,o.innerHTML=i,c.innerHTML="Dakika";break;case"second":y=d/60*100,o.innerHTML=d,c.innerHTML="Saniye"}const[L,f]=s,k=157;f.style.transition=e?"stroke-dashoffset 0ms linear":"stroke-dashoffset 200ms linear",f.style.strokeDasharray=k,f.style.strokeDashoffset=k-k/100*y}if(c<0)return clearInterval(n),void console.log("coundown is expire")}n=setInterval(o,1e3),o(!0)}()},500:()=>{!function(){const e=document.getElementById("category-menu"),t=document.getElementById("blanket"),n=document.getElementById("category-menu-button"),[s]=e.getElementsByClassName("close-menu");if(!n)return;const a=()=>{e.className.match(/\bopen\b/)&&(e.classList.remove("open"),t.classList.remove("open"),e.classList.add("close"),t.classList.add("close"),setTimeout((()=>{e.classList.remove("close"),t.classList.remove("close")}),300))};n.addEventListener("click",(()=>{e.classList.add("open"),t.classList.add("open")})),s.addEventListener("click",(()=>{a()})),t.addEventListener("click",(()=>{a()}))}()},337:()=>{!function(){const e=document.getElementById("main-menu"),t=document.getElementById("blanket"),n=document.getElementById("main-menu-button"),[s]=e.getElementsByClassName("close-menu");if(!n)return;const a=()=>{e.className.match(/\bopen\b/)&&(e.classList.remove("open"),t.classList.remove("open"),e.classList.add("close"),t.classList.add("close"),setTimeout((()=>{e.classList.remove("close"),t.classList.remove("close")}),300))};n.addEventListener("click",(()=>{e.classList.add("open"),t.classList.add("open")})),s.addEventListener("click",(()=>{a()})),t.addEventListener("click",(()=>{a()}))}()}},t={};function n(s){var a=t[s];if(void 0!==a)return a.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,n),o.exports}(()=>{"use strict";n(337),n(500),n(203),n(34)})()})();
