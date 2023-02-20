function checkDarkTheme() {
  const theme = localStorage.getItem('ui-theme');
  if (theme !== null) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

function changeTheme() {
  const theme = checkDarkTheme('ui-theme');
  console.log('1');
  if (theme) {
    localStorage.removeItem('ui-theme');
  } else {
    localStorage.setItem('ui-theme', 'dark');
  }
}

export { checkDarkTheme, changeTheme };
