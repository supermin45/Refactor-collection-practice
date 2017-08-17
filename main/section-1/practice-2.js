'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
   let arr = collectionA.concat(collectionB);
   let newArr = arr.reduce((a, b) => {
       return a.concat(b);
   },[]);
   return newArr.filter((e, index) => {
       return newArr.lastIndexOf(e) !== index;
   });
}
