const DevEnvironment = require('./env.dev');
const LiveEnvironment = require('./env.live');



 function getEnvironmentVariables() {
    if(process.env.NODE_ENV === 'production') {
        return LiveEnvironment;
    }
    return DevEnvironment;
}
module.exports = getEnvironmentVariables;