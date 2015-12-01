"use strict";

var events = require('events');
var eventEmitter = new events.EventEmitter();

let handler = (value) => {
	console.log('Fired ' + value + '!');	
};

 eventEmitter.on('hello', handler);
 
 eventEmitter.emit('hello', 'Some object');
