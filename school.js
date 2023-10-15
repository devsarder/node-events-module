const EventsEmitter = require("events");
const { set } = require("lodash");

class School extends EventsEmitter {
  startPeriod() {
    console.log("school started");

    setTimeout(() => {
      this.emit("belling", {
        period: "first",
        status: "ended",
        end: "we need to run",
      });
    }, 2000);
  }
}
module.exports = School;