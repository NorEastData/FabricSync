const core = require("@actions/core");
const axios = require('axios');
const delay = require('./delay');

try {
    const tenant_id = core.getInput('tenant_id');
    const token = core.getInput('token');
    const client_id = core.getInput('client_id');
    const client_secret = core.getInput('client_secret');

    if(token == undefined) {
        console.log("test");
        await delay(5000);
        console.log("another");
    }

} catch (error) {
  core.setFailed(error.message);
}