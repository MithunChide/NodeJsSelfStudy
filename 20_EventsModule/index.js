// Events Module

// Node.js has a built-in module , called "Events",

// where yoou can create-,fire- and listen for- your own events. 

// example 1- Registering for the event to be fired only one time using once 

// example 2- create an event emmiter instance and register a couple of callbacks 
// example 3- registering for the event with callbacks parametre


const { ok } = require('assert');
const EventEmitter = require('events')

const event = new EventEmitter();

// event.on('SayMyName', ()=>{
//     console.log('your name is mithun');

// });
// event.on('SayMyName', ()=>{
//     console.log('your name is akash');

// });
// event.on('SayMyName', ()=>{
//     console.log('your name is ram');

// });
event.on("checkPage",(sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);
});


event.emit('checkPage',200,"ok")