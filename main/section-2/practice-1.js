'use strict';

module.exports = function countSameElements(collection) {
    let result = [];

    collection.forEach(a => {
        let obj = {key: '', count: 0};
        obj.key = a;
        obj.count = collection.filter(b => a === b).length;
        if (!result.some(e => e.key === obj.key)) {
            result.push(obj);
        }
    });

    return result;
}
