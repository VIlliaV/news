var e=localStorage.getItem("colorState")||"#FFF",t=localStorage.getItem("toggleState")||"off",o=document.querySelector('.toggle input[type="checkbox"]'),c=document.getElementById("myElement"),l=document.getElementsByTagName("body")[0],a=document.getElementById("dark"),r=document.getElementById("light"),n=document.querySelectorAll(".menu_link");function s(){o.checked?(l.style.backgroundColor="#2E2E2E",l.style.color="#FFF",c.style.color="#FFF",e="#2E2E2E",r.style.color="#5F6775",a.style.color="#4B48DB",n.forEach((function(e){e.classList.add("color-switch")}))):(l.style.backgroundColor="#FFF",l.style.color="black",c.style.color="black",e="#FFF",r.style.color="#4B48DB",a.style.color="#5F6775",n.forEach((function(e){e.classList.remove("color-switch")}))),localStorage.setItem("colorState",e),localStorage.setItem("toggleState",o.checked?"on":"off")}"#2E2E2E"===e?(o.checked=!0,s()):o.checked=!1,o.checked="on"===t,o.addEventListener("click",s);const i=document.querySelectorAll("li"),d=localStorage.getItem("activeLink");if(d){document.querySelector(`a[href="${d}"]`).parentElement.classList.add("active")}i.forEach((function(e){e.addEventListener("click",(function(e){i.forEach((function(e){e.classList.remove("active")})),this.classList.add("active");const t=this.querySelector("a").getAttribute("href");localStorage.setItem("activeLink",t)}))}));
//# sourceMappingURL=favorite.15044b49.js.map
