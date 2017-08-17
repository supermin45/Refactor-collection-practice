'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    let arr = collectionA.concat(collectionB);
     return arr.filter((e, index) => {
         return arr.lastIndexOf(e) !== index;
     });
}
