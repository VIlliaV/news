!function(){var e=document.querySelector(".month__data"),t=document.querySelector(".day"),n=document.querySelector(".month__arrow--prev"),a=document.querySelector(".month__arrow--next"),c=document.querySelector(".calendar__input"),o=document.querySelector(".picker"),r=document.querySelector(".calendar__box"),i=document.querySelector(".calendar__down"),l=document.querySelector(".calendar__up"),u=new Date,d=u.getFullYear(),s=u.getMonth(),g=u.getDate(),_="";console.log(_);var m=["January","February","March","April","May","June","July","August","September","October","November","December"];function y(){for(var n=new Date(d,s,0).getDay(),a=new Date(d,s+1,0).getDate(),c=new Date(d,s,0).getDate(),o=new Date(d,s,a).getDay(),r="",i=n;i>0;i-=1)r+='<li class="day__item inactive--prev">'.concat(c-i+1,"</li>");for(var l=1;l<=a;l+=1)r+='<li class="day__item">'.concat(l,"</li>");for(var u=o;u<7;u+=1)r+='<li class="day__item inactive--next">'.concat(u-o+1,"</li>");e.innerText="".concat(m[s]," ").concat(d),t.innerHTML=r}function D(e,t,n){return c.attributes[2].textContent="".concat(n.toString().padStart(2,"0"),"/").concat((t+1).toString().padStart(2,"0"),"/").concat(e),_=c.attributes[2].textContent,console.log(_),_}r.addEventListener("click",(function(){o.classList.toggle("hidden"),i.classList.toggle("hidden"),l.classList.toggle("hidden")})),y(),n.addEventListener("click",(function(){(s-=1)<0||s>11?(u=new Date(d,s,(new Date).getDate()),d=u.getFullYear(),s=u.getMonth()):u=new Date,y()})),a.addEventListener("click",(function(){(s+=1)<0||s>11?(u=new Date(d,s,(new Date).getDate()),d=u.getFullYear(),console.log(d),s=u.getMonth()):u=new Date,y()})),t.addEventListener("click",(function(e){if("LI"===e.target.nodeName)return e.target.classList.contains("inactive--prev")?(g=+e.target.textContent,D(d,s-1,g)):e.target.classList.contains("inactive--next")?(g=+e.target.textContent,D(d,s+1,g)):(console.log(e.target),g=+e.target.textContent,D(d,s,g))})),console.log(_)}();
//# sourceMappingURL=index.5865abfa.js.map