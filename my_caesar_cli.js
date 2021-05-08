const { runPipeline } = require('./pipline');
const { validateParams } = require('./validate_params');

validateParams();
runPipeline();
