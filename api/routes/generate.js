const express = require('express');
const router = express.Router();
const fs = require('fs');

const maxTotalLength = 262144;
function generateRandomStrings(minLength, maxLength, chars) {
  let totalLength = 0;
  let array = new Array();

  while(totalLength < maxTotalLength) {
    const length = Math.floor(
        Math.random() * (maxLength - minLength + 1) + minLength
    );

    let text = Array.apply(null, Array(length)).map(function() { return chars.charAt(Math.floor(Math.random() * chars.length)); }).join('');
    array.push(text);
    totalLength += length;
  };
  return array;
};
function randomIntegers(min, max, numberOfIntegers) {
  let array = new Array(numberOfIntegers);

  for (let i = 0; i < numberOfIntegers; i++) {
    array.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return array;
};

/* GET file of generated strings listing. */
router.get('/generate', function(req, res, next) {
  const alphanumericString = generateRandomStrings(4, 20, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789');
  const alphabeticalString = generateRandomStrings(4, 20, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
  const integers = randomIntegers(1, Number.MAX_SAFE_INTEGER, alphabeticalString.length); //2147483647

  const alpha = [...alphabeticalString, ...integers, ...alphanumericString];

  fs.writeFileSync('./resources/static/files/myfile.txt', alpha.toString());
  res.send({ file: {
      name: 'myfile',
      url: '/files/myfile.txt'
    }});
});

module.exports = router;
