const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const crypto = require('crypto');
const fs = require('fs');

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const maxTotalLength = 262144;
function randomStrings(minLength, maxLength, chars) {
  if (!chars) {
    throw new Error('Argument \'chars\' is undefined');
  }

  var charsLength = chars.length;
  if (charsLength > 256) {
    throw new Error('Argument \'chars\' should not have more than 256 characters'
        + ', otherwise unpredictability will be broken');
  }

  let totalLength = 0;
  let array = new Array();

  while(totalLength < maxTotalLength) {
    const length = Math.floor(
        Math.random() * (maxLength - minLength + 1) + minLength
    );

    let randomBytes = crypto.randomBytes(length);
    let result = new Array(length);

    let cursor = 0;
    for (var i = 0; i < length; i++) {
      cursor += randomBytes[i];
      result[i] = chars[cursor % charsLength];
    }
    let text = result.join('');
    array.push(text);
    totalLength += length;
  };

  return array;
}
function randomIntegers(min, max, numberOfIntegers) {
  let array = new Array(numberOfIntegers);
  const n = crypto.randomInt(min, max);
  for(let i = 0; i < numberOfIntegers; i++) {
    array.push(n);
  }
  return array;
};

app.get('/generate', function(req, res, next) {
  const alphanumericString = randomStrings(4, 20, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789');
  const alphabeticalString = randomStrings(4, 20, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
  const integers = randomIntegers(1, 2147483647, alphabeticalString.length);

  const alpha = [...alphanumericString, ...alphabeticalString, ...integers];

  fs.writeFileSync('myfile.txt', alpha.toString());
  res.send({ file: {
    name: 'myfile',
      url: 'http://localhost:3000/myfile.txt'
    }});
});

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
