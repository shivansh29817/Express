var events = require('events');
var eventEmitter=new events.eventEmitter;

var myEventHandler = function(){
    console.log("I Love to Play");
};

eventEmitter.on('play',myEventHandler);
eventEmitter.emit('play');