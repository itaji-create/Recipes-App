const copy = require('clipboard-copy');

function copyToClipboard(pathname) {
  const textField = document.createElement('p');
  textField.innerText = 'Link copied!';
  textField.id = 'copied';
  const buttons = document.getElementById('share-favorite');
  if (!document.getElementById('copied')) {
    buttons.appendChild(textField);
  }
  copy(`https://recipes-99app.herokuapp.com${pathname}`);
}

export default copyToClipboard;
