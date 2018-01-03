var config = {}

// Change this to the physical pin number to which you connected 
// the LED
config.led = -1;

// Enter the path to your express server. For example if running
// locally on your network it might be something like
// http://10.0.0.227:3000 where 10.0.0.227 is the IP address of 
// the machine running the server code.
config.server_url = "";

if(config.led == -1 || config.server_url == ""){
  console.log("Before running app.js you must configure the LED pin number and server url in ./config.js");
  process.exit(-1);
}

module.exports = config;