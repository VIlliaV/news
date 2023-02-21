import { getCategory } from './api';
import { getNewsByCategory } from './api';

const categoryBtnsWrapper = document.querySelector('.categoryBtns-wrapper');
const myDropdown = document.querySelector('#myDropdown');
const othersButton = document.querySelector('#othersButton');
const otherBtnWrapper = document.querySelector('.otherBtn-wrapper');
const othersButtonSpan = document.querySelector('#othersButton span');

getCategory()
  .then(sections => {
    return sections.map(section => section.display_name);
  })
  .then(sections => {
    // Shuffle the sections array to get 6 random sections
    const randomSections = sections.sort(() => Math.random() - 0.5).slice(0, 6);

    // Create a button element for each section and append it to the categoryBtns-wrapper container
    randomSections.forEach(section => {
      const button = document.createElement('button');
      button.classList.add('filter-category__item-bt');
      button.textContent = section;
      categoryBtnsWrapper.appendChild(button);
    });
    return sections;
  })
  .then(sections => {
    // Shuffle the sections array to get 13 random sections
    const randomSections = sections
      .sort(() => Math.random() - 0.5)
      .slice(0, 13);

    // Create an li element for each section and append it to the ul element
    const sectionsDropdownList = document.querySelector('.sections-list');

    randomSections.forEach(section => {
      const listItem = document.createElement('li');
      listItem.textContent = section;
      console.log('🚀 ~ section:', section);
      listItem.classList.add('sections-listItem');
      sectionsDropdownList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error(error);
    return [];
  });

// Add a click event listener to the Others button
othersButton.addEventListener('click', () => {
  // Toggle the display of the myDropdown container
  myDropdown.classList.toggle('hidden');
  othersButton.classList.toggle('is-open');
});

otherBtnWrapper.addEventListener('click', e => {
  if (e.target.tagName === 'LI') {
    othersButtonSpan.innerText = e.target.innerText;
    myDropdown.classList.toggle('hidden');
  }
});

window.addEventListener('resize', function () {
  if (window.innerWidth >= 480 && window.innerWidth < 768) {
    othersButtonSpan.innerText = 'Categories';
  } else othersButtonSpan.innerText = 'Others';
});

// Add a click event listener to the buttons and dropdown
const categoryBtns = document.querySelector('.categoryBtns-wrapper');
const dropdownList = document.querySelector('.sections-list');

categoryBtns.addEventListener('click', onCategoryButtonClick);
dropdownList.addEventListener('click', onCategoryButtonClick);

// On click fetch data from API by category

function onCategoryButtonClick(event) {
  const targetButtonInnerText = event.target.innerText.toLowerCase();
  console.log('🚀 ~ targetButtonInnerText:', targetButtonInnerText);

  const articles = getNewsByCategory(targetButtonInnerText);
  console.log(articles);
}
