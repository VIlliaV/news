!function(){var e=document.querySelectorAll(".menu_item"),t=localStorage.getItem("activeLink");(document.querySelector(".logo").addEventListener("click",(function(){localStorage.setItem("activeLink","/index.html")})),t)&&document.querySelector('.menu_link[href="'.concat(t,'"]')).parentElement.classList.add("active");e.forEach((function(t){t.addEventListener("click",(function(t){e.forEach((function(e){e.classList.remove("active")})),this.classList.add("active");var o=this.querySelector("a").getAttribute("href");localStorage.setItem("activeLink",o)}))}));var o=localStorage.getItem("colorState")||"#fff",r=localStorage.getItem("toggleState")||"off",c=document.querySelector('.toggle input[type="checkbox"]'),n=document.getElementById("myElement"),l=document.getElementsByTagName("body")[0],a=document.getElementById("dark"),d=document.getElementById("light"),s=document.getElementById("dark_tab"),i=document.getElementById("light_tab"),u=document.querySelectorAll(".menu_link"),m=(document.querySelectorAll(".menu_item"),document.getElementsByTagName("header")[0]),y=document.getElementsByTagName("input")[0],g=document.querySelector(".search-box");function f(){c.checked?(l.style.backgroundColor="#2E2E2E",l.style.color="#fff",n.style.color="#fff",o="#2E2E2E",d.style.color="#5F6775",a.style.color="#4B48DB",i.style.color="#5F6775",s.style.color="#4B48DB",i.style.stroke="#5F6775",s.style.border="#4B48DB",u.forEach((function(e){e.classList.add("color-switch")})),m.classList.add("dark-border"),y.classList.add("background-color-search"),g.classList.add("dark-border-search")):(l.style.backgroundColor="#fff",l.style.color="#000",n.style.color="#000",o="#fff",d.style.color="#4B48DB",a.style.color="#5F6775",i.style.color="#4B48DB",s.style.color="#5F6775",i.style.stroke="#4B48DB",s.style.border="#4B48DB",u.forEach((function(e){e.classList.remove("color-switch")})),m.classList.remove("dark-border"),m.classList.remove("white-border"),y.classList.remove("background-color-search"),g.classList.remove("dark-border-search")),localStorage.setItem("colorState",o),localStorage.setItem("toggleState",c.checked?"on":"off")}"#2E2E2E"===o?(c.checked=!0,f()):c.checked=!1,c.checked="on"===r,c.addEventListener("click",f);var h=window.location.pathname,S=document.querySelector('.menu_list-tel li a[href="'.concat(h,'"]')),E=S?S.parentNode:null;document.getElementsByTagName("body")[0];E&&(E.style.backgroundColor="#4440f6");var k=document.querySelector(".js-open-menu"),v=document.querySelector(".js-close-menu"),L=document.querySelector(".js-menu-container");document.querySelector(".list-news");k.addEventListener("click",(function(){L.classList.remove("hidden"),document.body.style.overflow="hidden"})),v.addEventListener("click",(function(){L.classList.add("hidden"),document.body.style.overflow="auto"}));var p=document.getElementById("newsList"),B=JSON.parse(localStorage.getItem("readMoreLocal"))||[];p.addEventListener("click",(function(e){var t=e.target.closest(".item-news__info-link");if(t){var o={uri:t.nextElementSibling.textContent,date:t.parentNode.firstElementChild.innerText,img:t.parentNode.parentNode.querySelector("img").src,title:t.parentNode.parentNode.querySelector("h3").innerText,description:t.parentNode.parentNode.querySelector("p").innerText,link:t.parentNode.children[1].href,category:t.parentNode.parentNode.querySelector(".category").innerText,dayRead:(new Date).toLocaleDateString("en-US")};B.some((function(e){return e.uri===o.uri}))||(B.push(o),localStorage.setItem("readMoreLocal",JSON.stringify(B)),t.parentNode.parentNode.parentNode.classList.add("opacity"))}}))}();
//# sourceMappingURL=read.db87dcb0.js.map