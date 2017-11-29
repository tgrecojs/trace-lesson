const compose = require('./utils/compose');

const squared = x => x * x;
const doubled = x => x * 2;
const addTen = x => x + 10;
const halfNum = x => x;

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
)(4)

console.log(result);
