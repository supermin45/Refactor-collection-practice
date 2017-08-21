'use strict';
module.exports = function createUpdatedCollection(collectionA, objectB) {
    let arr = objectB.value;

    for (let item of collectionA) {
        if (arr.includes(item.key)) {
            item.count -= 1;
        }
    }

    return collectionA;
}
