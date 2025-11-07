const sumAll = function(num_1, num_2) {
    if (
        typeof num_1 !== 'number' ||
        typeof num_2 !== 'number' ||
        !Number.isInteger(num_1) ||
        !Number.isInteger(num_2) ||
        num_1 <= 0 ||
        num_2 <= 0
    ) {
        return 'ERROR'
    }

    if (num_1 === num_2) {
        return num_1;
    }

    let smallerNum = Math.min(num_1, num_2)
    let biggerNum = Math.max(num_1, num_2)
    let sum = 0;
    while (smallerNum <= biggerNum) {
        sum += smallerNum;
        smallerNum++;
    }
    return sum;
}

// Do not edit below this line
module.exports = sumAll;
