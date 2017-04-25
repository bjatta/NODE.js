/*
Created by Bjatta on 25.04.2017.

 12.36.Дан двумерный массив.
 Определить:
    а)сумму всех элементов второго столбца массива;
    б)сумму всех элементов k-й строки массива.

 */
;(a=>{
    "use strict";
    console.log('12.36. (r)',a[0]);
    console.log('          ',a[1]);
    console.log('          ',a[2]);
    let n=r(2),sum=0;
    console.log('        a) n:',n,' sum = ',a[n].reduce((p,c)=>p+=c,0));
    for (let i=0;i<a.length;i++) sum+=a[i][1];
    console.log('        б)',sum);
    }
)([ra(3,6),ra(3,6),ra(3,6)]);