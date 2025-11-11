/**
 * 
 * @param {Array<object>} bookArr 
 * @returns {Array<string>}
 * map遍历参数数组返回一个只有书名的数组
 */
const getTheTitles = function(bookArr) {
    return bookArr.map(book => {
        return book.title;
    })
};

// Do not edit below this line
module.exports = getTheTitles;
