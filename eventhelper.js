const EventEmmitter = require("events");
const emitter = new EventEmmitter();

class EventHelper extends EventEmmitter {
  getHelp(type) {
    console.log("Help is Requested for " + type);
    this.emit("HELPASKED", { type: type });
  }
}

module.exports = EventHelper;
