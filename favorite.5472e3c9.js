var e=localStorage.getItem("colorState")||"#fff",t=localStorage.getItem("toggleState")||"off",o=document.querySelector('.toggle input[type="checkbox"]'),c=document.getElementById("myElement"),l=document.getElementsByTagName("body")[0],r=document.getElementById("dark"),n=document.getElementById("light"),s=document.getElementById("dark_tab"),a=document.getElementById("light_tab"),d=document.querySelectorAll(".menu_link"),m=(document.querySelectorAll(".menu_item"),document.getElementsByTagName("header")[0]),u=document.getElementsByTagName("input")[0],i=document.querySelector(".search-box");function y(){o.checked?(l.style.backgroundColor="#2E2E2E",l.style.color="#fff",c.style.color="#fff",e="#2E2E2E",n.style.color="#5F6775",r.style.color="#4B48DB",a.style.color="#5F6775",s.style.color="#4B48DB",a.style.stroke="#5F6775",s.style.border="#4B48DB",d.forEach((function(e){e.classList.add("color-switch")})),m.classList.add("dark-border"),u.classList.add("background-color-search"),i.classList.add("dark-border-search")):(l.style.backgroundColor="#fff",l.style.color="#000",c.style.color="#000",e="#fff",n.style.color="#4B48DB",r.style.color="#5F6775",a.style.color="#4B48DB",s.style.color="#5F6775",a.style.stroke="#4B48DB",s.style.border="#4B48DB",d.forEach((function(e){e.classList.remove("color-switch")})),m.classList.remove("dark-border"),m.classList.remove("white-border"),u.classList.remove("background-color-search"),i.classList.remove("dark-border-search")),localStorage.setItem("colorState",e),localStorage.setItem("toggleState",o.checked?"on":"off")}"#2E2E2E"===e?(o.checked=!0,y()):o.checked=!1,o.checked="on"===t,o.addEventListener("click",y);const g=document.querySelectorAll(".menu_item"),f=localStorage.getItem("activeLink");if(document.querySelector(".logo").addEventListener("click",(()=>{localStorage.setItem("activeLink","/index.html")})),f){document.querySelector(`.menu_link[href="${f}"]`).parentElement.classList.add("active")}g.forEach((function(e){e.addEventListener("click",(function(e){g.forEach((function(e){e.classList.remove("active")})),this.classList.add("active");const t=this.querySelector("a").getAttribute("href");localStorage.setItem("activeLink",t)}))}));const h=document.querySelector(".js-open-menu"),k=document.querySelector(".js-close-menu"),E=document.querySelector(".js-menu-container");document.querySelector(".list-news");h.addEventListener("click",(()=>{E.classList.remove("hidden"),document.body.style.overflow="hidden"})),k.addEventListener("click",(()=>{E.classList.add("hidden"),document.body.style.overflow="auto"}));const S=window.location.pathname,b=document.querySelector(`.menu_list-tel li a[href="${S}"]`),B=b?b.parentNode:null;document.getElementsByTagName("body")[0];B&&(B.style.backgroundColor="#4440f6");document.querySelector("#mobile-menu"),document.querySelector("#toggle-button");
//# sourceMappingURL=favorite.5472e3c9.js.map
