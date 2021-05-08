/* eslint-disable */
const { Transform } = require('stream');

const { ACTION, SHIFT } = require('./params');
const { caesarCipher } = require('./cipher_algo');

class CaesarTransform extends Transform {
  _transform(chunk, encoding, callback) {
    try {
      const string = chunk.toString();

      const shift = ACTION === 'encode' ? SHIFT : SHIFT * -1;
      const transformedString = caesarCipher(string, shift);

      callback(null, transformedString);
    } catch (err) {
      callback(err);
    }
  }
}

const transformStream = new CaesarTransform();

module.exports = {
  transformStream,
};