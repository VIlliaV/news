!function(){var e=localStorage.getItem("colorState")||"#fff",t=localStorage.getItem("toggleState")||"off",o=document.querySelector('.toggle input[type="checkbox"]'),r=document.getElementById("myElement"),c=document.getElementsByTagName("body")[0],l=document.getElementById("dark"),n=document.getElementById("light"),a=document.getElementById("dark_tab"),d=document.getElementById("light_tab"),s=document.querySelectorAll(".menu_link"),i=(document.querySelectorAll(".menu_item"),document.getElementsByTagName("header")[0]),u=document.getElementsByTagName("input")[0],m=document.querySelector(".search-box");function y(){o.checked?(c.style.backgroundColor="#2E2E2E",c.style.color="#fff",r.style.color="#fff",e="#2E2E2E",n.style.color="#5F6775",l.style.color="#4B48DB",d.style.color="#5F6775",a.style.color="#4B48DB",d.style.stroke="#5F6775",a.style.border="#4B48DB",s.forEach((function(e){e.classList.add("color-switch")})),i.classList.add("dark-border"),u.classList.add("background-color-search"),m.classList.add("dark-border-search")):(c.style.backgroundColor="#fff",c.style.color="#000",r.style.color="#000",e="#fff",n.style.color="#4B48DB",l.style.color="#5F6775",d.style.color="#4B48DB",a.style.color="#5F6775",d.style.stroke="#4B48DB",a.style.border="#4B48DB",s.forEach((function(e){e.classList.remove("color-switch")})),i.classList.remove("dark-border"),i.classList.remove("white-border"),u.classList.remove("background-color-search"),m.classList.remove("dark-border-search")),localStorage.setItem("colorState",e),localStorage.setItem("toggleState",o.checked?"on":"off")}"#2E2E2E"===e?(o.checked=!0,y()):o.checked=!1,o.checked="on"===t,o.addEventListener("click",y);var g=document.querySelectorAll(".menu_item"),f=localStorage.getItem("activeLink"),h=document.querySelector(".logo");(console.log(f),h.addEventListener("click",(function(){localStorage.setItem("activeLink","/index.html")})),f)&&document.querySelector('.menu_link[href="'.concat(f,'"]')).parentElement.classList.add("active");g.forEach((function(e){e.addEventListener("click",(function(t){console.log(e),g.forEach((function(e){e.classList.remove("active")})),this.classList.add("active");var o=this.querySelector("a").getAttribute("href");localStorage.setItem("activeLink",o)}))}));var S=document.querySelector(".js-open-menu"),E=document.querySelector(".js-close-menu"),k=document.querySelector(".js-menu-container");document.querySelector(".list-news");S.addEventListener("click",(function(){k.classList.remove("hidden"),document.body.style.overflow="hidden"})),E.addEventListener("click",(function(){k.classList.add("hidden"),document.body.style.overflow="auto"}));var v=window.location.pathname,L=document.querySelector('.menu_list-tel li a[href="'.concat(v,'"]')),p=L?L.parentNode:null;document.getElementsByTagName("body")[0];p&&(p.style.backgroundColor="#4440f6");var B=document.getElementById("newsList"),b=JSON.parse(localStorage.getItem("readMoreLocal"))||[];B.addEventListener("click",(function(e){var t=e.target.closest(".item-news__info-link");if(t){var o={uri:t.nextElementSibling.textContent,date:t.parentNode.firstElementChild.innerText,img:t.parentNode.parentNode.querySelector("img").src,title:t.parentNode.parentNode.querySelector("h3").innerText,description:t.parentNode.parentNode.querySelector("p").innerText,link:t.parentNode.children[1].href,category:t.parentNode.parentNode.querySelector(".category").innerText,dayRead:(new Date).toLocaleDateString("en-US")};b.some((function(e){return e.uri===o.uri}))||(b.push(o),localStorage.setItem("readMoreLocal",JSON.stringify(b)),t.parentNode.parentNode.parentNode.classList.add("opacity"))}}))}();
//# sourceMappingURL=read.98422a89.js.map
