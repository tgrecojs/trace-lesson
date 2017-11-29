const compose = require('./utils/compose');

const squared = x => x ** x;
const doubled = x => x * 2;
const addTen = x => x + 10;
const halfNum = x => x;

const result = compose(
    halfNum,
    addTen,
    doubled,
    squared
)(4)

console.log(result);
