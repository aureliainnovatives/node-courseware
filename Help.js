const EventEmitter = require("events");
const emmitter = new EventEmitter();

function gethelp(msgkey) {
  console.log(`Help for the key is : ${msgkey}`);
  emmitter.emit("help", { help: "Test Help" });
}

module.exports.showhelp = gethelp;
