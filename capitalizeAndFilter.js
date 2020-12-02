


const allCapsNoF = (arr) => {

    arr = arr.filter(item => item.indexOf('f') !== 0);
    arr1 = arr.map(arr1 => arr1.toUpperCase())

    return arr1
};
const nameArr = ['spot', 'rover', 'bingo', 'fred']


module.exports = {

    nameArr,
    allCapsNoF,


}