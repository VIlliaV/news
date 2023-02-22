function isMedia(item) {
  if (item.media) {
    // console.log(item.media);
    return item.media.map(el => el['media-metadata'][2].url);
  } else if (item.multimedia) {
    return item.multimedia[2].url;
  }

  return '/image-not-found.584be82b.jpg';
}

function onCategoryButtonClick(event) {
  const targetButtonInnerText = event.target.innerText.toLowerCase();
  getNewsByCategory(targetButtonInnerText).then(data => {
    console.log(data);
    generateCardsMurkup(data);
    newsAll = data;
  });
  // const articles = getNewsByCategory(targetButtonInnerText);
}
