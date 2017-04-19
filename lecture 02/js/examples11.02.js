/**
 * Created by Bjatta on 19.04.2017. from 11.02
 */
((...vars)=> {
    var array10 = [];
    for (value in vars) array10.push(vars[value]);
    console.log('11.02:',array10);
})(1,2,3,4,5,6,7,8,9,0);