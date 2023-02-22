const links = document.querySelectorAll('.menu_link_tel');

links.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active-tel');
    link.style.color = '#fff';
  }

  link.addEventListener('click', (event) => {
    event.preventDefault();
    links.forEach(link => {
      link.classList.remove('active-tel');
      link.style.color = '';
    });
    link.classList.add('active-tel');
    link.style.color = '#fff';

    window.location.href = link.href;
  });
});