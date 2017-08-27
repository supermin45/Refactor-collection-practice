'use strict';
module.exports = function countSameElements(collection) {
    let result = [];

    collection.forEach(a => {
        let obj = {key: a, count: collection.filter(b => a === b).length};

        if (!result.some(e => e.key === obj.key)) {
            result.push(obj);
        }
    });

    return result;
}
