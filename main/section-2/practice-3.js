'use strict';

module.exports = function countSameElements(collection) {
    let result = [];
    collection.forEach(a => {
        let obj = {};
        let arr = a.split('');
        if (arr.includes('-') || arr.includes(':') || arr.includes('[')) {
            obj.name = arr[0];
            if (arr.length === 5) {
                obj.summary = parseInt(arr[2] + arr[3]);
            } else {
                obj.summary = parseInt(arr[2]);
            }
        } else {
            obj.name = a;
            obj.summary = collection.filter(b => a === b).length;
        }

        if (!result.some(e => e.name === obj.name)) {
            result.push(obj);
        } else {
            result.summary += obj.summary;
        }
    });

    return result;
}
