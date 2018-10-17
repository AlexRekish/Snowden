'use strict';

const form = document.querySelector('.task__form');
form.addEventListener('submit', evt => {
  evt.preventDefault();
});

const textArea = document.querySelector('#initialText');
const answerArea = document.querySelector('.task__decrypted-data');

const decryptButton = document.querySelector('.task__decrypt-button');
decryptButton.addEventListener('click', evt => {
  evt.preventDefault();
  const decryptedText = snowdenDecrypt(textArea.value);
  answerArea.innerText = decryptedText ? decryptedText : '';
});

const checkMessageValidity = message => {
  const maxLength = 100000;

  if (message.length > maxLength) {
    alert('Message length should be at most 100000 characters!');
    return false;
  }
  if (!/^[a-z]+$/g.test(message)) {
    alert('Message should consist of lowercase English letters!');
    return false;
  }

  return true;
};

const snowdenDecrypt = message => {
  if (!checkMessageValidity(message)) return;

  const decodedText = message.replace(/([a-z])\1/g, '');
  const textArray = decodedText.split('');

  for (let i = 0; i < textArray.length; i++) {
    if (textArray[i] === textArray[i + 1]) {
      textArray.splice(i, 2);
      i--;
    } else if (textArray[i] === textArray[i - 1]) {
      textArray.splice(i - 1, 2);
      i -= 2;
    }
  }
  return textArray.join('');
};
