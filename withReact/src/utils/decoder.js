const snowdenDecrypt = message => {
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

export default snowdenDecrypt;
