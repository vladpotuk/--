const { getDate } = require("./getDate");
const { getTime } = require("./getTime");

const date = getDate();
const time = getTime();

console.log(`Поточна дата та час: ${date} ${time}`);
