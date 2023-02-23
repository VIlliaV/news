const colorState = localStorage.getItem('colorState') || '#fff';
const toggleState = localStorage.getItem('toggleState') || 'off';
const toggleSwitch = document.querySelector('.toggle input[type="checkbox"]');
const element = document.getElementById('myElement');
const body = document.getElementsByTagName('body')[0];
const element_light = document.getElementById('dark');
const element_dark = document.getElementById('light');
const element_light_tab = document.getElementById('dark_tab');
const element_dark_tab = document.getElementById('light_tab');
const menuLinks = document.querySelectorAll('.menu_link');
const menu_items = document.querySelectorAll('.menu_item');
const header = document.getElementsByTagName('header')[0];
const search_box = document.getElementsByTagName('input')[0];
const input = document.querySelector('.search-box');

const mobMenu = document.querySelector('.mob-menu');
const mobLinkText = document.querySelectorAll('.mob-link-text');
const mobLogo = document.querySelector('.mob-logo');
const xBtn = document.querySelector('.mob-menu__x');
const burgerBtn = document.querySelector('.burger-icon');

function toggleColor() {
  if (toggleSwitch.checked) {
    mobMenu.style.backgroundColor = '#2E2E2E';
    mobLinkText.forEach(text => {
      text.style.color = '#f4f4f4';
    });
    mobLogo.style.color = '#f4f4f4';
    burgerBtn.style.fill = '#fff';
    xBtn.style.fill = '#fff';
    body.style.backgroundColor = '#2E2E2E';
    body.style.color = '#fff';
    element.style.color = '#fff';
    // colorState = '#2E2E2E';
    element_dark.style.color = '#5F6775';
    element_light.style.color = '#4B48DB';
    element_dark_tab.style.color = '#5F6775';
    element_light_tab.style.color = '#4B48DB';
    element_dark_tab.style.stroke = '#5F6775';
    element_light_tab.style.border = '#4B48DB';

    menuLinks.forEach(function (link) {
      link.classList.add('color-switch');
    });
    header.classList.add('dark-border');
    search_box.classList.add('background-color-search');
    input.classList.add('dark-border-search');
  } else {
    mobMenu.style.backgroundColor = '#fff';
    mobLinkText.forEach(text => {
      text.style.color = '#111321';
    });
    mobLogo.style.color = '#111321';
    burgerBtn.style.fill = '#111321';
    xBtn.style.fill = '#111321';
    body.style.backgroundColor = '#fff';
    body.style.color = '#000';
    element.style.color = '#000';
    // colorState = '#fff';
    element_dark.style.color = '#4B48DB';
    element_light.style.color = '#5F6775';
    element_dark_tab.style.color = '#4B48DB';
    element_light_tab.style.color = '#5F6775';
    element_dark_tab.style.stroke = '#4B48DB';
    element_light_tab.style.border = '#4B48DB';

    menuLinks.forEach(function (link) {
      link.classList.remove('color-switch');
    });
    header.classList.remove('dark-border');
    header.classList.remove('white-border');
    search_box.classList.remove('background-color-search');
    input.classList.remove('dark-border-search');
  }

  localStorage.setItem('colorState', colorState);
  localStorage.setItem('toggleState', toggleSwitch.checked ? 'on' : 'off');
}

if (colorState === '#2E2E2E') {
  toggleSwitch.checked = true;
  toggleColor();
} else {
  toggleSwitch.checked = false;
}

if (toggleState === 'on') {
  toggleSwitch.checked = true;
} else {
  toggleSwitch.checked = false;
}

toggleSwitch.addEventListener('click', toggleColor);
