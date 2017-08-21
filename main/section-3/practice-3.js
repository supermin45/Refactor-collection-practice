'use strict';
module.exports = function createUpdatedCollection(collectionA, objectB) {
    let result = countSameElements(collectionA);
    let arr = objectB.value;

    for (let item of result) {
        if (arr.includes(item.key) && item.count >= 3) {
            item.count -= Math.floor(item.count / 3);
        }
    }

    return result;
}

function countSameElements(collectionA) {
    let countArr = [];

    collectionA.forEach(a => {
        let obj = {key: '', count: 0};
        obj.key = a;
        obj.count = collectionA.filter(b => a === b).length;
        if (!countArr.some(e => e.key === obj.key)) {
            countArr.push(obj);
        }
    });

    return countArr;
}
