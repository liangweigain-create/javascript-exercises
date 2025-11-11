const palindromes = function (str) {
    //将参数去除所有空格
    //只保留参数的字母和数字
    
    const newStr = str.trim().split(' ').join('');
    if (newStr === '') {return 'ERROR'}
    const center = Math.floor(newStr.length / 2);
    if (newStr.length % 2 === 0) {
        let left = center - 1;
        let right = center;
        while (left >= 0) {
            if(newStr[left] !== newStr[right]) {
                return false;
            }
            left--;
            right++;
        }
        return true;
    } //如为偶数
    //如为奇数
    if (newStr.length % 2 === 1) {
        let left = center;
        let right = center;
        while (left >= 0) {
            if(newStr[left] !== newStr[right]) {
                return false;
            }
            left--;
            right++;
        }
        return true;
    }
};

// Do not edit below this line
module.exports = palindromes;
