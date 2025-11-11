/**
 * 先判断参数是否为数字，如果不是且不能转换为数字，则返回error
 * 如是数字或能够转换为数字的字符串，则将变量赋值为参数
 * 再判断参数是否为负数，如果是负数，按要求返回OOPS
 * 第0位是0第1、2位都是1，后续的数字等于前两位的和
 * 先固定前012位的数字，后续数字根据提供的参数循环生成
 */
const fibonacci = function(num) {
    let arg;
    if (typeof parseInt(num) !== 'number') {
        return 'ERROR'
    }
    if (typeof num !== 'number') {
        arg = parseInt(num);
    }else {
        arg = num;
    }
    if (num < 0) {
        return 'OOPS'
    }
    if (arg === 0) {
        return 0;
    }
    let firstPrev = 1;
    let secondPrev = 0;
    for (let i = 2; i <= num; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }
    return firstPrev
}

// Do not edit below this line
module.exports = fibonacci;
