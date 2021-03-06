import { variance } from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    const reducer = (prevValue, currValue) => prevValue + currValue;
    let sum = array.reduce(reducer)
    return sum
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {

    const middle = Math.floor(array.length / 2);
    let ordered = [...array].sort((a, b) => a - b);
    return array.length % 2 !== 0 ? ordered[middle] : (ordered[middle - 1] + ordered[middle]) / 2;
}
// console.log(getMedian([3,2,5,6,2,7,4,2,7,5]))
/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    let arr = array.map((val) => {
        return (val - (getSum(array) / array.length)) ** 2
    });
    let obj2 = {
        length: array.length,
        sum: getSum(array),
        mean: getSum(array) / array.length,
        median: getMedian(array),
        min: Math.min(...array),
        max: Math.max(...array),
        variance: variance(array, getSum(array)/array.length),
        standard_devation: undefined
    };
    obj2.standard_devation = Math.sqrt(obj2.variance)
    return obj2
}
// console.log(getStatistics([3,2,4,5,5,5,2,6,7]))

