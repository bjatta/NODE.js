/**
 * Created by Bjatta on 19.04.2017. from 11.03
 */
((...vars)=> {
    let array15 = [];
//    for (let i=0;i<16;i++) array15.push(Math.random() * (max - min) + min);
    for (let i=0;i<16;i++) array15.push(Math.random().toFixed(6)*1);
    console.log('а',array15);array15.length=0;
    for (let i=0;i<16;i++) array15.push((Math.random() * (23 - 22) + 22).toFixed(2)*1);
    console.log('б',array15);array15.length=0;
    for (let i=0;i<16;i++) array15.push((Math.random()*10).toFixed(2)*1);
    console.log('в',array15);array15.length=0;
    for (let i=0;i<16;i++) array15.push((Math.random()*100 - 50).toFixed(2)*1);
    console.log('г',array15);array15.length=0;
    for (let i=0;i<16;i++) array15.push(Math.round(Math.random()*10));
    console.log('д',array15);array15.length=0;
})(1,2,3,4,5,6,7,8,9,0);