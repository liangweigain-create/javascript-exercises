/**
 * @param {Array<object>}
 * @returns {Object}
 * 首先计算出数组中每一位人的死亡日期-出生日期=年龄
 * 函数直接返回年龄最大的那个人的object
 * 如果人员对象中没有给出死亡日期，获取当前日期
 */
const findTheOldest = function(arr) {
    const now = new Date();
    return arr.reduce((oldest, currentPer) => {
        const oldestAge = oldest.yearOfDeath ?
            oldest.yearOfDeath - oldest.yearOfBirth :
            now.getFullYear() - oldest.yearOfBirth;
        const currentPerAge = currentPer.yearOfDeath ?
            currentPer.yearOfDeath - currentPer.yearOfBirth :
            now.getFullYear() - currentPer.yearOfBirth;
        return oldestAge > currentPerAge ? oldest : currentPer;
    }, arr[0]);
};

// Do not edit below this line
module.exports = findTheOldest;