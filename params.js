const paramsSource = process.argv.slice(2);
const argv = require('minimist')(paramsSource);

const optionsMap = {
  ACTION: ['a', 'action'],
  SHIFT: ['s', 'shift'],
  INPUT_FILE: ['i', 'input'],
  OUTPUT_FILE: ['o', 'output'],
};

const getParam = (keys) => {
  let arg = '';

  keys.forEach((key) => {
    if (argv[key]) arg = argv[key];
  });

  return arg;
};

const getNumberParam = (keys) => {
  const param = getParam(keys);

  if (typeof param === 'boolean' && param === true) {
    return paramsSource.find((prm) => Number.isInteger(Number(prm))) || param;
  }

  return param;
};

module.exports = {
  ACTION: getParam(optionsMap.ACTION),
  SHIFT: getNumberParam(optionsMap.SHIFT),
  INPUT_FILE: getParam(optionsMap.INPUT_FILE),
  OUTPUT_FILE: getParam(optionsMap.OUTPUT_FILE),
};
