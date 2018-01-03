var config = require("./config.js");
var socket = require("socket.io-client")(config.server_url);
var gpio = require("rpi-gpio");

process.on("SIGINT", function(){
  gpio.write(config.led, 1, function(){
    gpio.destroy(function(){
      process.exit();
    });
  });
});

gpio.setup(config.led, gpio.DIR_OUT, function(){
  gpio.write(config.led, 1); // turns led off
});

socket.on("connect", function(){
  console.log("Connected to server");
  socket.on("updateState", function(state){
    console.log("The new state is: " + state);
    gpio.write(config.led, !state);
  });
})