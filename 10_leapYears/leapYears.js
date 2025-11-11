/*
*先判断能否被4整除
*所有被4整除的都是leapyear，除非能被400整除，所有被100整除的都不是leapyear
*/ 
const leapYears = function(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            return (year % 400 === 0) ? true : false;
        }
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
