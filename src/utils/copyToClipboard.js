const copy = require('clipboard-copy');

function copyToClipboard() {
  copy(window.location.href);
  const textField = document.createElement('p');
  textField.innerText = 'Link copied!';
  textField.id = 'copied';
  const buttons = document.getElementById('share-favorite');
  buttons.appendChild(textField);
  setTimeout(() => {
    textField.parentNode.removeChild(textField);
  }, 2000);
}

export default copyToClipboard;
