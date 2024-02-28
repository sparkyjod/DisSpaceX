const MainClient = require("./disspace.js");
const client = new MainClient();
const keep_alive = require ('./keep_alive.js')
client.connect()

module.exports = client; 
