const compose = require('./utils/compose');

const startVal = 4;

const squared = x => x * x;
const doubled = x => x * 2;
const addTen = x => x + 10;
const halfNum = x => x / 2;

const trace = label => value => {
    console.log(`${label}: ${value}`)
    return value;
};


const result = compose(
    trace('after halfnum'),
    halfNum,
    trace('after addTen'),
    addTen,
    trace('after doubled'),
    doubled,
    trace('after squared'),
    squared
)(startVal)

console.log(result);
