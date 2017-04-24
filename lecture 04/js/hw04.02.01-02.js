/*
  Created by Bjatta on 24.04.2017.
  10.48.Написать  рекурсивную  функцию
 для  вычисления  максимального  элемента
 массива из n-элементов.
 10.49.Написать рекурсивную  функцию  для
 вычисления индекса  максимального элемента
 массива из n-элементов.
 */
;((a)=> {
"use strict";
function max (array) {
    if (!array.length) return array;
    switch (array.length) {
        case 1: return array[0];
        case 2: return Math.max(array[0],array[1]);
        default:return Math.max(array[0],max(array.slice(-array.length+1)));
    }
    }
console.log(max(a),a);

function maxIndex (array) {
    return array.indexOf(max(array));
}
console.log('['+maxIndex(a)+']',a);
}
)(ra());