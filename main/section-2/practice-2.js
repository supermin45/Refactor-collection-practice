'use strict';

module.exports = function countSameElements(collection) {
    let result = [];

    collection.forEach(a => {
        let obj = {};

        if (a.split('').includes("-")) {
            obj.key = a.split('')[0];
            obj.count = parseInt(a.split('')[2]);
        } else {
            obj.key = a;
            obj.count = collection.filter(b => a === b).length;
        }
        if (!result.some(e => e.key === obj.key)) {
            result.push(obj);
        }
    });

    return result;
}
