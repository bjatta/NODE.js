/*
Created by Bjatta on 25.04.2017.
11.146. Дан одномерный массив из 20элементов.
    Переставить первые три и по-следние три элемента,
    сохранив порядок их следования.
*/
;(a=>{
    "use strict";
    console.log('11.146. (r)',a);
    [a[0],a[1],a[2],a[a.length-3],a[a.length-2],a[a.length-1]]=
        [a[a.length-3],a[a.length-2],a[a.length-1],a[0],a[1],a[2]];
    console.log('          =',a);
    }
)(ra(20,100));