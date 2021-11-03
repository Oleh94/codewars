function invert(array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++){
        newArr.push(array[i] * (-1));
    }
    return newArr;
}

const invert = array => array.map(num => -num);