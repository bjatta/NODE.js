/**
 * Created by Bjatta on 19.04.2017. from 12.03
 */
((...arrays)=> {
    var firstArray = arrays[0];
    console.log('12.03 a',firstArray[1][arrays[1]]);
    console.log('12.03 b',firstArray[arrays[1]][arrays[2]]);
    console.log(' ');
})(
    [
        [1.1,1.2,1.3,1.4,1.5],
        [2.1,2.2,2.3,2.4,2.5],
        [3.1,3.2,3.3,3.4,3.5],
        [4.1,4.2,4.3,4.4,4.5],
        [5.1,5.2,5.3,5.4,5.5]
    ],Math.round(Math.random()*4)
     ,Math.round(Math.random()*4)
);