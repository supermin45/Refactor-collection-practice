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
            obj.summary = 1;
        }

        if (!result.some(e => e.name === obj.name)) {
            result.push(obj);
        } else {
            let repeat = result.find(e => e.name === obj.name);
            repeat.summary += obj.summary;
        }
    });

    return result;
}
