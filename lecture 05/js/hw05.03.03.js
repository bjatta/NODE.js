/*
Created by Bjatta on 25.04.2017.

 12.47.Дан двумерный массив.
 Определить произведение элементов третьей строки.

 */
;(a=>{
    "use strict";
    console.log('12.47. (r)',a[0]);
    console.log('          ',a[1]);
    console.log('          ',a[2]);
    console.log('          ',a[2].reduce((p,c)=>p*=c,1));
    }
)([ra(3,6),ra(3,6),ra(3,6)]);