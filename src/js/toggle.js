var colorState = localStorage.getItem("colorState") || "#fff";
var toggleState = localStorage.getItem("toggleState") || "off";
var toggleSwitch = document.querySelector('.toggle input[type="checkbox"]');
var element = document.getElementById("myElement");
var body = document.getElementsByTagName("body")[0];
var element_light = document.getElementById("dark");
var element_dark = document.getElementById("light");
var menuLinks = document.querySelectorAll('.menu_link');
var menu_items = document.querySelectorAll(".menu_item");
var header = document.getElementsByTagName("header")[0];

function toggleColor() {
  if (toggleSwitch.checked) {
    body.style.backgroundColor = "#2E2E2E";
    body.style.color = "#fff";
    element.style.color = "#fff";
    colorState = "#2E2E2E";
    element_dark.style.color = "#5F6775";
    element_light.style.color = "#4B48DB";
    menuLinks.forEach(function(link) {
      link.classList.add('color-switch');
    });
    // menu_items.forEach(function(item) {
    //   item.style.border = "1px solid rgba(244, 244, 244, 0.2)";
    // });
    header.classList.add("dark-border");
  } else {
    body.style.backgroundColor = "#fff";
    body.style.color = "#000";
    element.style.color = "#000";
    colorState = "#fff";
    element_dark.style.color = "#4B48DB";
    element_light.style.color = "#5F6775";
    menuLinks.forEach(function(link) {
      link.classList.remove('color-switch');
    });
    header.classList.remove("dark-border");
  }

  localStorage.setItem("colorState", colorState);
  localStorage.setItem("toggleState", toggleSwitch.checked ? "on" : "off");
}

if (colorState === "#2E2E2E") {
  toggleSwitch.checked = true;
  toggleColor();
} else {
  toggleSwitch.checked = false;
}

if (toggleState === "on") {
  toggleSwitch.checked = true;
} else {
  toggleSwitch.checked = false;
}

toggleSwitch.addEventListener("click", toggleColor);