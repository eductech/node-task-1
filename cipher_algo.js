const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const alphabetArr = alphabet.split('');

const caesarCipher = (str, shift) => {
  const shiftNumber = Number(shift);
  const offset = shiftNumber < 0 ? shiftNumber + alphabet.length : shiftNumber;

  let res = '';

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const idx = alphabetArr.indexOf(char.toLowerCase());

    if (idx === -1) {
      res += char;
      // eslint-disable-next-line no-continue
      continue;
    }

    const encodedIdx = (idx + offset) % alphabet.length;
    const encodedChar = alphabetArr[encodedIdx];
    res += char === char.toLowerCase() ? encodedChar : encodedChar.toUpperCase();
  }

  return res;
};

module.exports = {
  caesarCipher,
};
