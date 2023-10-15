const people = require("./people");
const _ = require("lodash");
const os = require("os");
const path = require("path");
const fs = require("fs");
// console.log(people.a);
// console.log(people.test());
// console.log(people.people);
const lastElement = _.last(people.people);
// console.log(lastElement);
// fs.writeFileSync('hello.txt', 'hello world')
// const data = fs.readFileSync('hello.txt')
fs.readFile("hello.txt", (err, data) => {
  console.log(data.toString());
});
console.log('hello falaq')
// console.log(data.toString());
const myPath = "C:projects-jsall-about-react/node-basicindex.js";

// console.log(path.parse(myPath));
// console.log(os.cpus());
