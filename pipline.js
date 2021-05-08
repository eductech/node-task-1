const fs = require('fs');
const { pipeline } = require('stream');

const { INPUT_FILE, OUTPUT_FILE } = require('./params');
const { transformStream } = require('./transform.js');

function runPipeline() {
  const inputStream = INPUT_FILE ? fs.createReadStream(INPUT_FILE) : process.stdin;
  const destinationStream = OUTPUT_FILE ? fs.createWriteStream(OUTPUT_FILE, { flags: 'a' }) : process.stdout;

  pipeline(
    inputStream,
    transformStream,
    destinationStream,
    // eslint-disable-next-line no-console
    (err) => { if (err) console.error(err); },
  );
}

module.exports = {
  runPipeline,
};
