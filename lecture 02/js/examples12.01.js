/**
 * Created by Bjatta on 19.04.2017. from 12.01
 */
((...arrays)=> {
    console.log('from § 12');
    var firstArray = arrays[0];
    console.log('12.01 a',firstArray[0][firstArray[0].length-1]);
    console.log('12.01 b',firstArray[firstArray.length-1][0]);
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