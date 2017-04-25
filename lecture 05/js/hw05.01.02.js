/**
 * Created by Bjatta on 25.04.2017.
 * 11.72.Определить количество положительных и количество отрицательных элементов массива.
 */
;(a=>{
    "use strict";
    let negative=0;
    let positive=0;
    a.forEach((i,index)=>{
        a[index]-=5;
        if (a[index]>0) positive++;
        if (a[index]<0) negative++;
    });
    console.log('11.72. ',a,'+:'+positive,' -:'+negative);
    }
)(ra(10,10));