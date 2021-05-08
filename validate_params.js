/* eslint-disable no-bitwise */
/* eslint-disable no-console */
const fs = require('fs');

const { SHIFT, ACTION, INPUT_FILE, OUTPUT_FILE } = require('./params');

const actions = ['encode', 'decode'];

const validateParams = () => {
  if (!actions.includes(ACTION)) {
    console.error('-a / --action is missing or incorrect');
    process.exit(1);
  }

  if (!SHIFT) {
    console.error('-s / --shift is missing');
    process.exit(1);
  }

  if (INPUT_FILE) {
    try {
      fs.accessSync(INPUT_FILE, fs.constants.R_OK | fs.constants.F_OK);
    } catch (error) {
      console.error(`can't read from ${INPUT_FILE}`);
      process.exit(1);
    }
  }

  if (OUTPUT_FILE) {
    try {
      fs.accessSync(OUTPUT_FILE, fs.constants.W_OK | fs.constants.F_OK);
    } catch (error) {
      console.error(`can't write to ${OUTPUT_FILE}`);
      process.exit(1);
    }
  }
};

module.exports = {
  validateParams,
};
