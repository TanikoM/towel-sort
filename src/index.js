// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined || matrix.length === 0) {
        return [];
    }
    let newArray = matrix.map((item, idx) => (idx + 1) % 2 === 0 ? item.reverse() : item);
    return [].concat(...newArray);
}
