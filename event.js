const School = require("./school");

const school = new School();

school.on("belling", ({ period, status, end }) => {
  console.log(`we need to run ${period} ${status} ${end}`);
});
school.startPeriod();
