const removeFromArray = function(arr, ...arg) {
    const counterArr = [...arg];
    const result = []
    console.log(counterArr);
    for (const toRemove of arr) {
        if (!counterArr.includes(toRemove)) {
            result.push(toRemove);
        }
    }
    arr.length = 0;
    console.log(result)
    arr.push(...result);
    return arr;
};
// Do not edit below this line
module.exports = removeFromArray;

