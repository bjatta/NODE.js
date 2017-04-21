/**
 * Created by Bjatta on 20.04.2017.
 */
let a = Math.round(Math.random()*121)+12;
let b = Math.round(Math.random()*121)+12;
console.log('started with "-"');
((a,b) => {
    console.log('first: ',a,b);
    while (a%b != 0 && a >0 && b>0){
        [a,b] = [Math.min(a,b),Math.abs(a-b)];
        console.log('inner: ',a,b);
    }
    console.log('result: ',a,b);
})(a,b);
console.log('again with "%"');
((a,b) => {
    console.log('first: ',a,b);
    while (a%b != 0 && a >0 && b>0){
        [a,b] = [Math.max(a,b)%Math.min(a,b)
                ,Math.min(a,b)];
        console.log('inner: ',a,b);
    }
    console.log('result: ',a,b);
})(a,b);