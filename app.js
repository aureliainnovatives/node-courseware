/*
NODE JS COURSEWARE CONTENT AND REF. FOR MAYUR
------------------------------------------------
Theory -->
- Node is a Run Time Environement to run JS, it's not a Language, it's not a framework, it's just an Environement
- Ryan Dahl made Node in 2009
- Microsoft Chakra, Mozilla's Spider Monkey, Chrome's V8
- Node details about how V8 Engine wrapped in C++ program and becomes Node Engine as V8 is only applied to Browser. 
V8 transfer JS to native machine code
- PHP, DJango, Java, ROR are multi Process system which means can create a new process for each request. A famous example of Waiter and Table.
- Node has one process at a time and it does not block to entertain another request meanwhile existing request is in process
    Blocking ==> Synchronous
    Non Blocking --> Async

- It handles an Event Queue
- Node does not have Windows, Document kind of Global Variables which are browser specific
- Global Variables are like OS, File, Console etc.

SECTION 1 -->
**************************
First Node App
- CLI 
    - function
    - variables
    - node -e 5+4
    - node -p 5+4
    - node -i
- app.js
    - print basic operation with function, parameterized function
    - global object as replacement for windows object
    - global.localvaribale will be undefined as it's node is modulerized
- nodemon
- Module is defined in seperate file with private scope 
- module object print
- To make module available to other modules, it must be exported
- Import module by require in a variable. Try to print module object now
- const vs var while importing a module as var allow to override the import object
- Standard Modules
    - Path
        - path.parse(__filename)
        - __dirname
        - __filename
    - OS
        - 
        -    console.log(os.freemem());
        -    console.log(os.hostname());
        -    console.log(os.type());
        -    console.log(os.version());
    - File
        -  readdirSync
        -  readdir with err object

SECTION 2 -->
*************************
npm
    - what is NPM?
    - npm init
    - npm init --yes
    - npm install
    - npm remove
    - npm install moment --save-dev
    - npm install moment --save
    - Sementic  or SemVer
        - X.Y.Z      x-> Major Version, y -> Minor Version,   z -> Patch Version
        - ^ --> Anything after Major Version   2.x.x
        - ~ --> Anything latest after Minor Version 2.3.x  
    - npm list, npm list --depth=0
    - npm -g outdated
    - npm un -g <package name>
    - npm cache clean | npm cache clean --force | npm cache verify
    - package-lock.json
    - Create and Publish NPM Package, install it, update it --> npm login | npm deploy 
    - npm unpublish taxcalculator-v1 --force

GIT
    - GitHub
    - Add origin
    - git branch -M session1 
    - git branch
    - git rm -rf node_modules
    - add .gitignore

Event Emmitter and Subscriber
    - Simple Event Emmiter and Subscriber
    - Try to call from different module, it won't work
    - Solution
*/

const myhelper = require("./Help");
const path = require("path");
const os = require("os");
const fs = require("fs");
const event = require("events");
const { EventEmitter } = require("stream");
const EventHelper = require("./eventhelper");

var myname = "MAYUR PATIL";
//console.log("WELCOME TO NODE JS");
//console.log(global);
//console.log(global.myname); // THIS WILL BE UNDEFINED

const calculate = function () {
  console.log("IN CALCULATOR");
};

//console.log(module);

//calculate();
//getHelp();
console.log(myhelper.showhelp("HOME PAGE"));
console.log(path.parse(__filename));
console.log(path.parse(__dirname));

console.log(os.freemem());
console.log(os.hostname());
console.log(os.type());
console.log(os.version());

//console.log(fs.readdirSync(__dirname + "/../.."));
//fs.readdir(__dirname, function (err, list) {
fs.readdir(__dirname, function (err, list) {
  if (err) console.log(err);
  //  console.log(list);
});

//console.log("CUSTOM PACKAGE:");
//const math = require("taxcalculator-v1");
//console.log(math.calculate(100, 18, "INR"));

console.log("Emitting Event");
const emmitter = new EventEmitter();

emmitter.on("PUBLISH_MYNAME", function () {
  console.log("Name is Published");
});

emmitter.on("PUBLISH_MYNAME", (args) => {
  console.log("ARROR FUNCTION - " + args.name);
});

emmitter.on("help", (args) => {
  console.log("HELP ASKED");
});

emmitter.emit("PUBLISH_MYNAME", { name: "Mayur", last: "Patil" });

myhelper.showhelp("EVENT  PAGE");

console.log("GLOBAL EVENT Starting");
const eventobj = new EventHelper();
eventobj.on("HELPASKED", (args) => {
  console.log("SUBSCRIBED HELP->" + args.type);
});

eventobj.getHelp("DASHBOARD");
