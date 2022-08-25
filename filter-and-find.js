// Filter only take that values are true...
// for arrow function if we use second bracket than we need to give return value...
//! without second bracket in arrow function we don't need return value...


// Filter.... take the all true value...
const arr = [122, 232, 43, 54, 3, 54, 56, 4, 67];

const value = arr.filter(item => {
    return item < 10
});

console.log(value);


// Find Take the first True Value...
// if zero index value are true than zero index will be stop point..
const firstTrueValue = arr.find(item => item > 43);
console.log(firstTrueValue);