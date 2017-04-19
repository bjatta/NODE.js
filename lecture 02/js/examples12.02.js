/**
 * Created by Bjatta on 19.04.2017. from 12.02
 */
((...arrays)=> {
    var firstArray = arrays[0];
    console.log('12.02 a',firstArray[firstArray.length-1][firstArray[0].length-1]);
    console.log('12.02 b',firstArray[0][0]);
    console.log('');
})(
    [
        [1.1,1.2,1.3,1.4,1.5],
        [2.1,2.2,2.3,2.4,2.5],
        [3.1,3.2,3.3,3.4,3.5],
        [4.1,4.2,4.3,4.4,4.5],
        [5.1,5.2,5.3,5.4,5.5]
    ]
);