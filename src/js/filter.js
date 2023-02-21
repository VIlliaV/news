console.log('helllo');
const apiKey = 'iQPZlbRhGEGKM4smMiUCFTOlyGy9K2EX';

async function getCategoriesList(apiKey) {
  // Set API endpoint
  const apiUrl =
    'https://api.nytimes.com/svc/news/v3/content/section-list.json';

  // Build API request URL with endpoint and API key
  const requestUrl = `${apiUrl}?api-key=${apiKey}`;

  try {
    // Make API request using fetch
    const response = await fetch(requestUrl);
    const data = await response.json();

    // Process and return API response data
    const sections = data.results;
    return sections.map(section => section.display_name);
  } catch (error) {
    console.error(error);
    return [];
  }
}

console.log(getCategoriesList(apiKey));

const categoryBtnsWrapper = document.querySelector('.categoryBtns-wrapper');

// Call the getCategoriesList function to get the list of sections
getCategoriesList(apiKey).then(sections => {
  // Shuffle the sections array to get 6 random sections
  const randomSections = sections.sort(() => Math.random() - 0.5).slice(0, 6);

  // Create a button element for each section and append it to the categoryBtns-wrapper container
  randomSections.forEach(section => {
    const button = document.createElement('button');
    button.classList.add('filter-category__item-bt');
    button.textContent = section;
    categoryBtnsWrapper.appendChild(button);
  });
});
// Get a reference to the myDropdown container and Others button
const myDropdown = document.querySelector('#myDropdown');
const othersButton = document.querySelector('#othersButton');

// Call the getCategoriesList function to get the list of sections
getCategoriesList(apiKey).then(sections => {
  // Shuffle the sections array to get 13 random sections
  const randomSections = sections.sort(() => Math.random() - 0.5).slice(0, 13);

  // Create a ul element for the section list
  const list = document.createElement('ul');
  list.classList.add('sections-list');

  // Create an li element for each section and append it to the ul element
  randomSections.forEach(section => {
    const listItem = document.createElement('li');
    listItem.textContent = section;
    listItem.classList.add('sections-listItem');
    list.appendChild(listItem);
  });

  // Append the ul element to the myDropdown container
  myDropdown.appendChild(list);
});

// Add a click event listener to the Others button
othersButton.addEventListener('click', () => {
  // Toggle the display of the myDropdown container
  myDropdown.classList.toggle('hidden');
  othersButton.classList.toggle('is-open');
});

const otherBtnWrapper = document.querySelector('.otherBtn-wrapper');
const othersButtonSpan = document.querySelector('#othersButton span');

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
