/*
Created by Bjatta on 25.04.2017.

 12.35.Дан двумерный массив.
 Определить:
    а)сумму всех элементов третьей строки массива;
    б)сумму всех элементов s-го столбца массива.
 */
;(a=>{
    "use strict";
    console.log('12.35.(r)',a[0]);
    console.log('         ',a[1]);
    console.log('         ',a[2]);
    console.log('       a)',a[2].reduce((p,c)=>p+=c,0));
    let n=r(2),sum=0;
    for (let i=0;i<a.length;i++) sum+=a[i][n];
    console.log('       б) n:',n,' sum = ',sum);
    }
)([ra(3,6),ra(3,6),ra(3,6)]);