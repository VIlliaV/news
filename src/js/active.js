const liElements = document.querySelectorAll('li');

liElements.forEach(function(li) {
  li.addEventListener('click', function() {
    // remove the active class from all other li elements
    liElements.forEach(function(li) {
      li.classList.remove('active');
    });

    // add the active class to the clicked li element
    this.classList.add('active');
  });
});