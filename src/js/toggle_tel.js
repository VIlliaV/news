const currentPageUrl = window.location.pathname;
const menuItemLink = document.querySelector(
  `.menu_list-tel li a[href="${currentPageUrl}"]`
);
const menuItem = menuItemLink ? menuItemLink.parentNode : null;
var body = document.getElementsByTagName('body')[0];

if (menuItem) {
  menuItem.style.backgroundColor = '#4440f6';
}
