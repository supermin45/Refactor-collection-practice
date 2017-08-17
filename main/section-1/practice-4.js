'use strict';


module.exports = function collectSameElements(collectionA, objectB) {
    let arr = collectionA.map(e => e.key).concat(objectB.value);
    let newArr = arr.reduce((a, b) => {
        return a.concat(b);
    },[]);

    return newArr.filter((e, index) => {
        return newArr.lastIndexOf(e) !== index;
    });
}
